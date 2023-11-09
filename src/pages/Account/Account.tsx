import { Box, Container, Group } from '@mantine/core';
import { ProfileCard } from '../../components/ProfileCard/ProfileCard';
import { employee } from '../../helpers/Employee';
import { CardAchievement } from '../../modules/CardAchievement/CardAchievement';
import { Tracker } from '../../modules/Tracker/Tracker';
import { Diagram } from '../../modules/Diagram/Diagram';
import { Events } from '../../modules/Events/Events';

export const Account = () => {
  return (
    <>
      <Container size='xl'>
        <ProfileCard
          name={employee.name}
          job={employee.job}
          grade={employee.grade}
          completedChallenges={employee.completedChallenges}
          coins={employee.coins}
        />
        <Box mt={25}>
          <CardAchievement />
        </Box>
        <Group mt={25} justify='space-between'>
          <Tracker />
          <Diagram />
        </Group>
        <Events />
      </Container>
    </>
  );
};
