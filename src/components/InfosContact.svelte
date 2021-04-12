<script lang="ts">
  export let fullName: string
  export let email: string
  export let socialNetworks: SocialNetwork[]
  export let media: string | undefined
</script>

<div class="root">
  <div>
    <h1>{fullName}</h1>
    <a href="mailto:{email}">{email}</a>
  </div>

  <div>
    <h3>Contact</h3>
    <a href="mailto:{email}">{email}</a>
  </div>

  <div>
    <h3>Follow</h3>
    <ul>
      {#each socialNetworks as sn}
        <li>
          <a href={sn.link} target="_blank">{sn.name}</a>
        </li>
      {/each}
    </ul>
  </div>

  {#if media}
    <div>
      <img src={media} alt="Ambiance" />
    </div>
  {/if}
</div>

<style lang="scss">
  @import 'theme.scss';

  @mixin info-text-style {
    color: $white;
    font-family: $primary-font;
    font-size: 1.9rem;
    line-height: 2.755rem;
    text-decoration: none;
    font-weight: normal;

    @include mobileStyle {
      font-size: 1.5rem;
      line-height: 2.175rem;
    }
  }

  .root {
    width: 100%;

    @include mobileStyle {
      display: grid;
      grid-template-columns: 50% 50% 100%;
    }
  }

  h1,
  h3,
  li,
  a {
    @include info-text-style;
  }

  h1,
  div:not(.root) {
    margin-bottom: 3.5rem;

    @include mobileStyle {
      margin-bottom: 0;
    }
  }

  ul {
    @include reset-list-style;

    @include mobileStyle {
      display: inline-block;
    }
  }

  h3 {
    @include mobileStyle {
      display: none;
    }
  }

  div:not(.root):nth-of-type(1) {
    & a {
      display: none;

      @include mobileStyle {
        display: block;
      }
    }
  }

  div:not(.root):nth-of-type(2) {
    @include mobileStyle {
      display: none;
    }
  }

  div:not(.root):nth-of-type(3) {
    @include mobileStyle {
      justify-self: end;
    }
  }
</style>
