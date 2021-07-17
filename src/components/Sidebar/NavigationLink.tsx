import { ElementType } from 'react';
import {
  Text,
  Link,
  Icon,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

interface NavigationLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}

function NavigationLink(props: NavigationLinkProps) {
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

export default NavigationLink;
