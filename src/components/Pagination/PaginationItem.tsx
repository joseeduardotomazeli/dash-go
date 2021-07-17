import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  isCurrent?: boolean;
  children: string;
}

function PaginationItem(props: PaginationItemProps) {
  const { isCurrent, children } = props;

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
        {children}
      </Button>
    );

  return (
    <Button
      size="sm"
      width={4}
      backgroundColor="gray.700"
      fontSize="xs"
      _hover={{ bgColor: 'gray.500' }}
    >
      {children}
    </Button>
  );
}

export default PaginationItem;
