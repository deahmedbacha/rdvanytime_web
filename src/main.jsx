import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Contact from "./Pages/Contactus/index.jsx";
import Signin from "./Pages/conecter/Signin.jsx";
import Signup from "./Pages/conecter/Signup.jsx";
import Rechercher from "./Pages/Recherche/Recherche.jsx";





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "Signin",
    element: <Signin />,
  },
  {
    path: "Signup",
    element: <Signup />,
  },
  {
    path: "Rechercher",
    element: <Rechercher />,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  
);
