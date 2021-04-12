<script lang="ts" context="module">
  import { getHomepageData, getProjectsThumbnails } from 'services/data'

  export async function preload() {
    const data = await getHomepageData()
    const thumbnails = await getProjectsThumbnails()
    return { data, thumbnails }
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import Carousel from 'components/Carousel.svelte'
  import Nav from 'components/Nav.svelte'
  import PresentationLine from 'components/PresentationLine.svelte'
  import ProjectThumbnail from 'components/ProjectThumbnail.svelte'

  let rootElement: HTMLDivElement
  let projectsContainer: HTMLDivElement

  export let data: HomepageData
  export let thumbnails: Thumbnail[]

  function scrollToProjects() {
    rootElement.scrollTo({
      behavior: 'smooth',
      top: projectsContainer.offsetTop,
    })
  }

  onMount(() => {
    if (window.location.hash === '#projects') {
      rootElement.scrollTo({
        top: projectsContainer.offsetTop,
      })
    }
  })
</script>

<svelte:head>
  <title>Eunice Tchitchiama: Designer graphique, designer numérique</title>
</svelte:head>

<Nav on:homepageProjectsClick={scrollToProjects} />
<div
  class="root"
  bind:this={rootElement}
  in:fade={{ duration: 500 }}
  out:fade={{ duration: 250 }}
>
  <div class="content">
    <Carousel items={data.carouselItems} on:carouselEnd={scrollToProjects} />
    <div id="projects" bind:this={projectsContainer}>
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
      <footer class="index-footer">
        {@html data.footerHtml}
      </footer>
    </div>
  </div>
</div>

<style lang="scss">
  @import 'theme.scss';

  .root {
    width: 100%;
    position: relative;
    height: calc(100% - 8rem);
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: $grey;

    @include mobileStyle {
      height: calc(100% - 7rem);
    }
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: $grey;
  }

  #projects {
    padding: {
      top: 6rem;
      left: 3.5rem;
      right: 3.5rem;
    }

    @include mobileStyle {
      padding: {
        top: 3rem;
        left: 1.6rem;
        right: 1.6rem;
      }
    }
  }

  section {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 2rem;
    row-gap: 4rem;
    margin-bottom: 8rem;

    @include mobileStyle {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      row-gap: 4rem;
      margin-bottom: 6rem;
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 2rem;
  }

  :global(.index-footer p) {
    text-align: center;
    font-size: 1.4rem;
    line-height: 1.82rem;

    @include mobileStyle {
      font-size: 1.2rem;
      line-height: 1.56rem;
    }
  }
</style>
