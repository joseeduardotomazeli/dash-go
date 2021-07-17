import { ReactNode } from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

function NavSection(props: NavSectionProps) {
  const { title, children } = props;

  return (
    <Box>
      <Text color="gray.400" fontSize="small" fontWeight="bold">
        {title}
      </Text>

      <Stack spacing={4} align="stretch" marginTop={8}>
        {children}
      </Stack>
    </Box>
  );
}

export default NavSection;
