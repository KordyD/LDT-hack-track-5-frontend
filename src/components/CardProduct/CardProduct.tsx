import { Box, Button, Image, Stack, Text } from '@mantine/core';
import classes from './CardProduct.module.css';

interface CardProduct {
  price: number;
  image: string;
}

export const CardProduct = ({ price, image }: CardProduct) => {
  return (
    <>
      <Stack gap={'lg'}>
        <Box className={classes.wrapper}>
          <Text className={classes.text}>{price}</Text>
          <Box className={classes.imageWrapper}>
            <Box className={classes.image}>
              <Image src={image} />
            </Box>
          </Box>
        </Box>
        <Button className={classes.button}>Купить</Button>
      </Stack>
    </>
  );
};
