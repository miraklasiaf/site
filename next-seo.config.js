const title = 'Faisal Karim · Developer';
const description = 'Front-end developer and JavaScript enthusiast';

const SEO = {
  title,
  description,
  canonical: 'https://miraklasiaf.now.sh',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://miraklasiaf.now.sh',
    title,
    description,
    images: [
      {
        url: 'https://miraklasiaf.now.sh/static/images/og.jpg',
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
