import { Box } from '@mantine/core';
import { CardsTeam } from '../../modules/CardsTeam/CardsTeam';
import { InputTeam } from '../../modules/InputTeam/InputTeam';

export const Team = () => {
  return (
    <>
      <Box mb={25}>
        <InputTeam />
      </Box>
      <CardsTeam />
    </>
  );
};
