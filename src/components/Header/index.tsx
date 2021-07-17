import { Flex, useBreakpointValue } from '@chakra-ui/react';

import Logo from './Logo';
import Search from './Search';
import Notifications from './Notifications';
import Profile from './Profile';

function Header() {
  const isLargeDevice = useBreakpointValue({
    base: false,
    lg: true,
  });

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
