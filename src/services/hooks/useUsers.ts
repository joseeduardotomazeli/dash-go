import { useQuery } from 'react-query';

import api from '../api';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

async function getUsers(): Promise<User[]> {
  const response = await api.get('/users');

  const users = response.data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
  });

  return users;
}

function useUsers() {
  return useQuery('users', getUsers, { staleTime: 5 * 1000 });
}

export default useUsers;
