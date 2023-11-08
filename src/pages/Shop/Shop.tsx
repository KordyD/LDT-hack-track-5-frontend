import { Box, Container } from '@mantine/core';
import { ProfileCard } from '../../components/ProfileCard/ProfileCard';
import { employee } from '../../helpers/Employee';
import { Products } from '../../modules/Products/Products';
import { ShopTitle } from '../../modules/ShopTitle/ShopTitle';
export const Shop = () => {
  return (
    <>
      <Container size='xl'>
        <ShopTitle />
        <Box mt={25}>
          <ProfileCard
            name={employee.name}
            grade={employee.grade}
            job={employee.job}
            coins={employee.coins}
            completedChallenges={employee.completedChallenges}
          />
        </Box>
        <Products />
      </Container>
    </>
  );
};
