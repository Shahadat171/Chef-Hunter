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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path : '/',
        element: <HomeMain></HomeMain>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
