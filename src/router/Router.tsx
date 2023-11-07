import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../pages/Root/Root';
import { Main } from '../pages/Main/Main';
import { Knowledge } from '../pages/Knowledge/Knowledge';
import { Team } from '../pages/Team/Team';
import { Shop } from '../pages/Shop/Shop';
import { Greetings } from '../pages/Greetings/Greetings.tsx';
import { Register } from '../pages/Register/Register.tsx';
import { Login } from '../pages/Login/Login.tsx';
import { Article } from '../pages/Article/Article';
import { Account } from '../pages/Account/Account.tsx';
import { Video } from '../pages/Video/Video';
import { articlesMain } from '../helpers/Articles.ts';
import { MissionPage } from '../pages/MissionPage/MissionPage.tsx';
import { PopupMission } from '../components/Mission/PopupMission/PopupMission.tsx';

interface Params {
  articleId: number;
}

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
        loader: ({ params }) => {
          const typedParams = params as unknown as Params;
          if (!typedParams.articleId) {
            return null;
          }
          return {
            title: articlesMain[typedParams.articleId].title,
            text: articlesMain[typedParams.articleId].text,
          };
        },
      },
      {
        path: 'team',
        element: <Team />,
      },
      {
        path: 'mission/:articleId',
        element: <PopupMission />,
      },
      {
        path: 'mission',
        element: <MissionPage />,
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
      {
        path: 'account',
        element: <Account />,
      },
      {
        path: 'video',
        element: <Video />,
      },
    ],
  },
]);
