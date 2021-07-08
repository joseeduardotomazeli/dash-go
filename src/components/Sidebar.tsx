import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react';
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from 'react-icons/ri';

function Sidebar() {
  return (
    <Box as="aside" marginRight={8} width={64}>
      <Stack spacing={12} align="flex-start">
        <Box>
          <Text color="gray.400" fontSize="small" fontWeight="bold">
            GERAL
          </Text>

          <Stack spacing={4} align="stretch" marginTop={8}>
            <Link display="flex" align="center">
              <Icon as={RiDashboardLine} fontSize={20} />
              <Text ml={4} fontWeight="medium">
                Dashboard
              </Text>
            </Link>

            <Link display="flex" align="center">
              <Icon as={RiContactsLine} fontSize={20} />
              <Text ml={4} fontWeight="medium">
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text color="gray.400" fontSize="small" fontWeight="bold">
            AUTOMAÇÃO
          </Text>

          <Stack spacing={4} align="stretch" marginTop={8}>
            <Link display="flex" align="center">
              <Icon as={RiInputMethodLine} fontSize={20} />
              <Text ml={4} fontWeight="medium">
                Formulários
              </Text>
            </Link>

            <Link display="flex" align="center">
              <Icon as={RiGitMergeLine} fontSize={20} />
              <Text ml={4} fontWeight="medium">
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default Sidebar;
