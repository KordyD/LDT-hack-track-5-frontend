import { Box, Container } from '@mantine/core';
import { CardsTeam } from '../../modules/CardsTeam/CardsTeam';
import { InputTeam } from '../../modules/InputTeam/InputTeam';

export const Team = () => {
  return (
    <>
      <Container size='xl'>
        <Box mb={25}>
          <InputTeam />
        </Box>
        <CardsTeam />
      </Container>
    </>
  );
};
