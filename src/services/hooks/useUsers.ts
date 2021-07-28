import { useQuery } from 'react-query';

import api from '../api';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type GetUsersResponse = {
  users: User[];
  totalCount: number;
};

async function getUsers(page: number): Promise<GetUsersResponse> {
  const { headers, data } = await api.get('/users', {
    params: {
      page,
    },
  });

  const totalCount = Number(headers['x-total-count']);

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
  });

  return { users, totalCount };
}

function useUsers(page: number) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 5 * 1000,
  });
}

export default useUsers;
