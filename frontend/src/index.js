import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { store } from './store/store'
import { Provider } from 'react-redux'

import HomePage from './components/HomePage';
import CurrentList from './components/CurrentList';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path:'/CurrentList',
        element: <CurrentList/>,
      }
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);