import { Box, Container } from '@mantine/core';
import { useSelector } from 'react-redux';
import { CardsTeam } from '../../modules/CardsTeam/CardsTeam';
import { InputTeam } from '../../modules/InputTeam/InputTeam';
import { AddEmployee } from '../../modules/AddEmployee/AddEmployee';
import { RootState } from '../../store';

export const Team = () => {
  const role = useSelector((state: RootState) => state.roles);
  return (
    <>
      <Container size='xl'>
        <Box mb={25}>
          <InputTeam />
        </Box>
        <Box
          display={
            role.includes('ROLE_ADMIN') || role.includes('ROLE_ROLE_HR')
              ? 'block'
              : 'none'
          }
        >
          <AddEmployee />
        </Box>
        <Box mt={25}>
          <CardsTeam />
        </Box>
      </Container>
    </>
  );
};
