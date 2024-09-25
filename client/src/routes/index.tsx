import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/login';
import HomePage from '../pages/home';
import PrivateRoutes from './private-routes';
import RegisterPage from '../pages/register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  }
]);

export default router;