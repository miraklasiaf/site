import useSWR from 'swr'
import { appConfig } from '~/app-config'
import { fetcher } from '~/lib/fetcher'
import MetricCard from './card'

export default function WebsiteViews() {
  const { data } = useSWR('/api/views', fetcher)
  const pageViews = new Number(data?.total)

  return <MetricCard header="All-Time Views" link={appConfig.siteUrl} metric={pageViews} />
}
