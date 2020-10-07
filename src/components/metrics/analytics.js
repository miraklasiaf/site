import useSWR from 'swr'
import format from 'comma-number'
import fetcher from '@/lib/fetcher'
import { PLATFORM_URL } from '@/utils/constants'
import MetricCard from './card'

export default function Analytics() {
  const { data } = useSWR('/api/page-views', fetcher)
  const pageViews = format(data?.total)
  const link = PLATFORM_URL

  return <MetricCard header="All-Time Views" link={link} metric={pageViews} />
}
