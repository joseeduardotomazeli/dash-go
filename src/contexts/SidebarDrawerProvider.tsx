import { createContext, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

export const SidebarDrawerContext = createContext({} as UseDisclosureReturn);

function SidebarDrawerProvider(props: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  const { children } = props;

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export default SidebarDrawerProvider;
