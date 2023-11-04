import {
  ActionIcon,
  Anchor,
  Box,
  Container,
  Image,
  Paper,
} from '@mantine/core';
import { PiSliders } from 'react-icons/pi';
import { FiSearch } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

export const Header = () => {
  return (
    <Paper component='nav' p='xl'>
      <Container className={classes.container} fluid>
        <Box className={classes.containerImage}>
          <Image w={80} h={12} src='/src/assets/proscom-logo.svg' />
        </Box>
        <Box className={classes.containerLinks}>
          <Anchor c='dark' component={NavLink} to='/'>
            Главная
          </Anchor>
          <Anchor c='dark' component={NavLink} to='knowledge'>
            Справочник
          </Anchor>
          <Anchor c='dark' component={NavLink} to='account'>
            Мой кабинет
          </Anchor>
          <Anchor c='dark' component={NavLink} to='team'>
            Команда
          </Anchor>
          <Anchor c='dark' component={NavLink} to='shop'>
            Активности
          </Anchor>
        </Box>
        <Box>
          <ActionIcon c='dark' variant='transparent'>
            <PiSliders />
          </ActionIcon>
          <ActionIcon c='dark' variant='transparent'>
            <FiSearch />
          </ActionIcon>
        </Box>
      </Container>
    </Paper>
  );
};
