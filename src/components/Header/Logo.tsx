import { Text } from '@chakra-ui/react';

function Logo() {
  return (
    <Text
      as="h1"
      width={64}
      fontSize={['2xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
    >
      dashgo
      <Text as="span" marginLeft={1} color="pink.500">
        .
      </Text>
    </Text>
  );
}

export default Logo;
