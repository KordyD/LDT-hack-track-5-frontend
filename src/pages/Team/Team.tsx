import { Box, Container } from '@mantine/core';
import { CardsTeam } from '../../modules/CardsTeam/CardsTeam';
import { InputTeam } from '../../modules/InputTeam/InputTeam';
import { AddEmployee } from '../../modules/AddEmployee/AddEmployee';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const Team = () => {
  const isAuth = useSelector((state: RootState) => state.isAuth);
  return (
    <>
      <Container size='xl'>
        <Box mb={25}>
          <InputTeam />
        </Box>
        <Box display={isAuth ? 'block' : 'none'}>
          <AddEmployee />
        </Box>
        <CardsTeam />
      </Container>
    </>
  );
};
