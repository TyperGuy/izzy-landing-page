import type { AppProps } from 'next/app';
import { PropsWithChildren } from 'react';
import '../assets/styles/globals.css';

interface CustomProps extends AppProps {
  pageProps: PropsWithChildren<unknown>;
}

function MyApp({ Component, pageProps }: CustomProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
