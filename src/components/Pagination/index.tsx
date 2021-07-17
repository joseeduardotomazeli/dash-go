import { HStack, Box } from '@chakra-ui/react';

import PaginationItem from './PaginationItem';

function Pagination() {
  return (
    <HStack spacing={6} justify="space-between" align="center" marginTop={8}>
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack spacing={2}>
        <PaginationItem isCurrent>1</PaginationItem>
        <PaginationItem>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem>4</PaginationItem>
        <PaginationItem>5</PaginationItem>
      </HStack>
    </HStack>
  );
}

export default Pagination;
