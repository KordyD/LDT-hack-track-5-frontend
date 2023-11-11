import { Container } from '@mantine/core';
import { Mission } from '../../components/Mission/Mission.tsx';
import { TaskContainer } from '../TaskContainer/TaskContainer.tsx';

export const MissionPage = () => {
  const role = 'ADMIN';

  if (role === 'ADMIN') {
    return (
      <Container size='xl'>
        <TaskContainer />
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
