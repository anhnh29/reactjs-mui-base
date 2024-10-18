import { FC, lazy } from 'react';

import { Navigate, useRoutes } from 'react-router-dom';

import { routeList } from '@/data/constant/navs';
import LayoutComponent from '@/layout';
import SignIn from '@/pages/signin';

const NotFound = lazy(() => import('@/pages/not-found'));

const routes = [
  {
    path: '/',
    element: <Navigate to="home" />,
  },
  {
    path: 'signin',
    element: <SignIn />,
  },
  {
    path: '/',
    element: <LayoutComponent />,
    children: [
      ...routeList,
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routes);

  return element;
};

export default RenderRouter;
