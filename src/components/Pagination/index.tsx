import { Stack, Box, Text } from '@chakra-ui/react';

import PaginationItem from './PaginationItem';

interface PaginationProps {
  currentPage?: number;
  registerPerPage?: number;
  totalRegisters: number;
  onPageChange: (page: number) => void;
}

function Pagination(props: PaginationProps) {
  const {
    currentPage = 1,
    registerPerPage = 10,
    totalRegisters,
    onPageChange,
  } = props;

  const siblingsCount = 1;
  const lastPage = Math.floor(totalRegisters / registerPerPage);

  function generatePaginationPages(from: number, to: number) {
    const pages = [...new Array(to - from)]
      .map((_, index) => {
        return from + index + 1;
      })
      .filter((page) => page > 0);

    return pages;
  }

  const previousPages =
    currentPage > 1
      ? generatePaginationPages(
          currentPage - 1 - siblingsCount,
          currentPage - 1
        )
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePaginationPages(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

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
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem number={1} onPageChange={onPageChange} />

            {currentPage > 2 + siblingsCount && (
              <Text width={8} color="gray.300" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length &&
          previousPages.map((previousPage) => {
            return (
              <PaginationItem
                key={previousPage}
                number={previousPage}
                onPageChange={onPageChange}
              />
            );
          })}

        <PaginationItem
          isCurrent
          number={currentPage}
          onPageChange={onPageChange}
        />

        {nextPages.length &&
          nextPages.map((nextPage) => {
            return (
              <PaginationItem
                key={nextPage}
                number={nextPage}
                onPageChange={onPageChange}
              />
            );
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text width={8} color="gray.300" textAlign="center">
                ...
              </Text>
            )}

            <PaginationItem number={lastPage} onPageChange={onPageChange} />
          </>
        )}
      </Stack>
    </Stack>
  );
}

export default Pagination;
