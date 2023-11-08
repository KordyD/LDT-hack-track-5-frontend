import { Box, Button, Flex, Image, Stack, Text } from '@mantine/core';
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
          <Flex gap={5} justify={'flex-end'}>
            <Text className={classes.text}>{price}</Text>
            <Image
              src='/src/assets/icon/coin.svg'
              style={{ width: 24, height: 24 }}
            />
          </Flex>
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
