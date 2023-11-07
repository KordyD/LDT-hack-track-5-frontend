import { Box, Button, Card, Text } from '@mantine/core';
import classes from './CardLecture.module.css';
import { Link } from 'react-router-dom';
export const CardLecture = () => {
  return (
    <Card className={classes.card}>
      <Text className={classes.text}>Курс видеолекций</Text>
      <Box className={classes.wrapper}>
        <Button
          variant='outline'
          className={classes.button}
          component={Link}
          to='/video'
        >
          Начать
        </Button>
      </Box>
    </Card>
  );
};
