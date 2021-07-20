import fs from 'fs'
import matter from 'gray-matter'
import mdxPrism from 'mdx-prism'
import path from 'path'
import readingTime from 'reading-time'
import { serialize } from 'next-mdx-remote/serialize'

const dataDirectory = path.join(process.cwd(), 'data')

export async function getFiles(type) {
  return fs.readdirSync(path.join(dataDirectory, type))
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(dataDirectory, type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(dataDirectory, `${type}.mdx`), 'utf8')

  const { data, content } = matter(source)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-slug'),
        [
          require('remark-autolink-headings'),
          {
            linkProperties: {
              className: ['anchor']
            }
          }
        ],
        require('remark-code-titles')
      ],
      rehypePlugins: [mdxPrism]
    }
  })

  data.author = 'Faisal Karim'

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data
    }
  }
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(dataDirectory, type))

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(dataDirectory, type, postSlug), 'utf8')
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
