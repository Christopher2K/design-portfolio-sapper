<script lang="ts" context="module">
  import { getHomepageData } from 'services/data'

  export async function preload() {
    const data = await getHomepageData()
    return { data }
  }
</script>

<script lang="ts">
  import Carousel from 'components/Carousel.svelte'
  import PresentationLine from 'components/PresentationLine.svelte'

  export let data: HomepageData
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
    </div>
  </div>
</div>

<style lang="scss">
  .root {
    width: 100%;
    position: relative;
    height: calc(100vh - 8rem);
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  #projects {
    padding: 0 3.5rem;
  }
</style>
