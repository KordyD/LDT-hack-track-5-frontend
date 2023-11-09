import { SimpleGrid } from '@mantine/core';
import { EmployeeCard } from '../../components/EmployeeCard/EmployeeCard';
import { team } from '../../helpers/TeamData';

export const CardsTeam = () => {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
      spacing='xl'
      verticalSpacing='xl'
    >
      {team.map((item) => (
        <EmployeeCard
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
