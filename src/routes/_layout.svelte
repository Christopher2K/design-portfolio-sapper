<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'

  // Const
  const bannerDuration: number = 1500

  // State
  let displayAfterLoadBanner: boolean = true
  let barSize: number = 0

  // Lifecycle
  onMount(() => {
    const interval = setInterval(() => {
      barSize += 1
    }, bannerDuration / 100)

    setTimeout(() => {
      displayAfterLoadBanner = false
      clearInterval(interval)
    }, bannerDuration)
  })
</script>

{#if displayAfterLoadBanner}
  <section class="banner" transition:fade>
    <span style="width: {barSize}%;" />
    <h2>Eunice Tchitchiama</h2>
    <p>Designer graphique & Designer numérique</p>
  </section>
{/if}

<main>
  <slot />
</main>

<style lang="scss">
  @import 'theme.scss';

  :global {
    @import 'reset.scss';
    @import 'base.scss';
  }

  .banner {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;

    background-color: $black;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 110;

      height: 0.5rem;
      width: 0;
      background-color: $white;
    }

    h2,
    p {
      color: $white;
      line-height: 3.41rem;
      font-size: 2.2rem;
    }
  }
</style>
