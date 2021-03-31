<script lang="ts" context="module">
  type EventMap = {
    homepageProjectsClick: void
  }
</script>

<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher<EventMap>()

  function onHomepageProjectClicked() {
    dispatch('homepageProjectsClick')
  }
</script>

<nav>
  <section>
    <a href="/infos">Infos</a>
  </section>
  <section>
    <a href="/#projects" on:click|preventDefault={onHomepageProjectClicked}>Projets</a>
  </section>
  <section>
    <a href="https://twenitweni.fr" target="_blank">Blog</a>
  </section>
</nav>

<style lang="scss">
  @import 'theme.scss';

  nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 50;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    height: 8rem;
    padding: 0 5.5rem;
    background-color: $grey;
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &:first-of-type {
      justify-content: flex-start;
    }

    &:last-of-type {
      justify-content: flex-end;
    }
  }

  a {
    font-family: $title_font;
    text-transform: uppercase;
    font-size: 5rem;
    line-height: 6rem;
    color: $black;
  }
</style>
