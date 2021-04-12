<script lang="ts">
  export let title: string
  export let href: string
  export let target: string
  export let light: boolean = false
  export let rel: string
</script>

<a {href} {target} {rel} on:click class:light>{title}</a>

<style lang="scss">
  @import 'theme.scss';

  a {
    font-family: $title_font;
    text-transform: uppercase;
    font-size: 5rem;
    line-height: 6rem;
    color: $black;

    &.light {
      color: $white;
    }

    @include mobileStyle {
      font-size: 2.4rem;
      line-height: 2.88rem;
    }
  }
</style>
