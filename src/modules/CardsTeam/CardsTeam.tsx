import { SimpleGrid } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTeam } from '../../API/team';
import { employeeTeam } from '../../API/team/interfaces.ts';
import { EmployeeCard } from '../../components/EmployeeCard/EmployeeCard';
import { setError } from '../../store/userSlice.ts';

export const CardsTeam = () => {
  const [team, setTeam] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    Promise.all([getTeam()])
      .then(([res]) => {
        setTeam(res);
      })
      .catch((err) => dispatch(setError(err.response.data.message)));
  }, []);

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
      spacing='xl'
      verticalSpacing='xl'
    >
      {team.map((item: employeeTeam) => (
        <EmployeeCard key={item.employeeId} team={item} />
      ))}
    </SimpleGrid>
  );
};
