<script lang="ts">
  export let fullName: string
  export let jobName: string
  export let email: string
</script>

<section>
  <div>
    <h1>{fullName}</h1>
    <h2>{jobName}</h2>
  </div>
  <a href="mailto:{email}">Contact</a>
</section>

<style lang="scss">
  @import 'theme.scss';

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin-bottom: 3rem;

    @include mobileStyle {
      margin-bottom: 4rem;
    }
  }

  h1,
  h2 {
    display: inline-block;
    font-weight: normal;

    @include mobileStyle {
      display: block;
    }
  }

  h1 {
    font-family: $title_font;
    font-size: 1.8rem;
    line-height: 2.16rem;
    text-transform: uppercase;
    margin-right: 1.6rem;

    @include mobileStyle {
      font-size: 1.6rem;
      line-height: 1.92rem;
      margin-bottom: 2rem;
      margin-right: 0;
    }
  }

  h2 {
    font-size: 1.7rem;

    @include mobileStyle {
      font-size: 1.5rem;
      line-height: 1.95rem;
    }
  }

  a {
    font-size: 1.8rem;
    line-height: 2.005rem;
    color: $black;

    @include mobileStyle {
      display: none;
    }
  }
</style>
