import Image from 'next/image'
import { parseISO, format } from 'date-fns'
import { Page } from '@/components/page'
import { siteMetadata } from '@/config'
import ViewCounter from '../view-counter'

export interface Frontmatter {
  author: string
  title: string
  description: string
  slug: string
  banner: string
  publishedAt: string
  tags: string[]
  readingTime: {
    text: string
    minutes: Number
    time: Number
    words: Number
  }
  wordCount: Number
}

interface BlogLayoutProps {
  frontMatter: Frontmatter
  children: React.ReactNode
}

const editUrl = (slug: string) =>
  `https://github.com/miraklasiaf/miraklasiaf.com/edit/main/data/blog/${slug}.mdx`

const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.seo.openGraph.url}/blog/${slug}`
  )}`

export default function BlogLayout({ frontMatter, children }: BlogLayoutProps) {
  const { title, description, author, publishedAt, slug } = frontMatter
  const date = new Date(publishedAt).toISOString()

  return (
    <Page title={title} description={description} author={author} date={date} slug={slug}>
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
          <div className="flex items-center">
            <Image
              alt="Faisal Karim"
              height={24}
              width={24}
              src="/static/images/logo.png"
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {/* {frontMatter.by} */}
              {'Faisal Karim / '}
              {format(parseISO(frontMatter.publishedAt), 'dd MMMM yyyy')}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {frontMatter.readingTime.text}
            {` • `}
            <ViewCounter slug={frontMatter.slug} />
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">{children}</div>
        <div className="mt-8 text-sm text-gray-700 dark:text-gray-300">
          <a href={discussUrl(frontMatter.slug)} target="_blank" rel="noopener noreferrer">
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a href={editUrl(frontMatter.slug)} target="_blank" rel="noopener noreferrer">
            {'Edit on GitHub'}
          </a>
        </div>
      </article>
    </Page>
  )
}
