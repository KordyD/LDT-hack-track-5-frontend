import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../pages/Root/Root';
import { Main } from '../pages/Main/Main';
import { Knowledge } from '../pages/Knowledge/Knowledge';
import { Team } from '../pages/Team/Team';
import { Account } from '../pages/Account/Account';
import { Shop } from '../pages/Shop/Shop';
import { Greetings } from '../pages/Greetings/Greetings.tsx';
import { Register } from '../pages/Register/Register.tsx';
import { Login } from '../pages/Login/Login.tsx';
import { Article } from '../pages/Article/Article';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'knowledge',
        element: <Knowledge />,
      },
      {
        path: 'knowledge/:articleId',
        element: <Article />,
      },
      {
        path: 'team',
        element: <Team />,
      },
      {
        path: 'account',
        element: <Account />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'greeting',
        element: <Greetings />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);
