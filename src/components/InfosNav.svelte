<script lang="ts">
  import { fade } from 'svelte/transition'
  import NavItem from './NavItem.svelte'
</script>

<nav in:fade={{ duration: 500 }} out:fade={{ duration: 250 }}>
  <div class="content">
    <NavItem href="/#projects" title="Close" light />
  </div>
</nav>

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
