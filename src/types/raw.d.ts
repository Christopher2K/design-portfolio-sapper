declare namespace Raw {
  type PrismicRichText = unknown[]

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
    footer: PrismicRichText
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
      description_en: PrismicRichText
      description_fr: PrismicRichText
    }
  }

  type SocialNetwork = {
    network_name: string
    network_link: PrismicLink
  }

  type FrPublication = {
    fr_publication_date: string
    fr_publication_title: string
    fr_publication_link: PrismicRichText
  }

  type EnPublication = {
    en_publication_date: string
    en_publication_title: string
    en_publication_link: PrismicRichText
  }

  type FrDegree = {
    fr_degree_date: string
    fr_degree_name: string
    fr_degree_school: string
  }

  type EnDegree = {
    en_degree_date: string
    en_degree_name: string
    en_degree_school: string
  }

  type FrExhibit = {
    fr_exhibit_date: string
    fr_exhibit_title: string
    fr_exhibit_place: string
  }

  type EnExhibit = {
    en_exhibit_date: string
    en_exhibit_title: string
    en_exhibit_place: string
  }

  type InfosPageData = {
    color: string
    name: string
    email: string
    social_networks: SocialNetwork[]
    media: PrismicImage

    fr_bio: PrismicRichText
    fr_domains: string
    fr_publications: FrPublication[]
    fr_degrees: FrDegree[]
    fr_exhibits: FrExhibit[]

    en_bio: PrismicRichText
    en_domains: string
    en_publications: EnPublication[]
    en_degrees: EnDegree[]
    en_exhibits: EnExhibit[]
  }
}
