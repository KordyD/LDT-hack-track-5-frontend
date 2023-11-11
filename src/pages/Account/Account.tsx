import { Box, Container, Group } from '@mantine/core';
import { useEffect, useState } from 'react';
import { getPersonalData } from '../../API/personal-account';
import { ProfileCard } from '../../components/ProfileCard/ProfileCard';
import { CardAchievement } from '../../modules/CardAchievement/CardAchievement';
import { Diagram } from '../../modules/Diagram/Diagram';
import { Events } from '../../modules/Events/Events';
import { Tracker } from '../../modules/Tracker/Tracker';

export const Account = () => {
  useEffect(() => {
    setLoading(true);
    getPersonalData().then((value) => {
      setPerson(value);
      setLoading(false);
    });
  }, []);
  const [person, setPerson] = useState();
  const [loading, setLoading] = useState(true);
  if (loading) {
    return loading;
  }
  return (
    <>
      <Container size='xl'>
        <ProfileCard intern={person} />
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
