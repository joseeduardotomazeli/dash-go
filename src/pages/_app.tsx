import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import SidebarDrawerProvider from '../contexts/SidebarDrawerProvider';

import mirageServer from '../services/mirage';

import theme from '../styles/theme';

if (process.env.NODE_ENV === 'development') mirageServer();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
