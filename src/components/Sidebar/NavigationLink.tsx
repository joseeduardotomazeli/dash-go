import { ElementType } from 'react';
import Link from 'next/link';
import {
  Text,
  Link as ChakraLink,
  Icon,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

interface NavigationLinkProps extends ChakraLinkProps {
  icon: ElementType;
  href: string;
  children: string;
}

function NavigationLink(props: NavigationLinkProps) {
  const { icon, href, children, ...restProps } = props;

  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" align="center" {...restProps}>
        <Icon as={icon} fontSize={20} />
        <Text ml={4} fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
}

export default NavigationLink;
