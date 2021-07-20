const baseUrl = 'https://github.com/miraklasiaf/miraklasiaf.com'

export const TWITTER_USER_NAME = 'miraklasiaf'
export const PLATFORM_NAME = 'miraklasiaf'
export const PLATFORM_LOWERCASE = 'miraklasiaf'
export const PLATFORM_URL = 'https://miraklasiaf.com'

export const siteMetadata = {
  copyright: `© ${new Date().getFullYear()} Faisal Karim`,
  author: {
    name: 'Faisal Karim',
    github: 'https://github.com/miraklasiaf',
    twitter: 'https://twitter.com/miraklasiaf',
    linkedin: 'https://linkedin.com/in/miraklasiaf',
    email: 'faisalkarim96@gmail.com',
    mailto: 'mailto:faisalkarim96@gmail.com'
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/develop/website`,
    blobUrl: `${baseUrl}/blob/develop`
  },
  seo: {
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `${PLATFORM_URL}`,
      site_name: `${PLATFORM_NAME}.com`
    },
    twitter: {
      handle: '@miraklasiaf',
      site: '@miraklasiaf',
      cardType: 'summary_large_image'
    }
  }
}

export const routes = [
  ['Home', '/'],
  ['Blog', '/blog'],
  ['Dashboard', '/dashboard'],
  ['About', '/about']
]
