import { HStack, Box, Text, Button } from '@chakra-ui/react';

function Pagination() {
  return (
    <HStack spacing={6} justify="space-between" align="center" marginTop={8}>
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack spacing={2}>
        <Button
          size="sm"
          colorScheme="pink"
          width={4}
          fontSize="xs"
          disabled
          _disabled={{ bgColor: 'pink.500', cursor: 'default' }}
        >
          1
        </Button>

        <Button
          size="sm"
          width={4}
          backgroundColor="gray.700"
          fontSize="xs"
          _hover={{ bgColor: 'gray.500' }}
        >
          2
        </Button>

        <Button
          size="sm"
          width={4}
          backgroundColor="gray.700"
          fontSize="xs"
          _hover={{ bgColor: 'gray.500' }}
        >
          3
        </Button>

        <Button
          size="sm"
          width={4}
          backgroundColor="gray.700"
          fontSize="xs"
          _hover={{ bgColor: 'gray.500' }}
        >
          4
        </Button>
      </HStack>
    </HStack>
  );
}

export default Pagination;
