import { NextSeo } from 'next-seo'
import siteConfig from '@/configs/site-config'

const SEO = ({ title, description, ...props }) => (
  <NextSeo
    title={title}
    description={description}
    titleTemplate={siteConfig.seo.titleTemplate}
    {...props}
  />
)

export default SEO
