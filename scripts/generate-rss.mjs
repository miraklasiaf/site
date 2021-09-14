import { readFileSync, readdirSync, writeFileSync } from 'fs'
import { join } from 'path'
import RSS from 'rss'
import matter from 'gray-matter'

async function generate() {
  const feed = new RSS({
    title: 'Faisal Karim',
    site_url: 'https://miraklasiaf.com',
    feed_url: 'https://miraklasiaf.com/feed.xml'
  })

  const posts = readdirSync(join(process.cwd(), '@content', 'blog'))
  posts.map((name) => {
    const content = readFileSync(join(process.cwd(), '@content', 'blog', name))
    const frontmatter = matter(content)

    feed.item({
      title: frontmatter.data.title,
      url: 'https://miraklasiaf.com/blog/' + name.replace(/\.mdx?/, ''),
      date: frontmatter.data.publishedAt,
      description: frontmatter.data.summary
    })
  })

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
