import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

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

        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
