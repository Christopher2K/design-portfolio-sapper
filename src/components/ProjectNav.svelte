<script lang="ts">
  import { onDestroy, onMount } from 'svelte'

  import { fade } from 'svelte/transition'
  import Nav from './Nav.svelte'
  import NavItem from './NavItem.svelte'
  import ProjectArrows from './ProjectArrows.svelte'

  export let prevLink: string
  export let nextLink: string

  let mobileScreen: boolean

  function updateWindowState() {
    if (typeof window !== 'undefined') {
      mobileScreen = window.innerWidth <= 768
    }
  }

  onMount(() => {
    if (typeof window !== 'undefined') {
      mobileScreen = window.innerWidth <= 768
      window.addEventListener('resize', updateWindowState)
    }
  })

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', updateWindowState)
    }
  })
</script>

{#if mobileScreen === true}
  <Nav customHomepageBehavior={false} />
{:else if mobileScreen === false}
  <nav in:fade={{ duration: 500 }} out:fade={{ duration: 250 }}>
    <div class="content">
      <NavItem href="/#projects" title="Projets" />
      <ProjectArrows {prevLink} {nextLink} />
    </div>
  </nav>
{/if}

<style lang="scss">
  @import 'theme.scss';

  nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 50%;
    max-width: 1000px;
    height: 8rem;
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 83.33%;
    height: 100%;
    padding-left: 3.5rem;
  }
</style>
