<script lang="ts">
  export let title: string
  export let description: string =
    "Designer graphique & numérique basée à Paris, spécialisée dans la création d'identité visuelle, interface numérique et objets imprimés."
</script>

<title>{title}</title>
<meta name="og:title" property="og:title" content={title} />
<meta name="twitter:title" property="twitter:title" content={title} />

<meta
  name="og:image"
  property="og:image"
  content="https://eunice-tchm.design/banner.png"
/>
<meta
  name="twitter:image"
  property="twitter:image"
  content="https://eunice-tchm.design/banner.png"
/>

<meta name="description" content={description} />
<meta name="og:description" property="og:description" content={description} />
<meta name="twitter:description" property="twitter:description" content={description} />
