import { Anchor, Box, Container, Divider, Text } from '@mantine/core';
import { CustomNavLink } from '../../components/NavLink/NavLink';
import classes from './Footer.module.css';

export const Footer = () => {
  return (
    <Box component='footer' className={classes.wrapper}>
      <Box component='nav' p={25}>
        <Container size='lg' className={classes.containerLinks}>
          <Anchor component={CustomNavLink} to='knowledge'>
            Справочник
          </Anchor>
          <Anchor component={CustomNavLink} to='mission'>
            Задания
          </Anchor>
          <Anchor component={CustomNavLink} to='team'>
            Команда
          </Anchor>
          <Anchor component={CustomNavLink} to='shop'>
            Активности
          </Anchor>
        </Container>
      </Box>

      <Box my='50px' ta='center'>
        <Text span>Поддержка: </Text>
        <Anchor>8 999 999 99 99</Anchor>
      </Box>
      <Divider />
      <Container>
        <Box mb='50px' ta='center'>
          <Text className={classes.proscom}>PROSCOM@2023</Text>
        </Box>
      </Container>
    </Box>
  );
};
