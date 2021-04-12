<script lang="ts" context="module">
  import { getSingleProject } from 'services/data'

  export async function preload({ params }) {
    const data = await getSingleProject(params.slug)

    if (!data) {
      return this.error(404, 'Not found')
    }

    return { data }
  }
</script>

<script lang="ts">
  import { fade } from 'svelte/transition'
  import ProjectAsset from 'components/ProjectAsset.svelte'
  import ProjectHeader from 'components/ProjectHeader.svelte'
  import ProjectDescription from 'components/ProjectDescription.svelte'
  import ProjectNav from 'components/ProjectNav.svelte'
  import ProjectArrows from 'components/ProjectArrows.svelte'

  export let data: ProjectData

  let rootElm: HTMLDivElement
  let mobileDescriptionOpen: boolean = false

  $: if (data && rootElm) {
    rootElm.scrollTo({
      top: 0,
    })
  }

  function openDescription() {
    mobileDescriptionOpen = true
  }

  function closeDescription() {
    mobileDescriptionOpen = false
  }
</script>

<svelte:head>
  <title>Eunice Tchitchiama: {data.title}</title>
</svelte:head>

<ProjectNav prevLink="/projet/{data.prevProject}" nextLink="/projet/{data.nextProject}" />
<div
  class="root"
  in:fade={{ duration: 500 }}
  out:fade={{ duration: 250 }}
  bind:this={rootElm}
>
  <section>
    <ProjectHeader
      title={data.title}
      categories={data.categories}
      year={data.year}
      on:click={openDescription}
    />
    <div class="descriptions" class:mobileDescriptionOpen>
      <header>
        <button type="button" on:click={closeDescription}>
          <img src="/icons/close.svg" alt="Fermer" />
        </button>
      </header>
      <ProjectDescription langAcronym="FR" htmlContent={data.descriptionFr} />
      <ProjectDescription langAcronym="EN" htmlContent={data.descriptionEn} />
    </div>
  </section>
  <ul>
    {#each data.assets as asset}
      <li>
        <ProjectAsset {asset} />
      </li>
    {/each}
    <li class="arrow">
      <ProjectArrows
        prevLink="/projet/{data.prevProject}"
        nextLink="/projet/{data.nextProject}"
      />
    </li>
  </ul>
</div>

<style lang="scss">
  @import 'theme.scss';

  .root {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    width: 100%;
    height: 100vh;
    background-color: $grey;

    @include mobileStyle {
      display: block;
      height: calc(100vh - 7rem);
      overflow-y: auto;
    }
  }

  .descriptions {
    width: 83.333%;
    padding-left: 3.5rem;

    @include mobileStyle {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 500;
      padding-top: 3.5rem;
      padding-left: 1.6rem;
      padding-right: 1.6rem;

      width: 100vw;
      height: 100vh;
      overflow-y: auto;
      background-color: $grey;

      &.mobileDescriptionOpen {
        display: block;
      }
    }
  }

  .descriptions header {
    display: none;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    margin-bottom: 4.1rem;

    @include mobileStyle {
      display: flex;
    }
  }

  header button {
    @include reset-button-style;
    margin-left: auto;
  }

  section,
  ul {
    width: 50%;
    flex: 1 1 0;
    margin: 0;
    overflow-y: auto;

    @include mobileStyle {
      width: 100%;
      flex: initial;
    }
  }

  section {
    height: calc(100vh - 8rem);
    max-width: 1000px;

    @include mobileStyle {
      height: auto;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    height: 100vh;

    @include mobileStyle {
      height: initial;
    }
  }

  li {
    display: flex;
    width: 100%;
  }

  .arrow {
    display: none;

    @include mobileStyle {
      display: flex;
    }
  }
</style>
