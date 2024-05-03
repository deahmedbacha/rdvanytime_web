import { Menu } from './menu/Menu'
import logo from '../assets/logo.png'
import icon from '../assets/langue.png'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
export const Head = (props) => {
  const [showFirstContent, setShowFirstContent] = useState(false);

  const handleRadioClick = () => {
    // setShowFirstContent(!showFirstContent);
    setShowFirstContent(!showFirstContent);
  };

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          // Handle case where token is not available
          return;
        }

        const response = await axios.post(
          "http://localhost:4000/get-user",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Assuming response.data contains user data
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const disconnect = () => {
    localStorage.removeItem("token");
    window.location.href = "http://localhost:5173/";
  };

  return (
    <>
      {userData ? (
        // <header className="fixed h-20 end-0 w-full opacity-100 bg-white top-0 z-[49]">
        <header className={props.brand}>
          <div className="w-full h-full py-3 flex md:gap-12 items-center justify-between px-3 md:px-8 md:px-5 lg:px-9 shadow-sh-112-8">
            <Link
              className="ps-3 lg:w-52 !h-[56px] !w-[124px] flex items-center justify-start"
              to="/"
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
                  href="/#benefits"
                  className=" font-normal text-center align-middle text-sm text-[#2b2a35] opacity-80 sm:text-xs lg:text-sm xl:text-base hover:text-primary cursor"
                >
                  Pourquoi RDVanytime
                </a>
                <a
                  href="/#Marche"
                  className=" font-normal text-center align-middle text-sm text-[#2b2a35] opacity-80 sm:text-xs lg:text-sm xl:text-base hover:text-primary cursor"
                >
                  Comment ça marche ?
                </a>
                <Link
                  className="font-normal text-sm text-[#2b2a35] opacity-80 sm:text-xs lg:text-sm xl:text-base hover:text-primary"
                  to="/Apropos"
                >
                  À propos
                </Link>
                <Link
                  className="font-normal text-sm text-[#2b2a35] opacity-80 sm:text-xs lg:text-sm xl:text-base hover:text-primary"
                  to="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex justify-end ms-auto">
              <div className="relative flex justify-end">
                <div className="w-full grid grid-flow-col auto-cols-max gap-2 items-center justify-end">
                  <div>
                    <button
                      className="w-8 h-8 flex items-center justify-center"
                      style={{ paddingRight: "15%" }}
                    >
                      <img
                        src="src/assets/image_Profil/notifications.svg"
                        alt="notifications"
                      />
                    </button>
                  </div>
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
                  <div className="h-full bg-gray-200 py-5 mx-2 w-px"></div>
                  <div className=" md:flex w-full min-w-[185px] md:max-w-[200px]">
                    <button className="flex flex-row items-center gap-2 me-5">
                      <div className="rounded-full border-2 border-primary border-solid flex flex-col items-center justify-center">
                        <img
                          src="src/assets/avatar_doctor.jpg"
                          width="34"
                          height="34"
                          className="rounded-full object-cover min-w-[34px] min-h-[34px]"
                        />
                      </div>
                      <div className="line-clamp-1 rtl:text-right ltr:text-left !font-main">
                        {userData.data.firstName} {userData.data.lastName}
                      </div>
                      <svg
                        className={` transform min-w-[1.2em] min-h-[1.2em] transition-transform ${
                          showFirstContent
                            ? "transform min-w-[1.2em] min-h-[1.2em] -rotate-180 transition-transform"
                            : "transform min-w-[1.2em] min-h-[1.2em] transition-transform"
                        }`}
                        width="1.2em"
                        height="1.2em"
                        viewBox="0 0 24 24"
                        onClick={handleRadioClick}
                      >
                        <path
                          d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>

                    {showFirstContent && (
                      <div>
                        <div
                          className="react-tiny-popover-container"
                          style={{
                            position: "fixed",
                            overflow: "visible",
                            top: "0px",
                            left: "auto",
                            transform: "translate(10px, 80px)",
                            right: "20px",
                            zIndex: "100",
                          }}
                        >
                          <div
                            id="authed-menu-dropdown"
                            className="sm:w-full !mt-1 relative border border-1 shadow-lg rounded-xl flex flex-col bg-white min-w-[285px] md:max-w-[285px] max-tab:w-[calc(100vw-24px)] max-tab:mx-auto max-tab:my-0 fade-in"
                          >
                            <div className="py-4 px-4 flex flex-col items-start">
                              <a
                                className="grid items-center gap-2 py-3 px-4 mb-2 rounded-xl cursor-pointer  hover:text-primary-bold group w-full grid-cols-[48px,1fr]"
                                href=""
                              >
                                <img
                                  className="rounded-full w-12 h-12 object-cover group-hover:shadow-sm"
                                  src="src/assets/avatar_doctor.jpg"
                                />
                                <div>
                                  <div
                                    className="font-bold line-clamp-2 !font-main"
                                    style={{
                                      fontSize: "0.9rem",
                                      lineHeight: "1.5rem",
                                    }}
                                  >
                                    {userData.data.firstName}{" "}
                                    {userData.data.lastName}
                                  </div>
                                  <p
                                    className="font-extralight text-xs !font-main rtl:text-right ltr:text-left"
                                    style={{ unicodeBidi: "plaintext" }}
                                  >
                                    {userData.data.phoneNumber}
                                  </p>
                                </div>
                              </a>
                              <Link
                                className="px-4 py-2 h-12  w-full flex-row items-center rounded-te-xl rounded-ts-xl focus:text-primary hover:text-primary hover:font-extrabold"
                                to="/"
                              >
                                Accueil
                              </Link>
                              <Link
                                className=" lg:flex px-4 py-2 h-12  w-full flex-row items-center rounded-te-xl rounded-ts-xl focus:text-primary hover:text-primary hover:font-extrabold"
                                to="/Profil"
                              >
                                Voir mon profil
                              </Link>

                              <Link
                                className=" lg:flex px-4 py-2 h-12  w-full flex-row items-center rounded-te-xl rounded-ts-xl focus:text-primary hover:text-primary hover:font-extrabold"
                                to="/Rendezvous"
                              >
                                Rendez-vous
                              </Link>
                              <Link
                                className=" lg:flex px-4 py-2 h-12  w-full flex-row items-center rounded-te-xl rounded-ts-xl focus:text-primary hover:text-primary hover:font-extrabold"
                                to="/Dossiers"
                              >
                                Dossiers médicaux
                              </Link>
                              <Link
                                className=" lg:flex px-4 py-2 h-12  w-full flex-row items-center rounded-te-xl rounded-ts-xl focus:text-primary hover:text-primary hover:font-extrabold"
                                to="/Parametres"
                              >
                                Paramètres
                              </Link>
                              <div className="w-full bg-primary-ice px-3 my-2 h-px"></div>
                              <button className="w-full" onClick={disconnect}>
                                <div className="px-4 py-2 h-12  w-full flex flex-row items-center rounded-te-xl rounded-ts-xl focus:text-primary hover:text-primary hover:font-extrabold">
                                  Déconnecter
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      ) : (
        // <header className="fixed h-20 left-0 w-full opacity-100 bg-white top-0 z-[300]">
        <header className={props.brand}>
          <div className="w-full h-full py-3 grid grid-cols-header-small md:grid-cols-header-medium lg:grid-cols-header-large md:gap-12 items-center justify-between px-3 md:px-5 lg:px-9 shadow-sh-112-8">
            <Link
              className="ps-3 lg:w-52 !h-[56px] !w-[124px] flex items-center justify-start"
              to="/"
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
                  href="/#benefits"
                  className=" font-normal text-center align-middle text-sm text-[#2b2a35] opacity-80 sm:text-xs lg:text-sm xl:text-base hover:text-primary cursor"
                >
                  Pourquoi RDVanytime
                </a>
                <a
                  href="/#Marche"
                  className=" font-normal text-center align-middle text-sm text-[#2b2a35] opacity-80 sm:text-xs lg:text-sm xl:text-base hover:text-primary cursor"
                >
                  Comment ça marche ?
                </a>
                <Link
                  className="font-normal text-sm text-[#2b2a35] opacity-80 sm:text-xs lg:text-sm xl:text-base hover:text-primary"
                  to="/Apropos"
                >
                  À propos
                </Link>
                <Link
                  className="font-normal text-sm text-[#2b2a35] opacity-80 sm:text-xs lg:text-sm xl:text-base hover:text-primary"
                  to="/contact"
                >
                  Contact
                </Link>
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
                    to="/modepro"
                  >
                    Passer en mode pro
                  </Link>
                  <Link
                    className="text-sm xl:text-base font-semibold rounded-3xl px-8 py-3 bg-primary hover:bg-primary-bold text-center text-white align-middle"
                    to="/Signin"
                  >
                    Se connecter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};
export default Head