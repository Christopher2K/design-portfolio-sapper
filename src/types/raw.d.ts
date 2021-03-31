declare namespace Raw {
  type PrismisRichText = unknown[]

  type PrismicImage = {
    url: string
  }

  type PrismicLink = PrismicImage

  type CarouselItem = {
    image: PrismicImage
    text_background: 'dark' | 'light'
    title: string
  }

  type HomepageData = {
    carousel_items: CarouselItem[]
    footer: PrismisRichText
    full_name: string
    job_name: string
    mail: string
  }

  type ProjectAsset = {
    image: PrismicImage
    video_link: PrismicLink
    type: 'image' | 'video'
  }

  type ProjectCategory = {
    category: string
  }

  type ProjectData = {
    uid: string
    data: {
      name: string
      number: number
      year: string
      assets: ProjectAsset[]
      category_list: ProjectCategory[]
      thumbnail: PrismicImage
      description_en: PrismisRichText
      description_fr: PrismisRichText
    }
  }
}
