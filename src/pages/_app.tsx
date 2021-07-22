import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider, QueryClient } from 'react-query';

import SidebarDrawerProvider from '../contexts/SidebarDrawerProvider';

import mirageServer from '../services/mirage';

import theme from '../styles/theme';

if (process.env.NODE_ENV === 'development') mirageServer();

function MyApp({ Component, pageProps }: AppProps) {
  const client = new QueryClient();

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={client}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
