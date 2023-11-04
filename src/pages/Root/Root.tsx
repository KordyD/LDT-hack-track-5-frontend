import { Outlet } from 'react-router-dom';
import { Header } from '../../modules/Header/Header';
import { Footer } from '../../modules/Footer/Footer';
import Greetings from "../Greetings/Greetings.tsx";
import { Box } from '@mantine/core';
import classes from './Root.module.css';

export const Root = () => {
  return (
    <Box className={classes.wrapper}>
      <Header />
      <Box component='main' p={'xl'} className={classes.outlet}>
        <Outlet />
      </Box>
      <Footer />
      <Greetings/>
    </Box>
  );
};
