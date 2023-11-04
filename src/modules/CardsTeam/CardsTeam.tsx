import { SimpleGrid } from '@mantine/core';
import { CardTeam } from '../../components/CardTeam/CardTeam';

export const CardsTeam = () => {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
      spacing='xl'
      verticalSpacing='xl'
    >
      <CardTeam />
      <CardTeam />
      <CardTeam />
      <CardTeam />
      <CardTeam />
      <CardTeam />
      <CardTeam />
      <CardTeam />
      <CardTeam />
    </SimpleGrid>
  );
};
