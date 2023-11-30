/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './Main Layout/MainLayout';
import Home from './Components/Home/Home';
import AuthProvider from './Components/Authprovider/Authprovider';
import Login from './Components/Login/Login';
import Registration from './Components/Register/Registration';
import AddArtical from './Components/AddArctical/AddArtical';

import AllArtical from './Components/AllArtical/AllArtical';
import ArticalDetails from './Components/AllArtical/ArticalDetails';
import Subcription from './Components/Subcription/Subcription';
import Myartical from './Components/MyArtical/Myartical';
import Error from '../src/Error/Error';
import AllUsers from './Components/Dashboard/Alluser';
import AdminRoute from './Components/Dashboard/AdminRoute';
import PrivateRoute from './Components/routes/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashborad';
import Premium from './Components/PremiumArticals/Premium';
import Payment from './Components/Payment/Payment';
import Done from './Components/Payment/Done';
import Cart from '../src/Components/Cart/Cart';
import PaymentHistory from '../src/Components/PaymentHistory/PaymentHistory';


const queryClient = new QueryClient();


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
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
        element: <PrivateRoute><AddArtical></AddArtical></PrivateRoute>,
      },

      {
        path: "/subcription",
        element: <Subcription></Subcription>,
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/done",
        element: <Done></Done>,
      },
      {
        path: "/myartical",
        element: <Myartical></Myartical>,
        loader: () => fetch("http://localhost:5001/news"),
      },
      {
        path: "/allartical",
        element: <AllArtical></AllArtical>,
        loader: () => fetch("http://localhost:5001/news"),
      },
      {
        path: "/details/:id",
        element: <ArticalDetails></ArticalDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/news/${params.id}`),
      },
      {
        path: "/premiumartical",
        element: <Premium></Premium>,
        loader: () => fetch("http://localhost:5001/news"),
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },

      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "users",
            element: (
              <AdminRoute>
                <AllUsers></AllUsers>
              </AdminRoute>
            ),
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
