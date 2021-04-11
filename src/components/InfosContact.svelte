<script lang="ts">
  export let fullName: string
  export let email: string
  export let socialNetworks: SocialNetwork[]
  export let media: string | undefined
</script>

<div class="root">
  <h1>{fullName}</h1>

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
  }

  .root {
    width: 100%;
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
  }

  ul {
    @include reset-list-style;
  }
</style>
