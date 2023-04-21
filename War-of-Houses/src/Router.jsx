import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from 'react-router-dom';
import Layout from './pages/Layout';
import AboutUs from './pages/AboutUs/AboutUs';
import LandingPage from './pages/LandingPage/LandingPage';
import MainPage from './pages/MainPage/MainPage';
import Instruction1 from './game/Instructions/Instruction1';
import Instruction2 from './game/Instructions/Instruction2';
import Instruction3 from './game/Instructions/Instruction3';

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
          path: 'instruction1',
          element: <Instruction1 />
        },
        {
          path: 'instruction2',
          element: <Instruction2 />
        },
        {
          path: 'instruction3',
          element: <Instruction3 />
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