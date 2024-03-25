import { useState } from "react";
import Relationn from "Components/showDiv/Relationn";

export const Proches = () => {
  const [AjouterProche, setShowAjouterProche] = useState(false);
  const AjouterProcheClick = () => {
    setShowAjouterProche(true);
  };

  const DisableProcheClick = () => {
    setShowAjouterProche(false);
  };
  return (
    <>
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
                src="src/assets/image_Profil/family-member.svg"
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
              Mes proches
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
                    Aucun proches
                  </div>
                </div>
              </div>
              <div className="font-normal text-xs text-gray-500 text-center mt-9">
                Ajoutez vos proches à votre compte et gérez leurs rendez-vous en
                toute simplicité.
              </div>
            </div>
            <div className="w-max self-center " style={{ paddingTop: "1.5%" }}>
              <button
                onClick={AjouterProcheClick}
                style={{ backgroundColor: "#012bb4" }}
                type="submit"
                className="rounded-full bg-primary hover:bg-primary-bold h-12 text-center text-white font-bold flex items-center justify-center px-8 mt-4 text-base sm:text-base lg:text-base disabled:bg-gray-100 disabled:border disabled:text-black disabled:select-none disabled:pointer-events-none min-w-[100px] py-3"
              >
                <div className="me-2">Ajouter un proche</div>
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
          </div>
        </div>
      </div>
      {AjouterProche && (
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
                }}
                role="dialog"
                aria-modal="true"
                data-testid="modal"
                tabIndex="-1"
              >
                <div className="w-full flex flex-col relative">
                  <div
                    className="grid grid-flow-col auto-cols-max items-center gap-4 mb-6"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div style={{ display: "flex" }}>
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
                          src="src/assets/image_Profil/edit-profile.svg"
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

                      <div
                        className="font-medium text-gray-600 text-lg flex flex-row items-center select-none"
                        style={{ marginLeft: "13px" }}
                      >
                        Informations générales
                      </div>
                    </div>
                    <button
                      className="rounded-full bg-p-cover w-6 h-6 flex items-center justify-center"
                      onClick={DisableProcheClick}
                    >
                      <svg width="1em" height="1em" viewBox="0 0 36 36">
                        <path
                          className="clr-i-outline clr-i-outline-path-1"
                          d="M19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="w-full flex flex-col mx-auto flex-1">
                    <form
                      className="w-full flex flex-col max-w-3xl mx-auto"
                      name="profile-inhtmlFormation-htmlForm"
                      id="profile-inhtmlFormation-htmlForm"
                    >
                      <div
                        className="flex flex-col lg:grid gap-4 mb-5 grid-cols-[96px,1fr]"
                        style={{ display: "grid" }}
                      >
                        <div className="flex flex-col items-center justify-center w-full mb-4 md:mb-0">
                          <img
                            loading="lazy"
                            className="rounded-full w-24 h-24 border-2 border-primary border-solid object-cover"
                            width="96"
                            height="96"
                            src="src/assets/avatar_doctor.jpg"
                          />
                        </div>
                        <div className="grid grid-rows-2 gap-2">
                          <div
                            className="flex flex-col sm:grid grid-cols-2 gap-4"
                            style={{ display: "grid" }}
                          >
                            <div className="w-full">
                              <div className="rounded-full px-5 py-1 bg-p-night w-full">
                                <input
                                  type="text"
                                  placeholder="Nom de famille"
                                  className="text-base font-normal h-12 bg-p-night outline-none border-none w-full shadow-none focus:ring-transparent"
                                  style={{
                                    boxShadow: "none !important",
                                    backgroundColor: "transparent",
                                  }}
                                  name="Nom de famille"
                                />
                              </div>
                            </div>
                            <div className="w-full">
                              <div className="rounded-full px-5 py-1 bg-p-night w-full">
                                <input
                                  type="text"
                                  placeholder="Prénom"
                                  className="text-base font-normal h-12 bg-p-night outline-none border-none w-full shadow-none focus:ring-transparent"
                                  style={{
                                    boxShadow: "none !important",
                                    backgroundColor: "transparent",
                                  }}
                                  name="Prénom"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="flex flex-col sm:grid grid-cols-2 gap-4"
                            style={{ display: "grid" }}
                          >
                            <div className="w-full">
                              <div className="rounded-full px-5 py-1 bg-p-night w-full flex flex-row gap-2 flex-nowrap items-center">
                                <input
                                  type="date"
                                  placeholder="Date de naissance"
                                  className="text-base font-normal h-12 bg-p-night outline-none border-none w-full !font-main shadow-none focus:ring-transparent"
                                  style={{
                                    boxShadow: "none !important",
                                    backgroundColor: "transparent",
                                  }}
                                  name="Date de naissance"
                                  value="Invalid date"
                                />
                              </div>
                            </div>
                            <div className="w-full mt-4 sm:mt-0">
                              <div className="w-full h-full grid grid-flow-col auto-cols-auto gap-6 items-center justify-center">
                                <div className="w-full">
                                  <label
                                    htmlFor="Homme"
                                    className="inline-flex items-center"
                                  >
                                    <input
                                      type="radio"
                                      id="gender"
                                      className="htmlForm-radio cursor-pointer text-primary focus:ring-primary"
                                      name="gender"
                                      value="Homme"
                                    />
                                    <span className="ms-2 text-base">
                                      Homme
                                    </span>
                                  </label>
                                </div>
                                <div>
                                  <label
                                    htmlFor="Femme"
                                    className="inline-flex items-center"
                                  >
                                    <input
                                      type="radio"
                                      id="gender"
                                      className="htmlForm-radio cursor-pointer text-primary focus:ring-primary"
                                      name="gender"
                                      value="Femme"
                                    />
                                    <span className="ms-2 text-base">
                                      Femme
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex flex-col sm:grid gap-4 mb-5 grid-cols-[96px,1fr]"
                        style={{ display: "grid" }}
                      >
                        <div
                          className="hidden sm:grid grid-rows-2 items-center lg:items-center gap-4"
                          style={{ display: "flex" }}
                        >
                          <div className="grid grid-flow-col auto-cols-max gap-2 items-center">
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
                                src="src/assets/image_Profil/contact.svg"
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
                            <div className="font-normal text-sm">Contact</div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col lg:grid grid-rows-2 gap-2">
                          <div
                            className="flex flex-col lg:grid grid-cols-2 gap-2 lg:gap-4"
                            style={{ display: "grid" }}
                          >
                            <div className="w-full">
                              <div className="rounded-full px-5 py-1 bg-p-night w-full flex flex-row gap-2 flex-nowrap items-center">
                                <div
                                  className="rounded-full w-full text-base bg-transparent shadow-none focus:bg-transparent react-tel-input"
                                  style={{
                                    boxShadow: "none !important",
                                    direction: "ltr",
                                  }}
                                >
                                  <input
                                    type="tel"
                                    className="outline-none h-12 border-none w-full bg-transparent px-0 z-10 relative !font-main htmlForm-control"
                                    style={{
                                      unicodeBidi: "plaintext",
                                      direction: "ltr",
                                      backgroundColor: "transparent",
                                    }}
                                    placeholder="Téléphone"
                                  />
                                  <div className="flag-dropdown">
                                    <div
                                      className="selected-flag"
                                      title="Algeria: + 213"
                                      tabIndex="-1"
                                      role="button"
                                      aria-haspopup="listbox"
                                    >
                                      <div className="flag dz"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="w-full">
                              <div className="rounded-full px-5 py-1 bg-p-night w-full flex flex-row gap-2 flex-nowrap items-center">
                                <input
                                  type="email"
                                  placeholder="Email"
                                  className="text-base font-normal h-12 bg-p-night outline-none border-none w-full !font-main shadow-none focus:ring-transparent"
                                  style={{
                                    boxShadow: "none !important",
                                    backgroundColor: "transparent",
                                  }}
                                  name="email"
                                  value=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex flex-col lg:grid gap-4 mb-5 grid-cols-[96px,1fr]"
                        style={{ display: "grid" }}
                      >
                        <div
                          className="hidden sm:grid grid-rows-2 items-center lg:items-center gap-4"
                          style={{ display: "grid", marginBottom: "75%" }}
                        >
                          <div className="grid grid-flow-col auto-cols-max gap-2 items-center">
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
                                src="src/assets/image_Profil/pin.svg"
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
                            <div className="font-normal text-sm">Adresse</div>
                          </div>
                        </div>
                        <div className="grid grid-rows-2 gap-2">
                          <div
                            className="flex flex-col sm:grid grid-cols-2 gap-4"
                            style={{ display: "ruby" }}
                          >
                            <div
                              className="rounded-full px-5 py-1 bg-p-night "
                              style={{ width: "79%", marginRight: "1.5%" }}
                            >
                              <input
                                type="text"
                                placeholder="Rue*"
                                className="text-base font-normal h-12 bg-p-night outline-none border-none w-full shadow-none focus:ring-transparent"
                                style={{
                                  boxShadow: "none !important",
                                  backgroundColor: "transparent",
                                }}
                                name="Rue"
                              />
                            </div>
                            <div
                              className="rounded-full px-5 py-1 bg-p-night "
                              style={{ width: "20%" }}
                            >
                              <input
                                type="text"
                                placeholder="N°"
                                className="text-base font-normal h-12 bg-p-night outline-none border-none w-full shadow-none focus:ring-transparent"
                                style={{
                                  boxShadow: "none !important",
                                  backgroundColor: "transparent",
                                }}
                                name="N"
                              />
                            </div>
                          </div>
                          <div
                            className="flex flex-col sm:grid grid-cols-2 gap-4"
                            style={{ display: "ruby" }}
                          >
                            <div
                              className="rounded-full px-5 py-1 bg-p-night "
                              style={{ width: "25%", marginRight: "1.5%" }}
                            >
                              <input
                                type="text"
                                placeholder="code postal*"
                                className="text-base font-normal h-12 bg-p-night outline-none border-none w-full shadow-none focus:ring-transparent"
                                style={{
                                  boxShadow: "none !important",
                                  backgroundColor: "transparent",
                                }}
                                name="code postal"
                              />
                            </div>
                            <div
                              className="rounded-full px-5 py-1 bg-p-night "
                              style={{ width: "74%" }}
                            >
                              <input
                                type="text"
                                placeholder="Ville*"
                                className="text-base font-normal h-12 bg-p-night outline-none border-none w-full shadow-none focus:ring-transparent"
                                style={{
                                  boxShadow: "none !important",
                                  backgroundColor: "transparent",
                                }}
                                name="Ville"
                              />
                            </div>
                          </div>
                          <div
                            className="flex flex-col sm:grid grid-cols-2 gap-4"
                            style={{ display: "flex" }}
                          >
                            <div className="w-full">
                              <div className="rounded-full px-5 py-1 bg-p-night w-full">
                                <input
                                  type="text"
                                  placeholder="Pays*"
                                  className="text-base font-normal h-12 bg-p-night outline-none border-none w-full shadow-none focus:ring-transparent"
                                  style={{
                                    boxShadow: "none !important",
                                    backgroundColor: "transparent",
                                  }}
                                  name="Pays"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex flex-col sm:grid gap-4 mb-5 grid-cols-[96px,1fr]"
                        style={{ display: "grid" }}
                      >
                        <div
                          className="hidden sm:grid grid-rows-2 items-center lg:items-center gap-4"
                          style={{ display: "flex" }}
                        >
                          <div className="grid grid-flow-col auto-cols-max gap-2 items-center">
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
                                src="src/assets/image_Profil/family-member.svg"
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
                            <div className="font-normal text-sm">Relation</div>
                          </div>
                        </div>
                        <div
                          className="flex flex-col sm:grid grid-cols-2 gap-4"
                          style={{ display: "flex" }}
                        >
                          <div
                            className="rounded-full px-5 py-1 bg-p-night "
                            style={{ display: "flex" }}
                          >
                            <Relationn></Relationn>
                            <div className="bee__indicators css-1wy0on6">
                              <span className="bee__indicator-separator css-1okebmr-indicatorSeparator"></span>
                              <div
                                className="bee__indicator bee__dropdown-indicator css-tlfecz-indicatorContainer"
                                aria-hidden="true"
                              >
                                <svg
                                  height="20"
                                  width="20"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                  focusable="false"
                                  className="css-8mmkcg"
                                >
                                  <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                </svg>
                              </div>
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
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Proches;
