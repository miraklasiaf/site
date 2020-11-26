import useSWR from 'swr'
import format from 'comma-number'
import fetcher from '@/lib/fetcher'
import { MetricCard } from '@/components/ui'

export default function GitHub() {
  const { data } = useSWR('/api/github', fetcher)

  const stars = format(data?.stars)
  const link = 'https://github.com/miraklasiaf'

  return <MetricCard header="GitHub Stars" link={link} metric={stars} />
}
