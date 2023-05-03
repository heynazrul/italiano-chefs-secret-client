import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import ChefRecipes from '../pages/ChefRecipes/ChefRecipes';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: '/',

        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/chefDetails'),
      },
      {
        path: '/chef/:id',
        element: <ChefRecipes />,

        loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`),
      },
    ],
  },
]);

export default router;
