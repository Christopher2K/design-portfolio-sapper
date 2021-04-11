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

declare type SocialNetwork = {
  name: string
  link: string
}

declare type Publication = {
  date: string
  title: string
  link: string
}

declare type Degree = {
  date: string
  name: string
  school: string
}

declare type Exhibit = {
  date: string
  title: string
  place: string
}

declare type InfoSet = {
  bio: string
  domains: string
  publications: Publication[]
  degrees: Degree[]
  exhibits: Exhibit[]
}

declare type InfoPageData = {
  color: string
  name: string
  email: string
  media?: string
  socialsNetworks: SocialNetwork[]
  french: InfoSet
  english: InfoSet
}
