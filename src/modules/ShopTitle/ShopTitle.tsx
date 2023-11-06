import { Box, Image, Title } from '@mantine/core';
import classes from './ShopTitle.module.css';

export const ShopTitle = () => {
  return (
    <Box className={classes.titleBox}>
      <Box>
        <Image
          src='/src/assets/images/hoodieTitle.png'
          className={classes.image1}
        />
      </Box>
      <Title className={classes.title}>
        Получай призы за выполнение квестов и вызовов
      </Title>
      <Box className={classes.rightImageWrapper}>
        <Image
          src='/src/assets/images/hoodieTitle2.png'
          className={classes.image3}
        />
        <Image
          src='/src/assets/images/cupTitle.png'
          className={classes.image2}
        />
      </Box>
    </Box>
  );
};
