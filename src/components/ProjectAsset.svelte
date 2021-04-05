<script lang="ts">
  export let asset: ProjectAsset
</script>

{#if asset.type === 'image'}
  <img src={asset.url} alt="TODO" />
{:else}
  <div>
    <iframe
      title="TODO"
      src="https://player.vimeo.com/video/531825168?color=C0B283&title=0&byline=0&portrait=0&badge=0"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    />
  </div>
{/if}

<style lang="scss">
  @import 'theme.scss';

  img {
    width: 100%;
    height: auto;
    float: left;
  }

  div {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
