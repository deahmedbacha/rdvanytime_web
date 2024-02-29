import { Menu } from "./menu/Menu";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export const Head2 = () => {
  return (
    <>
      <header className="fixed h-20 end-0 w-full opacity-100 bg-white top-0 z-[49]">
        <div className="w-full h-full py-3 flex md:gap-12 items-center justify-between px-3 md:px-8 md:px-5 lg:px-9 shadow-sh-112-8">
          <Link
            className="ps-3 lg:w-52 !h-[56px] !w-[124px] flex items-center justify-start"
            to="/"
          >
            <div className="hidden md:flex md:items-center md:justify-center">
              <img
                src={logo}
                width="124"
                height="56"
                className="lg:w-52"
                alt=""
                loading="eager"
              />
            </div>
            <div className="block md:hidden max-w-[32px] max-h-[32px]">
              <img
                src={logo}
                loading="eager"
                className="max-w-[32px] max-h-[32px]"
                alt="RDVanytime"
              />
            </div>
          </Link>
          <div className="flex justify-end ms-auto">
            <div className="grid grid-flow-col auto-cols gap-3 items-center justify-center">
              <Link
                className="text-sm md:text-base font-light px-7 py-3 text-gray-900 min-w-[max-content]"
                to="/Signup"
              >
                Vous avez déjà un compte ?
              </Link>
              <Link
                className="text-sm md:text-base font-semibold rounded-3xl px-7 py-3 bg-primary-ice text-white"
                to="/Signin"
              >
                Se connecter
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Head2;
