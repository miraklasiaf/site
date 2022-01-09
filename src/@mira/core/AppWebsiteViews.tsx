import useSWR from 'swr';
import config from '@mira/config';
import { fetcher } from '@mira/lib/fetcher';
import AppMetricCard from './AppMetricCard';

export default function AppWebsiteViews() {
  const { data } = useSWR('/api/views', fetcher);
  const pageViews = new Number(data?.total);

  return (
    <AppMetricCard
      header="All-Time Views"
      link={config.siteUrl}
      metric={pageViews}
    />
  );
}
