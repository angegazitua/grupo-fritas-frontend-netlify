import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from 'react-router-dom';
import Layout from './pages/Layout';
import AboutUs from './pages/AboutUs/AboutUs';
import LandingPage from './pages/LandingPage/LandingPage';
import MainPage from './pages/MainPage/MainPage';
import Board from './game/Board';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <LandingPage />
        },
        {
          path: 'about-us',
          element: <AboutUs />
        },
        {
          path: 'main-page',
          element: <MainPage />
        },
        {
          path: 'board',
          element: <Board />
        }
      ]
    },
    {
      path: '*', 
      loader: () => {
        return redirect('/')
      }
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default Router;