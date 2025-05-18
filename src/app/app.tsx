'use client';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { enGB } from 'date-fns/locale/en-GB';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

type AppProps = {
  children?: React.ReactNode;
};

export function App(props: AppProps) {
  const { children } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB}>
      {children}
    </LocalizationProvider>
  );
}
