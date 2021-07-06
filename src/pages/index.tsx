import { Flex, Stack, Button } from '@chakra-ui/react';

import Input from '../components/Form/Input';

function SignIn() {
  return (
    <Flex width="100vw" height="100vh" align="center" justify="center">
      <Flex
        as="form"
        direction="column"
        padding={8}
        width="100%"
        maxWidth={360}
        borderRadius={8}
        backgroundColor="gray.800"
      >
        <Stack spacing={4}>
          <Input label="E-mail" name="email" type="email" />
          <Input label="Senha" name="password" type="password" />
        </Stack>

        <Button type="submit" size="lg" colorScheme="pink" marginTop={6}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}

export default SignIn;
