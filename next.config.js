const mdxPrism = require('mdx-prism')
const readingTime = require('reading-time')
const withMdxEnhanced = require('next-mdx-enhanced')
const withPlugins = require('next-compose-plugins')

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
  remarkPlugins: [
    require('remark-autolink-headings'),
    require('remark-slug'),
    require('remark-code-titles'),
    require('./src/utils/title-style')
  ],
  rehypePlugins: [mdxPrism],
  extendFrontMatter: {
    process: (mdxContent) => ({
      wordCount: mdxContent.split(/\s+/gu).length,
      readingTime: readingTime(mdxContent)
    })
  }
}

module.exports = withPlugins([withMdxEnhanced(mdxConfig)], defaultConfig)
