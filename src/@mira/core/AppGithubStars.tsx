import useSWR from 'swr'
import AppMetricCard from './AppMetricCard'
import { fetcher } from '@mira/lib/fetcher'

export default function AppGithubStars() {
  const { data } = useSWR('/api/github', fetcher)

  const stars = new Number(data?.stars)
  const link = 'https://github.com/miraklasiaf'

  return <AppMetricCard header="GitHub Stars" link={link} metric={stars} />
}