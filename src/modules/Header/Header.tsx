import { ActionIcon, Anchor, Box, Image } from '@mantine/core';
import { PiSliders } from 'react-icons/pi';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

export const Header = () => {
  return (
    <Box component='header' p='xl'>
      <Box className={classes.container}>
        <Box className={classes.containerImage}>
          <Image w={80} h={12} src='/src/assets/proscom-logo.svg' />
        </Box>
        <Box component='nav' className={classes.containerLinks}>
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
      </Box>
    </Box>
  );
};
