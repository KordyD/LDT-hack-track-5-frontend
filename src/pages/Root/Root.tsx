import { Box } from '@mantine/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getPersonalData } from '../../API/personal-account';
import { Footer } from '../../modules/Footer/Footer';
import { Header } from '../../modules/Header/Header';
import { setRoles } from '../../store/userSlice';
import classes from './Root.module.css';

export const Root = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getPersonalData().then((value) => dispatch(setRoles(value.roles)));
  });
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
