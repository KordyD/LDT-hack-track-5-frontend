import { Box, Button, Card, Group, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { EditButton } from '../EditButton/EditButton';
import classes from './CardLecture.module.css';

interface CardLectureProps {
  type: 'audio' | 'video';
  isAuth: boolean;
}

export const CardLecture = ({ type, isAuth }: CardLectureProps) => {
  return (
    <Card className={classes.card}>
      <Group justify='space-between'>
        <Text className={classes.text}>
          {type === 'audio' ? 'Курс аудиолекций' : 'Курс видеолекций'}
        </Text>
        <EditButton display={isAuth ? 'flex' : 'none'} variant='white' />
      </Group>
      <Box className={classes.wrapper}>
        <Button
          variant='outline'
          className={classes.button}
          component={Link}
          to={`/${type}`}
        >
          Начать
        </Button>
      </Box>
    </Card>
  );
};
