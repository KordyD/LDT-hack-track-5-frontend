import { Anchor, Box, Flex, List, Paper, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

export const Footer = () => {
  return (
    <Paper component='footer' p='xl' className={classes.wrapper}>
      <Box component='nav' className={classes.wrapperLinks}>
        <Anchor component={Link} to='/'>
          Главная
        </Anchor>
        <Anchor component={Link} to='knowledge'>
          Справочник
        </Anchor>
        <Anchor component={Link} to='account'>
          Мой кабинет
        </Anchor>
        <Anchor component={Link} to='team'>
          Команда
        </Anchor>
        <Anchor component={Link} to='shop'>
          Активности
        </Anchor>
      </Box>
      <Box className={classes.wrapperInfo}>
        <List className={classes.list}>
          <List.Item>
            <Text mb={5}>Адрес</Text>
            <Text>
              109028, Москва, Большой Трехсвятительский переулок, д. 2/1, стр.
              2.
            </Text>
          </List.Item>
          <List.Item mt={15}>
            <Flex wrap='wrap' gap={20}>
              <Box>
                <Text mb={5}>Понедельник - Четверг</Text>
                <Text>9:00-18:00</Text>
              </Box>
              <Box>
                <Text mb={5}>Пятница</Text>
                <Text>9:00-16:00</Text>
              </Box>
            </Flex>
          </List.Item>
          <List.Item mt={15}>
            <Text mb={5}>Электронная почта</Text>
            <Anchor>op@dfg.com</Anchor>
          </List.Item>
          <List.Item mt={15}>
            <Anchor>+7 999 999 99 99</Anchor>
          </List.Item>
        </List>
      </Box>
    </Paper>
  );
};
