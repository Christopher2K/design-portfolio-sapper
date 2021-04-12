<script lang="ts">
  export let uid: string
  export let image: MyImageData
  export let title: string
  export let categories: string[]
</script>

<a href="/projet/{uid}">
  <article>
    <img src={image.url} width={image.width} height={image.height} alt={title} />
    <footer>
      <h3>{title}</h3>
      <p>{categories.join(', ')}</p>
    </footer>
  </article>
</a>

<style lang="scss">
  @import 'theme.scss';

  a {
    display: block;
    width: 100%;
    color: $black;
  }

  article {
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
  }

  footer {
    width: 100%;
  }

  h3 {
    font-weight: normal;
    line-height: 1.7rem;
    font-size: 1.7rem;

    @include mobileStyle {
      line-height: 1.5rem;
      font-size: 1.5rem;
    }
  }

  p {
    font-family: $secondary_font;
    font-size: 2.8rem;
    font-size: 2.52rem;

    @include mobileStyle {
      font-size: 2.6rem;
      font-size: 2.34rem;
    }
  }
</style>
