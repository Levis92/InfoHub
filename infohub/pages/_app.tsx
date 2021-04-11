import { AppProps } from 'next/app';
import 'font-awesome/css/font-awesome.css';
import '../styles/globals.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/sv.js';

dayjs.extend(updateLocale);
dayjs.extend(relativeTime);
dayjs.locale('sv');

dayjs.updateLocale('sv', {
  relativeTime: {
    future: '%s',
    past: '%s sedan',
    s: 'Nu',
    ss: '%d s',
    m: '1 min',
    mm: '%d min',
    h: '1 tim',
    hh: '%d tim',
  },
});

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
