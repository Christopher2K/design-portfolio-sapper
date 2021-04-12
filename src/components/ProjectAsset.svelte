<script lang="ts">
  export let asset: ProjectAsset
</script>

{#if asset.type === 'image'}
  <img src={asset.url} alt="TODO" width={asset.width} height={asset.height} />
{:else}
  <div>
    <iframe
      title="TODO"
      src={asset.url}
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    />
  </div>
{/if}

<style lang="scss">
  @import 'theme.scss';

  img {
    display: block;
    width: 100%;
    height: 100%;
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
