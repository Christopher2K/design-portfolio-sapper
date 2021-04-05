<script lang="ts">
  export let prevLink: string
  export let nextLink: string
</script>

<div>
  <a href={prevLink} sapper:noscroll>← Préc.</a>
  <a href={nextLink} sapper:noscroll>Suiv. →</a>
</div>

<style lang="scss">
  @import 'theme.scss';

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    align-self: flex-end;
    padding-bottom: 1.5rem;
    width: 130px;

    @include mobileStyle {
      width: 100%;
      padding: 3rem 1.6rem;
    }
  }

  a {
    color: $black;
    font-family: $primary-font;
    font-size: 1.6rem;
    line-height: 2.32rem;
  }
</style>
