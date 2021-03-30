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

export async function getHomepageData() {
  const client = await getClient()

  const response = await client.queryFirst(
    Prismic.Predicates.at('document.type', 'home_page'),
  )

  return transformRawHomepageData(response.data)
}
