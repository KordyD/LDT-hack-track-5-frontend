import { Anchor, Box, Container, Divider, Text } from '@mantine/core';
import classes from './Footer.module.css';
import { CustomNavLink } from '../../components/NavLink/NavLink';

export const Footer = () => {
  return (
    <Box component='footer' className={classes.wrapper}>
      <Container>
        <Box component='nav' className={classes.containerLinks}>
          <Anchor component={CustomNavLink} to='/'>
            Главная
          </Anchor>
          <Anchor component={CustomNavLink} to='knowledge'>
            Справочник
          </Anchor>
          <Anchor component={CustomNavLink} to='account'>
            Мой кабинет
          </Anchor>
          <Anchor component={CustomNavLink} to='team'>
            Команда
          </Anchor>
          <Anchor component={CustomNavLink} to='shop'>
            Активности
          </Anchor>
        </Box>
        <Box my='50px' ta='center'>
          <Text span>Поддержка: </Text>
          <Anchor>8 999 999 99 99</Anchor>
        </Box>
      </Container>
      <Divider />
      <Container>
        <Box mb='50px' ta='center'>
          <Text className={classes.proscom}>PROSCOM@2023</Text>
        </Box>
      </Container>
    </Box>
  );
};
