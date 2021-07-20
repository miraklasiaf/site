import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'
import { MetricCard } from '@/components/ui'
import { siteMetadata } from '@/config'

export default function Analytics() {
  const { data } = useSWR('/api/views', fetcher)
  const pageViews = new Number(data?.total)
  const link = siteMetadata.seo.openGraph.url

  return <MetricCard header="All-Time Views" link={link} metric={pageViews} />
}
