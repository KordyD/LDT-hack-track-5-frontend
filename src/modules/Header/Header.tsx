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
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

export const Header = () => {
  return (
    <Paper component='nav' p='xl'>
      <Container className={classes.container} fluid>
        <Box className={classes.containerImage}>
          <Image w={80} h={12} src='/src/assets/proscom-logo.svg' />
        </Box>
        <Box className={classes.containerLinks}>
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
        <Box className={classes.containerButtons}>
          <ActionIcon variant='transparent'>
            <PiSliders />
          </ActionIcon>
          <ActionIcon variant='transparent'>
            <FiSearch />
          </ActionIcon>
        </Box>
      </Container>
    </Paper>
  );
};
