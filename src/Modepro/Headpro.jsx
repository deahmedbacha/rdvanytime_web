import { Menu } from "../Components/menu/Menu";
import logo from "../assets/logo.png";
import icon from "../assets/langue.png";
import { Link } from "react-router-dom";
export const Headpro = () => {
  return (
    <>
      <header className="fixed h-20 left-0 w-full opacity-100 bg-white top-0 z-[300]">
        <div className="w-full h-full py-3 grid grid-cols-header-small md:grid-cols-header-medium lg:grid-cols-header-large md:gap-12 items-center justify-between px-3 md:px-5 lg:px-9 shadow-sh-112-8">
          <Link
            className="ps-3 lg:w-52 !h-[56px] !w-[124px] flex items-center justify-start"
            to="/Modepro"
          >
            <div className="hidden md:flex md:items-center md:justify-center">
              <img
                src={logo}
                width="224"
                height="140"
                className="lg:w-52"
                loading="eager"
                alt="RDVanytime"
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
          <div className="hidden lg:flex">
            <div className="grid grid-flow-col md:gap-2 lg:gap-7">
              <a
                className=" font-normal text-center align-middle text-sm text-[#2b2a35] opacity-80 sm:text-xs lg:text-sm xl:text-base hover:text-primary cursor"
                href="#PrqPro"
              >
                Pourquoi RDVanytime Pro
              </a>
              <a
                className=" font-normal text-center align-middle text-sm text-[#2b2a35] opacity-80 sm:text-xs lg:text-sm xl:text-base hover:text-primary cursor"
                href="#Marche"
              >
                Comment ça marche ?
              </a>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="w-full grid gap-2 items-center justify-end grid-flow-col auto-flow-max">
              <div>
                <button
                  id="lang-switcher"
                  aria-label="language-switcher"
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <div width="1.4em" height="1.4em">
                    <img src={icon} alt="icon langue" />
                  </div>
                </button>
              </div>
              <div className="h-full bg-gray-200 py-5 w-px"></div>
              <div className="flex md:hidden min-w-[1.5em] min-h-[1.5em] ">
                <Menu></Menu>
              </div>
              <div className="hidden md:flex md:w-[max-content]">
                <Link
                  className="text-xs xl:text-sm font-normal px-4 py-3 underline text-center text-primary"
                  to="/"
                >
                  Êtes-vous un patient ?
                </Link>
                <Link
                  className="text-sm xl:text-base font-semibold rounded-3xl px-8 py-3 bg-primary hover:bg-primary-bold text-center text-white align-middle"
                  to="/Signinpro"
                >
                  Se connecter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Headpro;
