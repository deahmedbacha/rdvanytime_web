import { Head } from "../../Components/Head";
import { useState } from "react";
import "./Parametres.css";
import Informations from "./Informations";
import { Footer } from "../../Components/Footer/Footer.jsx";

export const Parametres = () => {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: true,
    checkbox2: true,
    checkbox3: true,
    checkbox4: true,
  });
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };


  return (
    <>
      <Head brand="fixed h-20 end-0 w-full opacity-100 bg-white top-0 z-[49]" />
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
              <div
                className="relative w-full bg-white shadow-sh-112-8 p-11 me-5 mb-3 rounded flex flex-1 first:mt-6 last:mb-10"
                style={{ borderRadius: "1.5rem" }}
              >
                <div className="w-full flex flex-col relative">
                  <div className="grid grid-flow-col auto-cols-max items-center gap-4 mb-6">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0",
                        margin: "0",
                        padding: "0",
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: "1",
                          border: "0",
                          margin: "0",
                          padding: "0",
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: "1",
                            border: "0",
                            margin: "0",
                            padding: "0",
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                        />
                      </span>
                      <img
                        src="src/assets/image_Profil/notifications.svg"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          bottom: "0",
                          right: "0",
                          boxSizing: "border-box",
                          padding: "0",
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: "0",
                          height: "0",
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    </span>
                    <div className="font-medium text-gray-600 text-lg flex flex-row items-center select-none">
                      Notifications
                    </div>
                  </div>
                  <div className="w-full flex flex-col mx-auto flex-1">
                    <htmlForm
                      className="w-full max-w-xl mx-auto flex flex-col"
                      name="notification-settings-htmlForm"
                      id="notification-settings-htmlForm"
                    >
                      <div className="w-full max-w-xl mx-auto flex flex-col">
                        <div className="baseprofile_notif_settings__1gYD2">
                          <div className="grid grid-flow-col auto-cols-max items-center justify-between px-4 py-3 w-full baseprofile_notif_settings_item__BWhGJ">
                            <div>
                              <div className="font-medium text-base">
                                Prochains rendez-vous
                              </div>
                              <div className="font-normal text-xs text-gray-500 hidden sm:flex">
                                M’informer des prochains rendez-vous{" "}
                              </div>
                            </div>
                            <div className="">
                              <input
                                type="checkbox"
                                id=""
                                name="checkbox1"
                                className="htmlForm-checkbox cursor-pointer text-primary h-6 w-6 rounded focus:ring-primary"
                                checked={checkboxes.checkbox1}
                                onChange={handleCheckboxChange}
                              />
                            </div>
                          </div>
                          <div className="grid grid-flow-col auto-cols-max items-center justify-between px-4 py-3 w-full baseprofile_notif_settings_item__BWhGJ">
                            <div>
                              <div className="font-medium text-base">
                                Rendez-vous annulé
                              </div>
                              <div className="font-normal text-xs text-gray-500 hidden sm:flex">
                                M’avertir lorsque le praticien annule mon
                                rendez-vous
                              </div>
                            </div>
                            <div className="">
                              <input
                                type="checkbox"
                                id=""
                                name="checkbox2"
                                className="htmlForm-checkbox cursor-pointer text-primary h-6 w-6 rounded focus:ring-primary"
                                checked={checkboxes.checkbox2}
                                onChange={handleCheckboxChange}
                              />
                            </div>
                          </div>
                          <div className="grid grid-flow-col auto-cols-max items-center justify-between px-4 py-3 w-full baseprofile_notif_settings_item__BWhGJ">
                            <div>
                              <div className="font-medium text-base">
                                Nouveautés RDVanytime
                              </div>
                              <div className="font-normal text-xs text-gray-500 hidden sm:flex">
                                Me tenir au courant de toutes les nouveautés
                              </div>
                            </div>
                            <div className="">
                              <input
                                type="checkbox"
                                id=""
                                name="checkbox3"
                                className="htmlForm-checkbox cursor-pointer text-primary h-6 w-6 rounded focus:ring-primary"
                                checked={checkboxes.checkbox3}
                                onChange={handleCheckboxChange}
                              />
                            </div>
                          </div>
                          <div className="grid grid-flow-col auto-cols-max items-center justify-between px-4 py-3 w-full baseprofile_notif_settings_item__BWhGJ">
                            <div>
                              <div className="font-medium text-base">
                                Mise à jour
                              </div>
                              <div className="font-normal text-xs text-gray-500 hidden sm:flex">
                                Me signaler dès qu’une nouvelle mise à jour est
                                disponible
                              </div>
                            </div>
                            <div className="">
                              <input
                                type="checkbox"
                                id=""
                                name="checkbox4"
                                className="htmlForm-checkbox cursor-pointer text-primary h-6 w-6 rounded focus:ring-primary"
                                checked={checkboxes.checkbox4}
                                onChange={handleCheckboxChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-max self-center sm:self-end">
                        <button
                          style={{ backgroundColor: "#012bb4" }}
                          type="submit"
                          className="rounded-full bg-primary hover:bg-primary-bold h-12 text-center text-white font-bold flex items-center justify-center px-8 mt-4 text-base sm:text-base lg:text-base disabled:bg-gray-100 disabled:border disabled:text-black disabled:select-none disabled:pointer-events-none min-w-[100px] py-3"
                        >
                          <div className="me-2">Enregistrer</div>
                          <svg
                            className="fill-current text-white rtl:transhtmlForm rtl:rotate-180"
                            width="1.4em"
                            height="1.4em"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"></path>
                          </svg>
                        </button>
                      </div>
                    </htmlForm>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
      <Footer />
    </>
  );
};
export default Parametres;
