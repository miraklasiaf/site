# miraklasiaf.com

This project is based on Lee Robinson's https://github.com/leerob/leerob.io

## Overview

- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering [`/dashboard`](https://miraklasiaf.com/dashboard), og image, and post views.
- `pages/blog/*` - Static pre-rendered blog pages using [MDX](https://github.com/mdx-js/mdx).
- `pages/dashboard` - [Personal dashboard](https://miraklasiaf.com/dashboard) containing metrics like sales, views, and subscribers.
- `pages/*` - All other static pages.

## Running Locally

```bash
$ git clone https://github.com/miraklasiaf/miraklasiaf.com.git
$ cd miraklasiaf.com
$ yarn && yarn dev
```

## Built Using

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com)
- [MDX](https://github.com/mdx-js/mdx)
- [TailwindCSS](https://tailwindcss.com/)
- [PlanetScale](https://planetscale.com/)
