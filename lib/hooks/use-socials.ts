import { siteMetadata } from '@/config'
import { Github, Twitter, Email } from '@/components/icons'

export function useSocials() {
  const socials: [string, React.ElementType, string][] = [
    [siteMetadata.author.twitter, Twitter, 'Twitter'],
    [siteMetadata.author.github, Github, 'Github'],
    [siteMetadata.author.mailto, Email, 'Email']
  ]

  return { socials }
}

export default useSocials
