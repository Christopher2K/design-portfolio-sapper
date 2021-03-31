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
