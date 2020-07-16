import useSWR from 'swr';
import format from 'comma-number';

import fetcher from '@lib/fetcher';
import { PLATFORM_URL } from '@lib/constants';

import MetricCard from './card';

const Analytics = () => {
  const { data } = useSWR('/api/page-views', fetcher);

  const pageViews = format(data?.total);
  const link = PLATFORM_URL;

  return <MetricCard header="All-Time Views" link={link} metric={pageViews} />;
};

export default Analytics;
