<script lang="ts" context="module">
  import { getHomepageData } from 'services/data'

  export async function preload() {
    const data = await getHomepageData()
    return { data }
  }
</script>

<script lang="ts">
  import Carousel from 'components/Carousel.svelte'

  export let data: HomepageData
</script>

<svelte:head>
  <title>Eunice Tchitchiama: Designer graphique, designer numérique</title>
</svelte:head>

<div class="root">
  <div class="content">
    <Carousel items={data.carouselItems} />
    <p style="height: 50px;">Conjecture</p>
  </div>
</div>

<style lang="scss">
  .root {
    position: relative;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
