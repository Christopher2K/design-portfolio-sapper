import Prismic from '@prismicio/client'
import PrismicDOM from 'prismic-dom'

const apiEndpoint = 'https://euniceportfoliov2.cdn.prismic.io/api/v2'

function getClient() {
  return Prismic.client(apiEndpoint)
}

function transformRawHomepageData(d: Raw.HomepageData): HomepageData {
  return {
    carouselItems: d.carousel_items.map(i => {
      return {
        image: i.image.url,
        title: i.title,
        color: i.text_background,
      }
    }),
    footerHtml: PrismicDOM.RichText.asHtml(d.footer),
    fullName: d.full_name,
    jobName: d.job_name,
    mail: d.mail,
  }
}

function transformRawProjectsThumbnail(d: Raw.ProjectData[]): Thumbnail[] {
  return d
    .map(i => ({
      categories: i.data.category_list.map(c => c.category),
      image: {
        url: i.data.thumbnail.url,
        width: i.data.thumbnail.dimensions.width,
        height: i.data.thumbnail.dimensions.height,
      },
      order: i.data.number,
      title: i.data.name,
      uid: i.uid,
    }))
    .sort(({ order: a }, { order: b }) => {
      if (a < b) {
        return 1
      } else if (b < a) {
        return -1
      }
      return 0
    })
}

function transformProjetRawData(d: Raw.ProjectData[]): ProjectData[] {
  function getProjectIDByNumber(number: number): string {
    let nb = number
    if (number < 1) {
      nb = d.length - 1
    } else if (number > d.length) {
      nb = 1
    }

    return d.find(i => i.data.number === nb).uid
  }

  return d.map(i => ({
    uid: i.uid,
    nextProject: getProjectIDByNumber(i.data.number + 1),
    prevProject: getProjectIDByNumber(i.data.number - 1),
    title: i.data.name,
    year: i.data.year,
    assets: i.data.assets.map(a => ({
      type: a.type,
      url: a.type === 'video' ? a.video_link.url : a.image.url,
      width: a.image?.dimensions?.width,
      height: a.image?.dimensions?.height,
    })),
    categories: i.data.category_list.map(c => c.category),
    descriptionFr: PrismicDOM.RichText.asHtml(i.data.description_fr),
    descriptionEn: PrismicDOM.RichText.asHtml(i.data.description_en),
    shortDescription:
      PrismicDOM.RichText.asText(i.data.description_fr).substring(0, 197) + '...',
    thumbnailUrl: i.data.thumbnail.url,
  }))
}

function tranformInformationPageRawData(d: Raw.InfosPageData): InfoPageData {
  return {
    color: d.color,
    email: d.email,
    name: d.name,
    media: d.media && d.media.url && d.media.url !== '' ? d.media.url : undefined,
    socialsNetworks: d.social_networks.map(sn => ({
      link: sn.network_link.url,
      name: sn.network_name,
    })),
    french: {
      bio: PrismicDOM.RichText.asHtml(d.fr_bio),
      domains: d.fr_domains,
      publications: d.fr_publications.map(p => ({
        date: p.fr_publication_date,
        link: PrismicDOM.RichText.asHtml(p.fr_publication_link),
        title: p.fr_publication_title,
      })),
      degrees: d.fr_degrees.map(de => ({
        date: de.fr_degree_date,
        name: de.fr_degree_name,
        school: de.fr_degree_school,
      })),
      exhibits: d.fr_exhibits.map(e => ({
        date: e.fr_exhibit_date,
        place: e.fr_exhibit_place,
        title: e.fr_exhibit_title,
      })),
    },
    english: {
      bio: PrismicDOM.RichText.asHtml(d.en_bio),
      domains: d.en_domains,
      publications: d.en_publications.map(p => ({
        date: p.en_publication_date,
        link: PrismicDOM.RichText.asHtml(p.en_publication_link),
        title: p.en_publication_title,
      })),
      degrees: d.en_degrees.map(de => ({
        date: de.en_degree_date,
        name: de.en_degree_name,
        school: de.en_degree_school,
      })),
      exhibits: d.en_exhibits.map(e => ({
        date: e.en_exhibit_date,
        place: e.en_exhibit_place,
        title: e.en_exhibit_title,
      })),
    },
  }
}

export async function getHomepageData() {
  const client = await getClient()

  const response = await client.queryFirst(
    Prismic.Predicates.at('document.type', 'home_page'),
  )

  return transformRawHomepageData(response.data)
}

export async function getProjectsThumbnails() {
  const client = await getClient()

  const response = await client.query(Prismic.Predicates.at('document.type', 'project'))

  return transformRawProjectsThumbnail(response.results as Raw.ProjectData[])
}

export async function getSingleProject(uid: string): Promise<ProjectData | undefined> {
  const client = await getClient()

  const response = await client.query(Prismic.Predicates.at('document.type', 'project'))

  const data = transformProjetRawData(response.results as Raw.ProjectData[])

  const project = data.find(p => p.uid === uid)

  return project
}

export async function getInfosPageData() {
  const client = await getClient()

  const response = await client.queryFirst(
    Prismic.Predicates.at('document.type', 'information_page'),
  )

  return tranformInformationPageRawData(response.data)
}
