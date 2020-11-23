import { Github, Twitter, Mail } from '../components/icons'

const baseUrl = 'https://github.com/miraklasiaf/miraklasiaf.com'
export const MY_NAME = 'Faisal Karim'
export const TWITTER_USER_NAME = 'miraklasiaf'
export const PLATFORM_NAME = 'Miraklasiaf'
export const PLATFORM_LOWERCASE = 'miraklasiaf'
export const PLATFORM_URL = 'https://miraklasiaf.com'

export const links = [
  [Twitter, 'https://twitter.com/miraklasiaf', 'Twitter'],
  [Github, 'https://github.com/miraklasiaf', 'Github'],
  [Mail, 'mailto:faisalkarim96@gmail.com', 'Email']
]

export const routes = [
  ['Home', '/'],
  ['Blog', '/blog'],
  ['Dashboard', '/dashboard'],
  ['About', '/about']
]

const siteMetadata = {
  copyright: `Copyright © ${new Date().getFullYear()} Faisal Karim. All Rights Reserved.`,
  author: {
    name: 'Faisal Karim',
    github: 'https://github.com/miraklasiaf',
    twitter: 'https://twitter.com/miraklasiaf',
    linkedin: 'https://linkedin.com/in/miraklasiaf',
    email: 'faisalkarim96@gmail.com'
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
      url: 'https://miraklasiaf.com',
      site_name: 'Faisal Karim'
    },
    twitter: {
      handle: '@miraklasiaf',
      site: '@miraklasiaf',
      cardType: 'summary_large_image'
    }
  }
}

export default siteMetadata
