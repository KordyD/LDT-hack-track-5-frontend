import { Box, Button, Flex, Image, Stack, Text } from '@mantine/core';
import { AxiosError } from 'axios';
import { buyProduct } from '../../API/market';
import classes from './CardProduct.module.css';

interface CardProduct {
  price: number;
  image: string;
  id: number;
}

export const CardProduct = ({ price, image, id }: CardProduct) => {
  const handleClick = async (productId: number) => {
    try {
      const data = await buyProduct(productId);
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.response?.data);
    }
  };
  return (
    <>
      <Stack gap={'lg'}>
        <Box className={classes.wrapper}>
          <Flex gap={5} justify={'flex-end'}>
            <Text className={classes.text}>{price}</Text>
            <Image
              src='/src/assets/icon/coin.svg'
              style={{ width: 24, height: 24 }}
              fallbackSrc='/src/assets/images/placeholder.jpg'
            />
          </Flex>
          <Box className={classes.imageWrapper}>
            <Box className={classes.image}>
              <Image src={image} />
            </Box>
          </Box>
        </Box>
        <Button onClick={() => handleClick(id)} className={classes.button}>
          Купить
        </Button>
      </Stack>
    </>
  );
};
