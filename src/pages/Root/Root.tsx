import { Outlet } from 'react-router-dom';
import { Box } from '@mantine/core';
import { Header } from '../../modules/Header/Header';
import { Footer } from '../../modules/Footer/Footer';
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
