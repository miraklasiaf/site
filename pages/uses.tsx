import { MDXRemote } from 'next-mdx-remote'
import { getFileBySlug } from '~/lib/mdx'
import { UsesLayout } from '~/app-layout'

export default function UsesPage({ mdxSource }) {
  return (
    <UsesLayout>
      <MDXRemote {...mdxSource} />
    </UsesLayout>
  )
}

export async function getStaticProps() {
  const post = await getFileBySlug('uses')

  return { props: post }
}
