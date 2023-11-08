import { ActionIcon, Box, Button, Card, Group, Text } from '@mantine/core';
import classes from './CardLecture.module.css';
import { Link } from 'react-router-dom';
import { PiPencilSimple } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
export const CardLecture = () => {
  const isAuth = useSelector((state: RootState) => state.isAuth);

  return (
    <Card className={classes.card}>
      <Group justify='space-between'>
        <Text className={classes.text}>Курс видеолекций</Text>
        <ActionIcon
          variant='white'
          radius='xl'
          display={isAuth ? 'flex' : 'none'}
        >
          <PiPencilSimple />
        </ActionIcon>
      </Group>
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
