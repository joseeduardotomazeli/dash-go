import Link from 'next/link';
import {
  Box,
  Flex,
  Heading,
  Button,
  IconButton,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Checkbox,
  Spinner,
  useBreakpointValue,
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Pagination from '../../components/Pagination';

import useUsers from '../../services/hooks/useUsers';

function UserList() {
  const { data, isLoading, isFetching, error } = useUsers();

  const isLargeDevice = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex
        marginX="auto"
        marginY={6}
        paddingX={6}
        width="100%"
        maxWidth={1480}
      >
        <Sidebar />

        <Box flex={1} padding={8} borderRadius={8} backgroundColor="gray.800">
          <Flex marginBottom={8} justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && (
                <Spinner size="sm" marginLeft={4} color="gray.500" />
              )}
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize={20} />}
                fontSize="small"
              >
                Novo usuário
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários.</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th paddingX={[4, 4, 6]} width={8} color="gray.300">
                      <Checkbox colorScheme="pink" />
                    </Th>

                    <Th>Usuário</Th>
                    {isLargeDevice && <Th>Data cadastro</Th>}
                    <Th width={8} />
                  </Tr>
                </Thead>

                <Tbody>
                  {data.map((user) => {
                    return (
                      <Tr key={user.id}>
                        <Td paddingX={[4, 4, 6]}>
                          <Checkbox colorScheme="pink" />
                        </Td>

                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>

                            {isLargeDevice && (
                              <Text color="gray.300" fontSize="small">
                                {user.email}
                              </Text>
                            )}
                          </Box>
                        </Td>

                        {isLargeDevice && <Td>{user.createdAt}</Td>}

                        <Td>
                          {isLargeDevice ? (
                            <Button
                              as="a"
                              size="sm"
                              colorScheme="purple"
                              leftIcon={
                                <Icon as={RiPencilLine} fontSize={16} />
                              }
                              fontSize="small"
                            >
                              Editar
                            </Button>
                          ) : (
                            <IconButton
                              as="a"
                              aria-label="Editar usuário"
                              size="sm"
                              colorScheme="purple"
                              icon={<Icon as={RiPencilLine} />}
                              fontSize={16}
                            />
                          )}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>

              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

export default UserList;
