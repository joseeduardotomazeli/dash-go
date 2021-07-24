import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
}

function PaginationItem(props: PaginationItemProps) {
  const { isCurrent, number, onPageChange } = props;

  if (isCurrent)
    return (
      <Button
        size="sm"
        colorScheme="pink"
        width={4}
        fontSize="xs"
        disabled
        _disabled={{ bgColor: 'pink.500', cursor: 'default' }}
      >
        {number}
      </Button>
    );

  return (
    <Button
      size="sm"
      width={4}
      backgroundColor="gray.700"
      fontSize="xs"
      _hover={{ bgColor: 'gray.500' }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
}

export default PaginationItem;
