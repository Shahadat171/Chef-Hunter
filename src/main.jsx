import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './assets/components/Home/Home.jsx';
import Login from './assets/components/Login/Login.jsx';
import Register from './assets/components/Register/Register.jsx';
import AuthProvider from './Providers/AuthProvider';
import HomeMain from './assets/components/HomeMain/HomeMain';
import EveryChef from './assets/components/EveryChef/EveryChef';
import PageNotFound from './assets/components/PageNotFound/PageNotFound';
import PrivatesRoute from './assets/components/Routes/PrivatesRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path : '/',
        element: <HomeMain></HomeMain>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/chef/:id',
        element : <PrivatesRoute> <EveryChef></EveryChef></PrivatesRoute>,
        loader : ({params}) => fetch(`http://localhost:5000/Chef/${params.id}`)
      },
      {
        path: "*",
        element: <PageNotFound></PageNotFound>
      }
    ],
    
     
    
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
