
import Headconectpro from "Modepro/Headconectpro";
import Informations from "./Informations";
import { Footer } from "../../Components/Footer/Footer.jsx";
import Horaires from "./Horaires";
import Expertises from "./Expertises";
import Diplômes from "./Diplômes";
export const Profilpro = () => {


  return (
    <>
      <Headconectpro></Headconectpro>
      <body>
        <main
          className=" grid-cols-profile-area mt-20 bg-p-cover overflow-hidden "
          style={{ display: "flex" }}
        >
          <div
            className="w-screen flex flex-col py-1 relative overflow-scroll scrollbar-none"
            style={{ marginLeft: "14%", width: "70%" }}
          >
            <div className="mx-5 pt-1 flex flex-col flex-1">
              <Informations></Informations>
              <Expertises></Expertises>
              <Diplômes></Diplômes>
              <Horaires></Horaires>
            </div>
          </div>
        </main>
      </body>
      <Footer />
    </>
  );
};
export default Profilpro;
