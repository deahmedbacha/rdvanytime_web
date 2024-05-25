import "../conecter/Signup.css";
import Head from "Components/Head";
import SectionSignup from "./SectionSignup";
import { Footer } from "../../Components/Footer/Footer.jsx";

function Signup() {

  return (
    <>
      <Head brand="fixed h-20 end-0 w-full opacity-100 bg-white top-0 z-[49]" />
      <div className="sc-aaf087d9-5 kGAwKF">
        <SectionSignup></SectionSignup>
      </div>
      <Footer />
    </>
  );
}
export default Signup;
