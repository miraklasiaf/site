'use client';

import MetricCard from './metric-card';
import { fetcher } from 'lib/fetcher';
import useSWR from 'swr';

export default function GithubStars() {
  const { data } = useSWR('/api/github', fetcher);

  const stars = new Number(data?.stars);
  const link = 'https://github.com/miraklasiaf';

  return <MetricCard header="GitHub Stars" link={link} metric={stars} />;
}
