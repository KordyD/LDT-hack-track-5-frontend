import { Outlet } from 'react-router-dom';
import { Header } from '../../modules/Header/Header';
import { Footer } from '../../modules/Footer/Footer';

export const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
