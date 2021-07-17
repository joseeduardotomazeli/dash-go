import { Stack, Box } from '@chakra-ui/react';

import PaginationItem from './PaginationItem';

function Pagination() {
  return (
    <Stack
      direction={['column', 'row']}
      spacing={6}
      justify="space-between"
      align="center"
      marginTop={8}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction="row" spacing={2}>
        <PaginationItem isCurrent>1</PaginationItem>
        <PaginationItem>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem>4</PaginationItem>
        <PaginationItem>5</PaginationItem>
      </Stack>
    </Stack>
  );
}

export default Pagination;
