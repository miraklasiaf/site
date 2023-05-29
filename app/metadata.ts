import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://miraklasiaf.com'),
  title: {
    default: 'Faisal Karim',
    template: '%s / Faisal Karim'
  },
  description: 'Fullstack web developer.',
  openGraph: {
    title: 'Faisal Karim',
    description: 'Fullstack web developer.',
    url: 'https://miraklasiaf.com',
    siteName: 'Faisal Karim',
    images: [
      {
        url: 'https://miraklasiaf.com/og.jpg',
        width: 1920,
        height: 1080
      }
    ],
    locale: 'en-US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'Faisal Karim',
    card: 'summary_large_image'
  },
  icons: {
    shortcut: '/static/favicon/favicon.ico'
  },
  verification: {
    google: 'KfTyzAKabwlabC29C3S23xuqg6nq_fG94IRlnpFSNtI'
  }
};
