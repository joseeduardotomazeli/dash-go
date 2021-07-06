import {
  Flex,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

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
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              size="lg"
              variant="filled"
              backgroundColor="gray.900"
              focusBorderColor="pink.500"
              _hover={{ backgroundColor: 'gray.900' }}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              size="lg"
              variant="filled"
              backgroundColor="gray.900"
              focusBorderColor="pink.500"
              _hover={{ backgroundColor: 'gray.900' }}
            />
          </FormControl>
        </Stack>

        <Button type="submit" size="lg" colorScheme="pink" marginTop="6">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}

export default SignIn;
