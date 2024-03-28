import { Head } from '../Components/Head';
import { Body } from '../Components/Body';
import {Footer} from "../Components/Footer/Footer.jsx";
import {Benefits} from "Components/Benefits/Benefits.jsx";
import { Data } from "Components/Data-App/Data.jsx";
import { App } from "Components/Data-App/App.jsx";
import { Doctors } from "Components/Doctors/Doctors.jsx";
import { Marche } from "Components/Marche/Marche.jsx";

import "../Pages/Body.css"; 
function Index() {
    return (
      <>
        <Head />
        <Body />
        <Benefits />
        <Marche />
        <Data />
        <App />
        <Doctors />

        <Footer />
      </>
    );
    }
export default Index;
