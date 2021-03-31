<script lang="ts" context="module">
  import { getHomepageData, getProjectsThumbnails } from 'services/data'

  export async function preload() {
    const data = await getHomepageData()
    const thumbnails = await getProjectsThumbnails()
    return { data, thumbnails }
  }
</script>

<script lang="ts">
  import Carousel from 'components/Carousel.svelte'
  import PresentationLine from 'components/PresentationLine.svelte'
  import ProjectThumbnail from 'components/ProjectThumbnail.svelte'

  export let data: HomepageData
  export let thumbnails: Thumbnail[]
</script>

<svelte:head>
  <title>Eunice Tchitchiama: Designer graphique, designer numérique</title>
</svelte:head>

<div class="root">
  <div class="content">
    <Carousel items={data.carouselItems} />
    <div id="projects">
      <PresentationLine
        fullName={data.fullName}
        jobName={data.jobName}
        email={data.mail}
      />
      <section class="thumbnails">
        {#each thumbnails as thumbnail (thumbnail.uid)}
          <ProjectThumbnail {...thumbnail} />
        {/each}
      </section>
      <footer />
    </div>
  </div>
</div>

<style lang="scss">
  @import 'theme.scss';

  .root {
    width: 100%;
    position: relative;
    height: calc(100vh - 8rem);
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: $grey;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: $grey;
  }

  #projects {
    padding: 0 3.5rem;
  }

  section {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 2rem;
    row-gap: 4rem;
  }
</style>
