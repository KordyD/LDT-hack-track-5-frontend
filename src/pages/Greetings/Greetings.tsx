import { Button, Flex, Text } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import classes from './Greetings.module.css';

export const Greetings = () => {
  return (
    <Flex className={classes.greetings}>
      <Text className={classes.greetings__text}>
        Добро пожаловать! Начни&nbsp;свой&nbsp;путь&nbsp;вместе&nbsp;с&nbsp;нами
      </Text>
      <Button
        className={classes.greetings__button}
        component={NavLink}
        to='/register'
      >
        Регистрация
      </Button>
      <Button
        className={classes.greetings__button}
        component={NavLink}
        to='/login'
      >
        Вход
      </Button>
    </Flex>
  );
};
