'use client';

import MetricCard from './metric-card';
import { fetcher } from 'lib/fetcher';
import useSWR from 'swr';

export default function WebsiteViews() {
  const { data } = useSWR('/api/views', fetcher);
  const pageViews = new Number(data?.total);

  return (
    <MetricCard
      header="All-Time Views"
      link="https://miraklasiaf.com"
      metric={pageViews}
    />
  );
}
