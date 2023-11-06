import { Container, Space } from '@mantine/core';
import { EmployeeCard } from '../../components/EmployeeCard/EmployeeCard';
import { employee } from '../../helpers/Employee';
import { Products } from '../../modules/Products/Products';
import { ShopTitle } from '../../modules/ShopTitle/ShopTitle';
export const Shop = () => {
  return (
    <>
      <Container size='xl'>
        <ShopTitle />
        <Space h='35px' />
        <EmployeeCard
          name={employee.name}
          grade={employee.grade}
          job={employee.job}
          coins={employee.coins}
          completedChallenges={employee.completedChallenges}
        />
        <Products />
      </Container>
    </>
  );
};
