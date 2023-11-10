import { Box } from '@mantine/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getPersonalData } from '../../API/personal-account';
import { Footer } from '../../modules/Footer/Footer';
import { Header } from '../../modules/Header/Header';
import { setPostName, setRoles } from '../../store/userSlice';
import { getPosts } from '../../API/company';
import classes from './Root.module.css';

export const Root = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getPersonalData().then((value) => dispatch(setRoles(value.roles)));
  });
  useEffect(() => {
    getPosts().then((value) => dispatch(setPostName(value)));
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
