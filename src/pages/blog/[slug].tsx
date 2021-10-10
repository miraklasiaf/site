import { useMemo } from 'react'
import Image from 'next/image'
import { parseISO, format } from 'date-fns'
import { getMDXComponent } from 'mdx-bundler/client'
import { AppPage, AppViewCounter, AppMdx } from '@mira/core'
import { getFiles, getFileBySlug } from '@mira/lib/mdx'
import config from '@mira/config'

const editUrl = (slug: string) => `${config.githubRepositoryUrl}/edit/main/data/blog/${slug}.mdx`
const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${config.siteUrl}/blog/${slug}`)}`

export default function BlogPage({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <AppPage {...frontMatter}>
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
              src="/static/images/logo.jpg"
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
            <AppViewCounter slug={frontMatter.slug} />
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">
          <Component
            components={{
              ...AppMdx
            }}
          />
        </div>
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
    </AppPage>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles('blog')

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug)

  return { props: post }
}
