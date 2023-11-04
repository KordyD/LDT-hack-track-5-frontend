import { Anchor, Box, Image } from '@mantine/core';
import { CustomNavLink } from '../../components/NavLink/NavLink';
import { CustomActionIcon } from '../../components/ActionIcon/ActionIcon';
import { IconContext } from 'react-icons';
import { PiSliders } from 'react-icons/pi';
import { FiSearch } from 'react-icons/fi';
import classes from './Header.module.css';

export const Header = () => {
  return (
    <Box component='header' p='xl'>
      <Box className={classes.container}>
        <Box className={classes.containerImage}>
          <Image w={80} h={12} src='/src/assets/proscom-logo.svg' />
        </Box>
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
        <Box className={classes.containerButtons}>
          <IconContext.Provider value={{ className: classes.icons }}>
            <CustomActionIcon>
              <PiSliders />
            </CustomActionIcon>
            <CustomActionIcon>
              <FiSearch />
            </CustomActionIcon>
          </IconContext.Provider>
        </Box>
      </Box>
    </Box>
  );
};
