import { Button, Flex, Text } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import classes from './Greetings.module.css';
import { HeadingH3 } from '../../theme/AdaptiveConts.ts';

export const Greetings = () => {
  return (
    <Flex className={classes.greetings} h='100vh'>
      <Text className={classes.greetings__text} fz={HeadingH3}>
        Добро пожаловать! Начни&nbsp;свой&nbsp;путь&nbsp;вместе&nbsp;с&nbsp;нами
      </Text>
      <Button
        w={{ lg: '245px', md: '230px', sm: '200px', base: '175px' }}
        h={{ lg: '75px', md: '65px', sm: '55px', base: '45px' }}
        className={classes.greetings__button}
        component={NavLink}
        to='/register'
      >
        Регистрация
      </Button>
      <Button
        w={{ lg: '245px', md: '230px', sm: '200px', base: '175px' }}
        h={{ lg: '75px', md: '65px', sm: '55px', base: '45px' }}
        className={classes.greetings__button}
        component={NavLink}
        to='/login'
      >
        Вход
      </Button>
    </Flex>
  );
};
