import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Authpage from './Page/Authpage';
import Homepage from './Page/Homepage';
import Companypage from './Page/Companypage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
    children: [
      {
        path: "/",
        element: <App/>
      },
      {
        path: "/auth",
        element: <Authpage/>
      },
      {
        path: "/company",
        element: <Companypage/>
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
