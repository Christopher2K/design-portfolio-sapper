<script lang="ts">
  export let lang: 'FR' | 'EN'
  export let data: InfoSet
  export let publicationTitle: string
  export let exhibitTitle: string
  export let educationTitle: string
</script>

<svelte:head>
  <title>Eunice Tchitchiama: Mon parcours</title>
</svelte:head>

<div class="root">
  <span>{lang}</span>

  <div class="content">
    <header>
      {@html data.bio}
    </header>
    <h2>{data.domains}</h2>

    <div class="group">
      <h3>{publicationTitle}</h3>
      <ul>
        {#each data.publications as p}
          <li>
            {p.date} - {p.title}, {@html p.link}
          </li>
        {/each}
      </ul>
    </div>

    <div class="group">
      <h3>{exhibitTitle}</h3>
      <ul>
        {#each data.exhibits as e}
          <li>
            {e.date} - {e.title}, {e.place}
          </li>
        {/each}
      </ul>
    </div>

    <div class="group">
      <h3>{educationTitle}</h3>
      <ul>
        {#each data.degrees as e}
          <li>
            {e.date} - {e.name}, {e.school}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style lang="scss">
  @import 'theme.scss';

  .root {
    display: grid;
    grid-template-columns: 3rem minmax(0, 1fr);
    column-gap: 2rem;
    width: 100%;
  }

  span {
    color: $white;
    font-family: $primary-font;
    font-size: 1.9rem;
    line-height: 2.755rem;
  }

  header {
    color: $white;
    font-family: $primary-font;
    font-size: 2rem;
    line-height: 2.9rem;
    margin-bottom: 3.5rem;
    font-weight: 300;
  }

  h2 {
    font-family: $title-font;
    font-size: 3rem;
    line-height: 4.35rem;
    color: $white;
    margin-bottom: 6rem;
    text-transform: uppercase;
    font-weight: 400;
  }

  .group {
    margin-bottom: 6rem;
  }

  h3 {
    font-family: $primary-font;
    font-size: 2.1rem;
    line-height: 3.045rem;
    color: $white;
    font-weight: 300;
    text-transform: uppercase;
  }

  ul {
    @include reset-list-style;
  }

  li {
    font-family: $primary-font;
    font-size: 1.8rem;
    line-height: 2.61rem;
    color: $white;
    font-weight: 300;

    & :global(p) {
      display: inline;
    }

    & :global(a) {
      text-decoration: underline;
      font-family: $primary-font;
      font-size: 1.8rem;
      color: $white;
      line-height: 2.61rem;
      font-weight: 300;
    }
  }
</style>
