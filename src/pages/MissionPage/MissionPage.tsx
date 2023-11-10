import { Container } from '@mantine/core';
import { Mission } from '../../components/Mission/Mission.tsx';
import { MissionAdmin } from '../../components/Mission/MissionAdmin/MissionAdmin.tsx';

export const MissionPage = () => {
  const role = 'ADMIN';

  if (role === 'ADMIN') {
    return (
      <Container size='xl'>
        <MissionAdmin />
      </Container>
    );
  }

  if (role === 'USER') {
    return (
      <Container size='xl'>
        <Mission />
      </Container>
    );
  }
};
