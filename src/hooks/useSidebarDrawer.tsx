import { useContext } from 'react';

import { SidebarDrawerContext } from '../contexts/SidebarDrawerProvider';

function useSidebarDrawer() {
  const context = useContext(SidebarDrawerContext);
  return context;
}

export default useSidebarDrawer;
