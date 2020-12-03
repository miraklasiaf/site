import useSWR from 'swr'
import format from 'comma-number'
import { fetcher } from '@/lib/fetcher'
import { MetricCard } from '@/components/ui'
import { siteMetadata } from '@/config'

export default function Analytics() {
  const { data } = useSWR('/api/page-views', fetcher)
  const pageViews = format(data?.total)
  const link = siteMetadata.seo.openGraph.url

  return <MetricCard header="All-Time Views" link={link} metric={pageViews} />
}
