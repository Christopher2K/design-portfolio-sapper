<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  // State
  let displayAfterLoadBanner = false;

  // Lifecycle
  onMount(() => {
    setTimeout(() => {
      displayAfterLoadBanner = false;
    }, 2000);
  });
</script>

{#if displayAfterLoadBanner}
  <section class="banner" transition:fade>
    <h2>Eunice Tchitchiama</h2>
    <p>Designer graphique & Designer numérique</p>
  </section>
{/if}

<main>
  <slot />
</main>

<style lang="scss">
  @import "theme.scss";

  :global {
    @import "reset.scss";

    html,
    body,
    main {
      overflow: hidden;
      height: 100vh;
      width: 100vw;
    }
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

    h2,
    p {
      color: white;
    }
  }
</style>
