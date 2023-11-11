import { Box, Container, Group } from '@mantine/core';
import { useEffect, useState } from 'react';
import { ProfileCard } from '../../components/ProfileCard/ProfileCard';
import { CardAchievement } from '../../modules/CardAchievement/CardAchievement';
import { Tracker } from '../../modules/Tracker/Tracker';
import { Diagram } from '../../modules/Diagram/Diagram';
import { Events } from '../../modules/Events/Events';
import { employeeIntern } from '../../API/team/interfaces.ts';
import { getPersonalData } from '../../API/personal-account';

export const Account = () => {
  const [intern, setIntern] = useState<employeeIntern>({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Promise.all([getPersonalData()])
      .then(([res]) => {
        setIntern(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <>
      {isLoading ? (
        'wait'
      ) : (
        <Container size='xl'>
          <ProfileCard intern={intern} />
          <Box mt={25}>
            <CardAchievement />
          </Box>
          <Group mt={25} justify='space-between'>
            <Tracker />
            <Diagram />
          </Group>
          <Events />
        </Container>
      )}
    </>
  );
};
