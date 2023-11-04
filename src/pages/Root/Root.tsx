import { Outlet } from 'react-router-dom';
import { Header } from '../../modules/Header/Header';
import { Footer } from '../../modules/Footer/Footer';
import { Box } from '@mantine/core';
import classes from './Root.module.css';

export const Root = () => {
  return (
    <>
      <Box className={classes.wrapper}>
        <Box className={classes.headerWrapper}>
          <Header />
        </Box>
        <Box component='main' className={classes.outlet}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
};
