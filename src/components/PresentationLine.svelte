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
  }

  h1,
  h2 {
    display: inline-block;
    font-weight: normal;
  }

  h1 {
    font-family: $title_font;
    font-size: 1.8rem;
    line-height: 2.16rem;
    text-transform: uppercase;
    margin-right: 1.6rem;
  }

  h2 {
    font-size: 1.7rem;
  }

  a {
    font-size: 1.8rem;
    line-height: 2.005rem;
    color: $black;
  }
</style>
