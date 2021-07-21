import { Flex, Stack, Button } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Input from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
};

function SignIn() {
  const { register, handleSubmit, formState } = useForm();

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            label="E-mail"
            name="email"
            type="email"
            {...register('email')}
          />

          <Input
            label="Senha"
            name="password"
            type="password"
            {...register('password')}
          />
        </Stack>

        <Button
          type="submit"
          size="lg"
          colorScheme="pink"
          marginTop={6}
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}

export default SignIn;
