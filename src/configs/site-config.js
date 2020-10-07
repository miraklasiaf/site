import { PLATFORM_URL } from '@/utils/constants'

const baseUrl = 'https://github.com/miraklasiaf/miraklasiaf.com'

const siteConfig = {
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
    title: 'Faisal Karim',
    titleTemplate: '%s · Faisal Karim',
    description: 'Software Developer, JavaScript enthusiast',
    siteUrl: `${PLATFORM_URL}`,
    twitter: {
      handle: '@miraklasiaf',
      site: '@miraklasiaf',
      cardType: 'summary_large_image'
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `${PLATFORM_URL}`,
      title: 'Faisal Karim',
      description: 'Front-end Developer and JavaScript enthusiast',
      site_name: 'Faisal Karim',
      images: [
        {
          url: `${PLATFORM_URL}/static/images/og.png`,
          alt: 'Faisal Karim',
          width: 1280,
          height: 720
        }
      ]
    }
  }
}

export default siteConfig
