<script lang="ts">
  export let title: string
  export let description: string =
    "Designer graphique & numérique basée à Paris, spécialisée dans la création d'identité visuelle, interface numérique et objets imprimés."
  export let image: string = 'https://eunice-tchm.design/banner.jpeg'
</script>

<title>{title}</title>
<meta property="og:title" content={title} />
<meta name="twitter:title" content={title} />

<meta property="og:image" content={image} />
<meta name="twitter:image" content={image} />

<meta name="description" content={description} />
<meta property="og:description" content={description} />
<meta name="twitter:description" content={description} />
