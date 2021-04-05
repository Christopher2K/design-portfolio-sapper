<script lang="ts">
  export let title: string
  export let categories: string[]
  export let year: string
</script>

<header>
  <h1>{title}</h1>
  <h2>{categories.join(', ')}, {year}</h2>
</header>

<style lang="scss">
  @import 'theme.scss';

  header {
    width: 83.333%;
    padding-left: 3.5rem;
    padding-top: 3.5rem;
    margin-bottom: 6rem;
  }

  h1 {
    font-family: $primary-font;
    font-weight: normal;
    font-size: 1.7rem;
    line-height: 2.465rem;
    text-transform: uppercase;
    color: $black;
  }

  h2 {
    font-family: $primary-font;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2.32rem;
    color: $black;
  }
</style>
