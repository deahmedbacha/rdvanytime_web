import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Contact from "./Pages/Contactus/index.jsx";
import Signin from "./Pages/conecter/Signin.jsx";
import Signup from "./Pages/conecter/Signup.jsx";
import Rechercher from "./Pages/Recherche/Recherche.jsx";
import Rdv from "./Pages/rdv/Rdv.jsx";
import Medecin from "./Pages/Médecin/Medecin.jsx";
import Parametres from "./Pages/Parametres/Parametres.jsx";
import Profil from "./Pages/Profil/Profil.jsx";
import Dossiers from 'Pages/Dossiers_médicaux/Dossiers.jsx';
import Rendezvous from "Pages/Rendez-vous/Rendezvous.jsx";
import Benefits from "Components/Benefits/Benefits.jsx";
import Apropos from "Pages/Apropos/Apropos.jsx"

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
  {
    path: "Medecin",
    element: <Medecin />,
  },
  {
    path: "Rdv",
    element: <Rdv />,
  },
  {
    path: "Parametres",
    element: <Parametres />,
  },
  {
    path: "Profil",
    element: <Profil />,
  },
  {
    path: "Dossiers",
    element: <Dossiers />,
  },
  {
    path: "Rendezvous",
    element: <Rendezvous />,
  },
  {
    path: "Benefits",
    element: <Benefits />,
  },
  {
    path: "Apropos",
    element: <Apropos />,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  
);
