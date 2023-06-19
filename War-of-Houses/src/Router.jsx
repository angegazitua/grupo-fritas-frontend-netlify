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
import Instruction4 from './game/Instructions/Instruction4';
import Instruction5 from './game/Instructions/Instruction5';
import Partida from './game/Partida/Partida';
import Login from './profile/Login';
import SignUp from './profile/SignUp';

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
        },
        {
          path: 'instruction4',
          element: <Instruction4 />
        },
        {
          path: 'instruction5',
          element: <Instruction5 />
        },
        {
          path: 'partida',
          element: <Partida />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'signup',
          element: <SignUp />
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