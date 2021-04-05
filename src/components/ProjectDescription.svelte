<script lang="ts">
  export let langAcronym: string
  export let htmlContent: string
</script>

<article>
  <span>{langAcronym}</span>
  <div class="descriptionHtml">
    {@html htmlContent}
  </div>
</article>

<style lang="scss">
  @import 'theme.scss';

  article {
    display: grid;
    grid-template-columns: 2.5rem minmax(0, 1fr);
    width: 100%;
    column-gap: 1.4rem;
    margin-bottom: 30px;
  }

  span,
  div {
    font-family: $primary-font;
    font-weight: normal;
    font-size: 1.7rem;
    line-height: 2.465rem;
  }

  .descriptionHtml :global(a) {
    color: $black;
    text-decoration: underline;
  }
</style>
