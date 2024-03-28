import "../conecter/Signin.css";
import Head2 from "Components/Head2";
import SectionSignin from "./SectionSignin.jsx";
import { Footer } from "../../Components/Footer/Footer.jsx";

function Signin() {
  return (
    <>
      <Head2 />
      <div className="sc-1bc08e0b-4 hietwj">
        <SectionSignin></SectionSignin>
      </div>
      <Footer/>
    </>
  );
}
export default Signin;
