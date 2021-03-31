<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'

  import Nav from 'components/Nav.svelte'

  // Const
  const bannerDuration: number = 1500

  // State
  let displayAfterLoadBanner: boolean = false
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
  <Nav />
  <slot />
</main>

<style lang="scss">
  @import 'theme.scss';

  @font-face {
    font-family: 'Romie TRIAL';
    src: url('/fonts/RomieTRIAL-Regular.woff') format('woff'),
      url('/fonts/RomieTRIAL-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Edwardian Script ITC';
    src: url('/fonts/EdwardianScriptITC.woff') format('woff'),
      url('/fonts/EdwardianScriptITC.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Lausanne';
    src: url('/fonts/Lausanne-300.woff') format('woff'),
      url('/fonts/Lausanne-300.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

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
