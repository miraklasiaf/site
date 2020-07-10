# miraklasiaf.now.sh

This is based on Lee Robinson's https://github.com/leerob/leerob.io

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/miraklasiaf/miraklasiaf.now.sh)

## Overview

- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering [`/dashboard`](https://miraklasiaf.now.sh/dashboard), newsletter subscription, and post views.
- `pages/blog/*` - Static pre-rendered blog pages using [MDX](https://github.com/mdx-js/mdx).
- `pages/dashboard` - [Personal dashboard](https://miraklasiaf.now.sh/dashboard) containing metrics like sales, views, and subscribers.
- `pages/*` - All other static pages.

## Running Locally

```bash
$ git clone https://github.com/miraklasiaf/miraklasiaf.now.sh.git
$ cd miraklasiaf.now.sh
$ yarn
$ yarn dev
```

Create a `.env.local` file similar to `.env`.

```
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
UNSPLASH_ACCESS_KEY=
GOOGLE_ENCRYPTION_KEY=
GOOGLE_ENCRYPTION_IV=
BUTTONDOWN_API_KEY=
NEXT_PUBLIC_FATHOM_SITE_ID=
```

## Built Using

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com)
- [MDX](https://github.com/mdx-js/mdx)
- [Chakra UI](https://chakra-ui.com/)
