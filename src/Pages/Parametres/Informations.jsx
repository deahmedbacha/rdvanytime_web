
export const Informations = () => {
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
            <div className="font-medium text-gray-600 text-lg flex flex-row items-center select-none">
              Informations générales
            </div>
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
                            htmlFor="male"
                            className="inline-flex items-center"
                          >
                            <input
                              type="radio"
                              id="gender"
                              className="htmlForm-radio cursor-pointer text-primary focus:ring-primary"
                              name="gender"
                              value="Homme"
                            />
                            <span className="ms-2 text-base">Homme</span>
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
                            <span className="ms-2 text-base">Femme</span>
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
                  <div className="flex w-full flex-col lg:grid grid-rows-2 gap-2">
                    <div
                      className="flex flex-col lg:grid grid-cols-2 gap-2 lg:gap-4"
                      style={{ display: "grid" }}
                    >
                      <div style={{ width: "150%" }}>
                        <div className="rounded-full px-5 py-1 bg-p-night w-full flex flex-row gap-2 flex-nowrap items-center">
                          <div
                            className="rounded-full w-full text-base bg-transparent shadow-none focus:bg-transparent react-tel-input"
                            style={{
                              boxShadow: "none !important",
                              direction: "ltr",
                            }}
                          >
                            <input
                              type="text"
                              className="outline-none h-12 border-none w-full bg-transparent px-0 z-10 relative !font-main htmlForm-control"
                              style={{
                                unicodeBidi: "plaintext",
                                direction: "ltr",
                                backgroundColor: "transparent",
                              }}
                              placeholder="Rue*"
                            />
                          </div>
                        </div>
                      </div>
                      <div style={{ width: "100%", paddingLeft: "50%" }}>
                        <div className="rounded-full px-5 py-1 bg-p-night w-full flex flex-row gap-2 flex-nowrap items-center">
                          <input
                            type="text"
                            placeholder="N°"
                            className="text-base font-normal h-12 bg-p-night outline-none border-none w-full !font-main shadow-none focus:ring-transparent"
                            style={{
                              boxShadow: "none !important",
                              backgroundColor: "transparent",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full flex-col lg:grid grid-rows-2 gap-2">
                    <div
                      className="flex flex-col lg:grid grid-cols-2 gap-2 lg:gap-4"
                      style={{ display: "grid" }}
                    >
                      <div style={{ width: "100%" }}>
                        <div className="rounded-full px-5 py-1 bg-p-night w-full flex flex-row gap-2 flex-nowrap items-center">
                          <div
                            className="rounded-full w-full text-base bg-transparent shadow-none focus:bg-transparent react-tel-input"
                            style={{
                              boxShadow: "none !important",
                              direction: "ltr",
                            }}
                          >
                            <input
                              type="text"
                              className="outline-none h-12 border-none w-full bg-transparent px-0 z-10 relative !font-main htmlForm-control"
                              style={{
                                unicodeBidi: "plaintext",
                                direction: "ltr",
                                backgroundColor: "transparent",
                              }}
                              placeholder="Code postal*"
                            />
                          </div>
                        </div>
                      </div>
                      <div style={{ width: "100%"}}>
                        <div className="rounded-full px-5 py-1 bg-p-night w-full flex flex-row gap-2 flex-nowrap items-center">
                          <input
                            type="text"
                            placeholder="Ville*"
                            className="text-base font-normal h-12 bg-p-night outline-none border-none w-full !font-main shadow-none focus:ring-transparent"
                            style={{
                              boxShadow: "none !important",
                              backgroundColor: "transparent",
                            }}
                          />
                        </div>
                      </div>
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
    </>
  );
};
export default Informations;
