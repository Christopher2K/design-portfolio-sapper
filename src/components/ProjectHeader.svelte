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

    @include mobileStyle {
      width: 100%;
      padding-left: 1.6rem;
      padding-right: 1.6rem;
      margin-bottom: 4.1rem;
    }
  }

  h1 {
    font-family: $primary-font;
    font-weight: normal;
    font-size: 1.7rem;
    line-height: 2.465rem;
    text-transform: uppercase;
    color: $black;

    @include mobileStyle {
      font-size: 1.5rem;
      line-height: 2.175rem;
    }
  }

  h2 {
    font-family: $primary-font;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2.32rem;
    color: $black;

    @include mobileStyle {
      font-size: 1.3rem;
      line-height: 1.885rem;
    }
  }
</style>
