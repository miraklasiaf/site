import { join } from 'path'
import { readFileSync, readdirSync } from 'fs'
import { bundleMDX } from 'mdx-bundler'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'

const contentDirectory = join(process.cwd(), '@content')

export async function getFiles(type: string) {
  return readdirSync(join(contentDirectory, type))
}

export async function getFileBySlug(type: string, slug?: string) {
  const content = slug
    ? readFileSync(join(contentDirectory, type, `${slug}.mdx`), 'utf8')
    : readFileSync(join(contentDirectory, `${type}.mdx`), 'utf8')

  const remarkPlugins = [remarkGfm]
  const rehypePlugins = [
    rehypeSlug,
    rehypeCodeTitles,
    rehypePrism,
    [
      rehypeAutolinkHeadings,
      {
        properties: {
          className: ['anchor']
        }
      }
    ]
  ]

  const { code, frontmatter } = await bundleMDX(content, {
    xdmOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), ...remarkPlugins]
      // @ts-ignore
      options.rehypePlugins = [...(options?.rehypePlugins ?? []), ...rehypePlugins]

      return options
    }
  })

  return {
    code,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...frontmatter
    }
  }
}

export async function getAllFilesFrontMatter(type: string) {
  const files = readdirSync(join(contentDirectory, type))

  return files.reduce((allPosts, postSlug) => {
    const source = readFileSync(join(contentDirectory, type, postSlug), 'utf8')
    const { data } = matter(source)

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', '')
      },
      ...allPosts
    ]
  }, [])
}
