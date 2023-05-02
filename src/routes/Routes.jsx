import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import ChefRecipes from '../pages/ChefRecipes/ChefRecipes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/chefDetails'),
      },
      {
        path:'/chef/:id',
        element: <ChefRecipes />,
      }
    ],
  },
]);

export default router;
