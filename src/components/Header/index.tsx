import { Flex, IconButton, Icon, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';

import Logo from './Logo';
import Search from './Search';
import Notifications from './Notifications';
import Profile from './Profile';

import useSidebarDrawer from '../../hooks/useSidebarDrawer';

function Header() {
  const isLargeDevice = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { onOpen } = useSidebarDrawer();

  return (
    <Flex
      as="header"
      align="center"
      marginX="auto"
      marginTop={4}
      paddingX={6}
      width="100%"
      maxWidth={1480}
      height={20}
    >
      {!isLargeDevice && (
        <IconButton
          aria-label="Abrir navegação"
          icon={<Icon as={RiMenuLine} />}
          variant="unstyled"
          marginRight={2}
          fontSize={24}
          onClick={onOpen}
        />
      )}

      <Logo />

      {isLargeDevice && <Search />}

      <Flex align="center" marginLeft="auto">
        <Notifications />
        <Profile showUserInformation={isLargeDevice} />
      </Flex>
    </Flex>
  );
}

export default Header;
