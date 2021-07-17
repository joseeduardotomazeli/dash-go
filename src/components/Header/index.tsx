import { Flex } from '@chakra-ui/react';

import Logo from './Logo';
import Search from './Search';
import Notifications from './Notifications';
import Profile from './Profile';

function Header() {
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

      <Search />

      <Flex align="center" marginLeft="auto">
        <Notifications />
        <Profile />
      </Flex>
    </Flex>
  );
}

export default Header;
