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

  export let data: ProjectData
  console.log(data)
</script>

<svelte:head>
  <title>Eunice Tchitchiama: {data.title}</title>
</svelte:head>

<ProjectNav prevLink="/projet/{data.prevProject}" nextLink="/projet/{data.nextProject}" />
<div class="root" in:fade={{ duration: 500 }} out:fade={{ duration: 250 }}>
  <section>
    <ProjectHeader title={data.title} categories={data.categories} year={data.year} />
    <div class="descriptions">
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
  </ul>
</div>

<style lang="scss">
  @import 'theme.scss';

  .root {
    display: flex;
    justify-content: row;
    justify-content: flex-start;
    align-items: flex-start;

    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: $grey;
  }

  .descriptions {
    width: 83.333%;
    padding-left: 3.5rem;
  }

  section,
  ul {
    width: 50%;
    flex: 1 1 0;
    margin: 0;
    overflow-y: auto;
  }

  section {
    height: calc(100vh - 8rem);
    max-width: 1000px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    height: 100vh;
  }

  li {
    width: 100%;
  }
</style>
