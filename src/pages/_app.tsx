import type { AppProps } from 'next/app';
import { PropsWithChildren } from 'react';
import GlobalStyles from '../assets/styles/Global.styles';

interface CustomProps extends AppProps {
  pageProps: PropsWithChildren<unknown>;
}

function MyApp({ Component, pageProps }: CustomProps) {
  return <><Component {...pageProps} /><GlobalStyles/></>;
}

export default MyApp;
