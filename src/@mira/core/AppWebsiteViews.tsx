import AppMetricCard from './AppMetricCard';
import config from '@mira/config';
import { fetcher } from '@mira/lib/fetcher';
import useSWR from 'swr';

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
