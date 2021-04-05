<script lang="ts" context="module">
  type EventMap = {
    homepageProjectsClick: void
  }

  type Page = 'index' | 'project' | 'infos'
</script>

<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { fade } from 'svelte/transition'

  import NavItem from './NavItem.svelte'

  const dispatch = createEventDispatcher<EventMap>()

  export let customHomepageBehavior: boolean = true

  function onHomepageProjectClicked(e: MouseEvent) {
    if (customHomepageBehavior) {
      e.preventDefault()
      dispatch('homepageProjectsClick')
    }
  }
</script>

<nav in:fade={{ duration: 500 }} out:fade={{ duration: 250 }}>
  <section>
    <NavItem href="/infos" title="Infos" />
  </section>
  <section>
    <NavItem href="/#projects" on:click={onHomepageProjectClicked} title="Projets" />
  </section>
  <section>
    <NavItem href="https://twenitweni.fr" target="_blank" title="Blog" />
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

    @include mobileStyle {
      padding: 0 1.6rem;
      height: 7rem;
    }
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
</style>
