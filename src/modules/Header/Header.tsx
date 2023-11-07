import { Anchor, Box, Container, Image } from '@mantine/core';
import { CustomNavLink } from '../../components/NavLink/NavLink';
import { CustomActionIcon } from '../../components/ActionIcon/ActionIcon';
import { IconContext } from 'react-icons';
import { BsBell } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Container size='xl'>
      <Box className={classes.container} component='header'>
        <Image w={80} h={12} src='/src/assets/icon/proscom-logo.svg' />
        <Box component='nav' className={classes.containerLinks}>
          <Anchor component={CustomNavLink} to='/'>
            Главная
          </Anchor>
          <Anchor component={CustomNavLink} to='knowledge'>
            Справочник
          </Anchor>
          <Anchor component={CustomNavLink} to='mission'>
            Мой кабинет
          </Anchor>
          <Anchor component={CustomNavLink} to='team'>
            Команда
          </Anchor>
          <Anchor component={CustomNavLink} to='shop'>
            Активности
          </Anchor>
        </Box>
        <Box className={classes.containerButtons}>
          <IconContext.Provider value={{ className: classes.icon1 }}>
            <CustomActionIcon>
              <BsBell />
            </CustomActionIcon>
          </IconContext.Provider>
          <IconContext.Provider value={{ className: classes.icon2 }}>
            <CustomActionIcon component={Link} to='/account'>
              <MdAccountCircle />
            </CustomActionIcon>
          </IconContext.Provider>
        </Box>
      </Box>
    </Container>
  );
};
