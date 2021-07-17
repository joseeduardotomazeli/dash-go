import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useBreakpointValue,
} from '@chakra-ui/react';

import Navigation from './Navigation';

import useSidebarDrawer from '../../hooks/useSidebarDrawer';

function Sidebar() {
  const isLargeDevice = useBreakpointValue({
    base: true,
    lg: false,
  });

  const { isOpen, onClose } = useSidebarDrawer();

  if (isLargeDevice)
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent padding={4} backgroundColor="gray.800">
            <DrawerCloseButton mt={6}></DrawerCloseButton>
            <DrawerHeader />

            <DrawerBody>
              <Navigation />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );

  return (
    <Box as="aside" marginRight={8} width={64}>
      <Navigation />
    </Box>
  );
}

export default Sidebar;
