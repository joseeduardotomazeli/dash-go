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
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Form/Input';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

function CreateUser() {
  const schema = yup.object().shape({
    name: yup.string().required('Nome obrigatório.'),
    email: yup
      .string()
      .email('E-mail inválido.')
      .required('E-mail obrigatório.'),
    password: yup
      .string()
      .required('Senha obrigatória.')
      .min(6, 'Senha de no mínimo 6 caracteres.'),
    password_confirmation: yup
      .string()
      .oneOf([null, yup.ref('password')], 'Senhas precisam ser iguais.'),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

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
          as="form"
          flex={1}
          padding={[6, 8]}
          borderRadius={8}
          backgroundColor="gray.800"
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider marginY={6} borderColor="gray.700" />

          <VStack spacing={8}>
            <SimpleGrid minChildWidth={240} spacing={[6, 8]} width="100%">
              <Input
                label="Nome completo"
                name="name"
                type="text"
                errors={errors}
                {...register('name')}
              />

              <Input
                label="E-mail"
                name="e-mail"
                type="email"
                errors={errors}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth={240} spacing={[6, 8]} width="100%">
              <Input
                label="Senha"
                name="password"
                type="password"
                errors={errors}
                {...register('password')}
              />

              <Input
                label="Confirmar senha"
                name="password_confirmation"
                type="password"
                errors={errors}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>

          <Flex justify="flex-end" marginTop={8}>
            <HStack spacing={4}>
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>

              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default CreateUser;
