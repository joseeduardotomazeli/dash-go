import { Flex, Input, Icon } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

function Search() {
  return (
    <Flex
      as="label"
      position="relative"
      flex={1}
      align="center"
      marginLeft={6}
      paddingX={8}
      paddingY={4}
      maxWidth={400}
      borderRadius="full"
      backgroundColor="gray.800"
      color="gray.200"
    >
      <Input
        placeholder="Buscar na plataforma"
        variant="unstyled"
        marginRight={4}
        paddingX={4}
        color="gray.50"
        _placeholder={{ color: 'gray:400' }}
      />

      <Icon as={RiSearchLine} fontSize={20} />
    </Flex>
  );
}

export default Search;
