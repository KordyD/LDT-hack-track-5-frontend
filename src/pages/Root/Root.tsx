import { Outlet } from 'react-router-dom';
import { Header } from '../../modules/Header/Header';
import { Footer } from '../../modules/Footer/Footer';
import Greetings from "../Greetings/Greetings.tsx";

export const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Greetings/>
    </>
  );
};
