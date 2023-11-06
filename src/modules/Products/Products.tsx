import { SimpleGrid, Title } from '@mantine/core';
import { products } from '../../helpers/Products';
import { CardProduct } from '../../components/CardProduct/CardProduct';
import classes from './Products.module.css';

export const Products = () => {
  return (
    <>
      <Title className={classes.title}>Магазин</Title>
      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing='xl'
        verticalSpacing='xl'
      >
        {products.map((item) => (
          <CardProduct key={item.id} image={item.image} price={item.price} />
        ))}
      </SimpleGrid>
    </>
  );
};
