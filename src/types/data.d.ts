declare type CarouselItem = {
  image: string
  color: 'dark' | 'light'
  title: string
}

declare type HomepageData = {
  carouselItems: CarouselItem[]
  footerHtml: string
  fullName: string
  jobName: string
  mail: string
}

declare type Thumbnail = {
  categories: string[]
  title: string
  order: number
  image: string
  uid: string
}

declare type ProjectAsset = {
  url: string
  type: 'image' | 'video'
}

declare type ProjectData = {
  uid: string
  nextProject: string
  prevProject: string
  title: stringv
  year: string
  assets: ProjectAsset[]
  categories: string[]
  descriptionEn: string
  descriptionFr: string
}
