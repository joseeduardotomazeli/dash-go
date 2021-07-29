import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import SidebarDrawerProvider from '../contexts/SidebarDrawerProvider';

import mirageServer from '../services/mirage';
import client from '../services/queryClient';

import theme from '../styles/theme';

mirageServer();

function App(props: AppProps) {
  const { Component, pageProps } = props;

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

export default App;
