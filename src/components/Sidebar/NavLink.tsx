import { ElementType } from 'react';
import {
  Text,
  Link,
  Icon,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}

function NavLink(props: NavLinkProps) {
  const { icon, children, ...restProps } = props;

  return (
    <Link display="flex" align="center" {...restProps}>
      <Icon as={icon} fontSize={20} />
      <Text ml={4} fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}

export default NavLink;
