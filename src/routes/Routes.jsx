import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import ChefRecipes from '../pages/ChefRecipes/ChefRecipes';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import Blog from '../pages/Blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://italiano-chefs-secret-server-heynazrul.vercel.app/chefDetails'),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/chef/:id',
        element: (
          <PrivateRoute>
            <ChefRecipes />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://italiano-chefs-secret-server-heynazrul.vercel.app/chef/${params.id}`),
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
