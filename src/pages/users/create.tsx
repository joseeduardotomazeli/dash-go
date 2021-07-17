import Link from 'next/link';
import {
  Box,
  Flex,
  HStack,
  VStack,
  Heading,
  Divider,
  SimpleGrid,
  Button,
} from '@chakra-ui/react';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Form/Input';

function CreateUser() {
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

        <Box
          flex={1}
          padding={[6, 8]}
          borderRadius={8}
          backgroundColor="gray.800"
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider marginY={6} borderColor="gray.700" />

          <VStack spacing={8}>
            <SimpleGrid minChildWidth={240} spacing={[6, 8]} width="100%">
              <Input label="Nome completo" name="name" type="text" />
              <Input label="E-mail" name="e-mail" type="email" />
            </SimpleGrid>

            <SimpleGrid minChildWidth={240} spacing={[6, 8]} width="100%">
              <Input label="Senha" name="password" type="password" />
              <Input
                label="Confirmar senha"
                name="password-confirmation"
                type="password"
              />
            </SimpleGrid>
          </VStack>

          <Flex justify="flex-end" marginTop={8}>
            <HStack spacing={4}>
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>

              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default CreateUser;
