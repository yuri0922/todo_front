import '@/styles/globals.css';
import axios from 'axios';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

const fetcher = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};

export default function App({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = 'http://localhost:5003';
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}
