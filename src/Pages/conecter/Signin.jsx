import "../conecter/Signin.css";
import Head from "Components/Head";
import SectionSignin from "./SectionSignin.jsx";
import { Footer } from "../../Components/Footer/Footer.jsx";

function Signin() {
  return (
    <>
      <Head brand="fixed h-20 end-0 w-full opacity-100 bg-white top-0 z-[49]" />
      <div className="sc-1bc08e0b-4 hietwj">
        <SectionSignin></SectionSignin>
      </div>
      <Footer />
    </>
  );
}
export default Signin;
