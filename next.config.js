const path = require('path')
const mdxPrism = require('mdx-prism')
const getReadingTime = require('reading-time')
const withPlugins = require('next-compose-plugins')
const withMdxEnhanced = require('next-mdx-enhanced')
const { getEditUrl, addLeadingSlash } = require('@docusaurus/utils')

const EDIT_URL = 'https://github.com/miraklasiaf/miraklasiaf.com/blob/develop/pages'

function fileToPath(str) {
  return addLeadingSlash(str.replace('.mdx', ''))
}

const defaultConfig = {
  experimental: {
    modern: true
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')
    }

    return config
  }
}

const mdxConfig = {
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [
    require('remark-autolink-headings'),
    require('remark-slug'),
    require('remark-code-titles'),
    require('./utils/title-style')
  ],
  rehypePlugins: [mdxPrism],
  extendFrontMatter: {
    process: async (mdxContent, frontmatter) => {
      const { __resourcePath: mdxPath } = frontmatter

      const slug = fileToPath(mdxPath)
      const wordCount = mdxContent.split(/\s+/gu).length
      const readingTime = getReadingTime(mdxContent)
      const editUrl = getEditUrl(path.join(mdxPath), EDIT_URL)
      const author = 'Faisal Karim'

      return {
        slug,
        wordCount,
        readingTime,
        editUrl,
        author
      }
    }
  }
}

module.exports = withPlugins([withMdxEnhanced(mdxConfig)], defaultConfig)
