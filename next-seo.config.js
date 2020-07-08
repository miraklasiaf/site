import { PLATFORM_URL } from './lib/constants';

const title = 'Faisal Karim · Developer';
const description = 'Front-end developer and JavaScript enthusiast';

const SEO = {
  title,
  description,
  canonical: `${PLATFORM_URL}`,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: PLATFORM_URL,
    title,
    description,
    images: [
      {
        url: `${PLATFORM_URL}/static/images/og.png`,
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@miraklasiaf',
    site: '@miraklasiaf',
    cardType: 'summary_large_image'
  }
};

export default SEO;
