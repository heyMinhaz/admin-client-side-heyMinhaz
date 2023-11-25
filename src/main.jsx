import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './Main Layout/MainLayout';
import Home from './Components/Home/Home';
import AuthProvider from './Components/Authprovider/Authprovider';
import Login from './Components/Login/Login';
import Registration from './Components/Register/Registration';
import AddArtical from './Components/AddArctical/AddArtical';
import Dashboard from './Components/Dashboard/Dashboard';
import AllArtical from './Components/AllArtical/AllArtical';
import ArticalDetails from './Components/AllArtical/ArticalDetails';
import Subcription from './Components/Subcription/Subcription';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5001/news"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/artical",
        element: <AddArtical></AddArtical>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/subcription",
        element: <Subcription></Subcription>,
      },
      {
        path: "/allartical",
        element: <AllArtical></AllArtical>,
        loader: () => fetch("http://localhost:5001/news"),
      },
      {
        path: "/details/:id",
        element: <ArticalDetails></ArticalDetails>,
        loader: ({ params }) => fetch(`http://localhost:5001/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
