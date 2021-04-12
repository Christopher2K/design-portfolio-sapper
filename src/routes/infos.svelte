<script lang="ts" context="module">
  import { getInfosPageData } from 'services/data'

  export async function preload() {
    const data = await getInfosPageData()
    return { data }
  }
</script>

<script lang="ts">
  import { fade } from 'svelte/transition'
  import InfosNav from 'components/InfosNav.svelte'
  import InfosContact from 'components/InfosContact.svelte'
  import Curriculum from 'components/Curriculum.svelte'

  export let data: InfoPageData
</script>

<svelte:head>
  <title>Eunice Tchitchiama: Mon parcours</title>
</svelte:head>

<InfosNav />
<div class="root" in:fade={{ duration: 500 }} out:fade={{ duration: 250 }}>
  <section>
    <InfosContact
      email={data.email}
      fullName={data.name}
      socialNetworks={data.socialsNetworks}
    />
  </section>
  <section>
    <div class="content">
      <Curriculum
        lang="FR"
        data={data.french}
        publicationTitle="Publications"
        exhibitTitle="Expositions & Conférences"
        educationTitle="Diplômes"
      />
      <Curriculum
        lang="EN"
        data={data.english}
        publicationTitle="Publications"
        exhibitTitle="Exhibitions & Talks"
        educationTitle="Education"
      />
    </div>
  </section>
</div>

<style lang="scss">
  @import 'theme.scss';

  .root {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    width: 100%;
    height: 100vh;
    background-color: $green;

    @include mobileStyle {
      display: block;
      height: calc(100vh - 7rem);
      overflow-y: auto;
    }
  }

  section {
    width: 50%;
    flex: 1 1 0;
    margin: 0;
    padding-top: 3.5rem;
    overflow-y: auto;

    @include mobileStyle {
      width: 100%;
      flex: initial;
    }
  }

  section:first-of-type {
    height: calc(100vh - 8rem);
    max-width: 1000px;
    padding-left: 3.5rem;

    @include mobileStyle {
      height: auto;
      padding: {
        left: 1.6rem;
        right: 1.6rem;
      }
    }
  }

  section:last-of-type {
    padding-right: 3.5rem;
    height: 100vh;

    @include mobileStyle {
      height: auto;
      padding: {
        top: 4.5rem;
        left: 1.6rem;
        right: 1.6rem;
      }
    }
  }
</style>
