import { Stack } from '@chakra-ui/react';
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from 'react-icons/ri';

import NavigationSection from './NavigationSection';
import NavigationLink from './NavigationLink';

function Navigation() {
  return (
    <Stack spacing={12} align="flex-start">
      <NavigationSection title="GERAL">
        <NavigationLink icon={RiDashboardLine}>Dashboard</NavigationLink>
        <NavigationLink icon={RiContactsLine}>Usuários</NavigationLink>
      </NavigationSection>

      <NavigationSection title="AUTOMAÇÃO">
        <NavigationLink icon={RiInputMethodLine}>Formulários</NavigationLink>
        <NavigationLink icon={RiGitMergeLine}>Automação</NavigationLink>
      </NavigationSection>
    </Stack>
  );
}

export default Navigation;
