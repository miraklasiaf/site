import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://miraklasiaf.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Faisal Karim',
    template: '%s / Faisal Karim',
  },
  description: 'Software Engineer.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Faisal Karim',
    card: 'summary_large_image',
  },
  verification: {
    google: 'KfTyzAKabwlabC29C3S23xuqg6nq_fG94IRlnpFSNtI',
  },
};
