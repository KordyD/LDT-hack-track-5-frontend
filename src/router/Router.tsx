import { createBrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Root } from '../pages/Root/Root';
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
import { TaskContainer } from '../pages/TaskContainer/TaskContainer.tsx';
import { Audio } from '../pages/Audio/Audio.tsx';
import { RegisterAdmin } from '../pages/RegisterAdmin/RegisterAdmin.tsx';
import { Questions } from '../pages/AllArticles/Questions.tsx';
import { Favourites } from '../pages/Favourites/Favourites.tsx';
import { RootState } from '../store';

interface Params {
  articleId: number;
}

const checkAuth = () => {
  const jwt = localStorage.getItem('token');
  if (jwt) {
    return true;
  }
  return false;
};

function routes() {
  return [
    { path: '/greeting', element: <Greetings /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/company-register', element: <RegisterAdmin /> },
    { path: '*', element: <Navigate to='/greeting' replace /> },
  ];
}

function privateRoutes() {
  return {
    element: <Root />,
    children: [
      {
        path: '/',
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
        path: 'tasks',
        element: <TaskContainer />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },

      {
        path: 'account',
        element: <Account />,
      },
      {
        path: 'video',
        element: <Video />,
      },
      {
        path: 'audio',
        element: <Audio />,
      },
      {
        path: 'questions',
        element: <Questions />,
      },
      {
        path: 'favourites',
        element: <Favourites />,
      },
      {
        path: '/login',
        element: <Navigate to='/' replace />,
      },
      {
        path: '/register',
        element: <Navigate to='/' replace />,
      },
      {
        path: '/greeting',
        element: <Navigate to='/' replace />,
      },
      {
        path: '/company-register',
        element: <Navigate to='/' replace />,
      },
    ],
  };
}

export const router = createBrowserRouter([
  checkAuth() ? privateRoutes() : {},
  ...routes(),
]);
