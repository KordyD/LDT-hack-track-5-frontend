import { SimpleGrid } from '@mantine/core';
import { CardTeam } from '../../components/CardTeam/CardTeam';
import { team } from '../../helpers/TeamData';

export const CardsTeam = () => {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
      spacing='xl'
      verticalSpacing='xl'
    >
      {team.map((item) => (
        <CardTeam
          key={item.id}
          name={item.name}
          city={item.city}
          job={item.job}
          contacts={item.contacts}
        />
      ))}
    </SimpleGrid>
  );
};
