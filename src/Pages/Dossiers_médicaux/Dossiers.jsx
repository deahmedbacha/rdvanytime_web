import { Headconect } from "../../Components/Headconect";
import { useState } from "react";
import { Footer } from "../../Components/Footer/Footer.jsx";

export const Profil = () => {

  const [AjouterChronique, setShowAjouterChronique] = useState(false);
  const AjouterChroniqueClick = () => {
    setShowAjouterChronique(true);
  };
  const DisableProcheClick = () => {
    setShowAjouterChronique(false);
  };
 
  return (
    <>
      <body>
        <Headconect></Headconect>
        <main
          className=" grid-cols-profile-area mt-20 bg-p-cover overflow-hidden "
          style={{ display: "flex" }}
        >
          <div
            className="w-screen lg:w-full flex flex-col py-1 relative overflow-scroll scrollbar-none"
            style={{ marginLeft: "14%", width: "70%" }}
          >
            <div>
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
                        src="src/assets/image_Profil/medical-profile.svg"
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
                      Dossiers Médicaux
                    </div>
                  </div>
                  <div className="w-full flex flex-col mx-auto flex-1">
                    <div className="w-full max-w-xl mx-auto">
                      <div className="max-w-xl mx-auto">
                        <div className="flex flex-col items-center justify-center">
                          <svg width="2em" height="2em" viewBox="0 0 40 40">
                            <path
                              fill="currentColor"
                              d="M36.611 34.313H3.389c-2.084 0-2.867-1.762-2.989-2.692l-.004-11.79a.52.52 0 0 1 .034-.182L5.093 7.661a3.132 3.132 0 0 1 3.02-1.974h23.758a3.15 3.15 0 0 1 3.043 1.992l4.655 11.97a.52.52 0 0 1 .034.182v11.725c-.125.996-.907 2.757-2.992 2.757zM1.396 19.925v11.631c.021.119.301 1.758 1.993 1.758h33.222c1.738 0 1.986-1.748 1.996-1.822l-.004-11.566l-4.628-11.9c-.025-.069-.502-1.337-2.087-1.337H8.131c-1.629 0-2.094 1.304-2.099 1.317L1.396 19.925z"
                            ></path>
                            <path
                              fill="currentColor"
                              d="M27.166 22.618h-14.33a.502.502 0 0 1-.497-.553c.122-1.151-.032-2.005-.449-2.468c-.412-.458-1.044-.423-1.101-.419l-5.573.005a.5.5 0 0 1-.464-.683l3.489-8.814a.5.5 0 0 1 .465-.316h22.588a.5.5 0 0 1 .465.316l3.441 8.695a.5.5 0 0 1-.398.803H29.278c-.077-.006-.115-.009-.171-.009c-.231 0-.666.055-.997.423c-.416.464-.571 1.316-.448 2.468a.496.496 0 0 1-.496.552zm-13.792-1h13.253c-.048-1.186.2-2.089.739-2.688c.815-.906 1.984-.74 1.983-.741l4.697-.004l-3.093-7.815H9.046l-3.093 7.815h4.749c.015-.003.09-.009.192-.009c.397 0 1.149.098 1.74.754c.539.599.788 1.502.74 2.688z"
                            ></path>
                          </svg>
                          <div className="font-medium text-xs text-center text-gray-500 mt-2">
                            Votre dossier médical est vide
                          </div>
                        </div>
                      </div>
                      <div className="font-normal text-xs text-gray-500 text-center mt-9">
                        L&apos;ajout de documents aidera vos médecins à fournir
                        un diagnostic plus détaillé.
                      </div>
                    </div>
                    <div
                      className="w-max self-center"
                      style={{ paddingTop: "1.5%" }}
                    >
                      <button
                        onClick={AjouterChroniqueClick}
                        style={{ backgroundColor: "#012bb4" }}
                        type="submit"
                        className="rounded-full bg-primary hover:bg-primary-bold h-12 text-center text-white font-bold flex items-center justify-center px-8 mt-4 text-base sm:text-base lg:text-base disabled:bg-gray-100 disabled:border disabled:text-black disabled:select-none disabled:pointer-events-none min-w-[100px] py-3"
                      >
                        <div className="me-2">Ajouter des fichiers</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {AjouterChronique && (
          <div>
            <div className="react-responsive-modal-root" data-testid="root">
              <div
                className="react-responsive-modal-overlay"
                data-testid="overlay"
                aria-hidden="true"
                style={{
                  animation:
                    "300ms ease 0s 1 normal none running react-responsive-modal-overlay-in",
                }}
              ></div>
              <div
                className="react-responsive-modal-container react-responsive-modal-containerCenter"
                data-testid="modal-container"
              >
                <div
                  className="react-responsive-modal-modal"
                  style={{
                    animation:
                      "300ms ease 0s 1 normal none running react-responsive-modal-overlay-in",
                    display: "flex",
                    marginLeft: "37%",
                    marginRight: "37%",
                    marginTop: "19%",
                    padding: "0",
                  }}
                  role="dialog"
                  aria-modal="true"
                  data-testid="modal"
                  tabIndex="-1"
                >
                  {/** */}

                  <div className="rounded-full w-full mx-auto bg-white  mb-6 ">
                    <div className="grid grid-rows-2 gap-2">
                      <div
                        className="w-full   text-center  bg-primary  text-white font-bold"
                        style={{ padding: "2rem" }}
                      >
                        Ajouter un document
                      </div>

                      <div className="w-full">
                        <div style={{ padding: "3%", display: "ruby-base" }}>
                          <label
                            htmlFor="inputTag"
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              src="src/assets/image_maladier/ajouter-une-photo.png"
                              style={{ marginRight: "3%", marginBottom: "4px" }}
                              width="25px"
                              height="25px"
                            />
                            Joindre une photo
                            <input id="inputTag" type="file" />
                          </label>
                        </div>
                        <div style={{ padding: "3%", display: "ruby-base" }}>
                          <label
                            htmlFor="inputTag"
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              src="src/assets/image_maladier/ajouter.png"
                              style={{ marginRight: "3%", marginBottom: "4px" }}
                              width="25px"
                              height="25px"
                            />
                            Joindre une fichier PDF
                            <input id="inputTag" type="file" />
                          </label>
                        </div>
                      </div>

                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <button
                          onClick={DisableProcheClick}
                          style={{ backgroundColor: "#012bb4" }}
                          type="submit"
                          className="rounded-full bg-primary hover:bg-primary-bold h-12 text-center text-white font-bold flex items-center justify-center px-8 mt-4 text-base sm:text-base lg:text-base disabled:bg-gray-100 disabled:border disabled:text-black disabled:select-none disabled:pointer-events-none min-w-[100px] py-3"
                        >
                          <div className="me-2">Annuler</div>
                        </button>
                        <div
                          className="h-full bg-gray-200 py-5 mx-2 w-px"
                          style={{ marginTop: "2.8%" }}
                        ></div>
                        <button
                          style={{ backgroundColor: "#012bb4" }}
                          type="submit"
                          className="rounded-full bg-primary hover:bg-primary-bold h-12 text-center text-white font-bold flex items-center justify-center px-8 mt-4 text-base sm:text-base lg:text-base disabled:bg-gray-100 disabled:border disabled:text-black disabled:select-none disabled:pointer-events-none min-w-[100px] py-3"
                        >
                          <div className="me-2">Ajouter</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </body>
      < Footer/>
    </>
  );
};
export default Profil;
