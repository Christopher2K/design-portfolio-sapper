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
      image: i.data.thumbnail.url,
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
