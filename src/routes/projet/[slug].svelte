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
  export let data: ProjectData
  console.log(data)
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<p>dsfmlksdf</p>

<style lang="scss">
</style>
