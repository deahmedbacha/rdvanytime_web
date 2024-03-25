import { Headconect } from "../../Components/Headconect";
import Switch from "./Switch.jsx";
import Groupage from "./Groupage.jsx";
import { useState } from "react";

export const Profil = () => {
  const [showNextContent, setShowNextContent] = useState(1);
  const [current1, setCurrent1] = useState(
    "w-full text-sm 2xl:text-sm text-center rtl:first:rounded-tl-none rtl:first:rounded-bl-none rtl:last:rounded-tr-none rtl:last:rounded-br-none first:rounded-ts-full first:rounded-bs-full last:rounded-te-full last:rounded-be-full p-4 bg-primary hover:bg-primary-bold text-white font-bold"
  );
  const [current2, setCurrent2] = useState(
    "w-full text-sm 2xl:text-sm text-center rtl:first:rounded-tl-none rtl:first:rounded-bl-none rtl:last:rounded-tr-none rtl:last:rounded-br-none first:rounded-ts-full first:rounded-bs-full last:rounded-te-full last:rounded-be-full p-4 font-medium hover:bg-primary-bold text-gray-800"
  );
  const [current3, setCurrent3] = useState(
    "w-full text-sm 2xl:text-sm text-center rtl:first:rounded-tl-none rtl:first:rounded-bl-none rtl:last:rounded-tr-none rtl:last:rounded-br-none first:rounded-ts-full first:rounded-bs-full last:rounded-te-full last:rounded-be-full p-4 font-medium hover:bg-primary-bold text-gray-800"
  );
  const [current4, setCurrent4] = useState(
    "w-full text-sm 2xl:text-sm text-center rtl:first:rounded-tl-none rtl:first:rounded-bl-none rtl:last:rounded-tr-none rtl:last:rounded-br-none first:rounded-ts-full first:rounded-bs-full last:rounded-te-full last:rounded-be-full p-4 font-medium hover:bg-primary-bold text-gray-800"
  );
  const [current5, setCurrent5] = useState(
    "w-full text-sm 2xl:text-sm text-center rtl:first:rounded-tl-none rtl:first:rounded-bl-none rtl:last:rounded-tr-none rtl:last:rounded-br-none first:rounded-ts-full first:rounded-bs-full last:rounded-te-full last:rounded-be-full p-4 font-medium hover:bg-primary-bold text-gray-800"
  );

  const handleNextClick = (numeroPage) => {
    setShowNextContent(numeroPage);
    if (numeroPage === 2) {
      setCurrent2(
        "w-full text-sm 2xl:text-sm text-center rtl:first:rounded-tl-none rtl:first:rounded-bl-none rtl:last:rounded-tr-none rtl:last:rounded-br-none first:rounded-ts-full first:rounded-bs-full last:rounded-te-full last:rounded-be-full p-4 bg-primary hover:bg-primary-bold text-white font-bold"
      );
      setCurrent1("");
      setCurrent3("");
      setCurrent4("");
      setCurrent5("");
    }
    if (numeroPage === 1) {
      setCurrent1(
        "w-full text-sm 2xl:text-sm text-center rtl:first:rounded-tl-none rtl:first:rounded-bl-none rtl:last:rounded-tr-none rtl:last:rounded-br-none first:rounded-ts-full first:rounded-bs-full last:rounded-te-full last:rounded-be-full p-4 bg-primary hover:bg-primary-bold text-white font-bold"
      );
      setCurrent2("");
      setCurrent3("");
      setCurrent4("");
      setCurrent5("");
    }
    if (numeroPage === 3) {
      setCurrent3(
        "w-full text-sm 2xl:text-sm text-center rtl:first:rounded-tl-none rtl:first:rounded-bl-none rtl:last:rounded-tr-none rtl:last:rounded-br-none first:rounded-ts-full first:rounded-bs-full last:rounded-te-full last:rounded-be-full p-4 bg-primary hover:bg-primary-bold text-white font-bold"
      );
      setCurrent1("");
      setCurrent2("");
      setCurrent4("");
      setCurrent5("");
    }
    if (numeroPage === 4) {
      setCurrent4(
        "w-full text-sm 2xl:text-sm text-center rtl:first:rounded-tl-none rtl:first:rounded-bl-none rtl:last:rounded-tr-none rtl:last:rounded-br-none first:rounded-ts-full first:rounded-bs-full last:rounded-te-full last:rounded-be-full p-4 bg-primary hover:bg-primary-bold text-white font-bold"
      );
      setCurrent1("");
      setCurrent2("");
      setCurrent3("");
      setCurrent5("");
    }
    if (numeroPage === 5) {
      setCurrent5(
        "w-full text-sm 2xl:text-sm text-center rtl:first:rounded-tl-none rtl:first:rounded-bl-none rtl:last:rounded-tr-none rtl:last:rounded-br-none first:rounded-ts-full first:rounded-bs-full last:rounded-te-full last:rounded-be-full p-4 bg-primary hover:bg-primary-bold text-white font-bold"
      );
      setCurrent1("");
      setCurrent2("");
      setCurrent3("");
      setCurrent4("");
    }
  };
  const [AjouterChronique, setShowAjouterChronique] = useState(false);
  const AjouterChroniqueClick = () => {
    setShowAjouterChronique(true);
  };
  const DisableProcheClick = () => {
    setShowAjouterChronique(false);
  };
  const [AjouterChirugie, setShowAjouterChirugie] = useState(false);
  const AjouterChirugieClick = () => {
    setShowAjouterChirugie(true);
  };
  const DisableChirugieClick = () => {
    setShowAjouterChirugie(false);
  };

  const [AjouterAllergie, setShowAjouterAllergie] = useState(false);
  const AjouterAllergieClick = () => {
    setShowAjouterAllergie(true);
  };
  const DisableAllergieClick = () => {
    setShowAjouterAllergie(false);
  };
  const [AjouterMedicament, setShowAjouterMedicament] = useState(false);
  const AjouterMedicamentClick = () => {
    setShowAjouterMedicament(true);
  };
  const DisableMedicamentClick = () => {
    setShowAjouterMedicament(false);
  };



  return (
    <>
      <body>
        <Headconect></Headconect>
        <main
          className=" grid-cols-profile-area h-vh-header mt-20 bg-p-cover overflow-hidden "
          style={{ display: "flex" }}
        >
          <div
            className="w-screen lg:w-full flex flex-col py-1 relative overflow-scroll scrollbar-none"
            style={{ marginLeft: "14%", width: "70%" }}
          >
            <div className="mx-5 pt-1 flex flex-col flex-1">
              <div
                className="relative w-full bg-white shadow-sh-112-8 p-11 me-5 mb-3 rounded flex flex-1 first:mt-6 last:mb-10 h-full"
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
                      Informations générales
                    </div>
                  </div>
                  <div className="w-full flex flex-col mx-auto flex-1">
                    <div className="flex flex-1 w-full mx-auto">
                      <div className="w-full h-full max-w-5xl mx-auto">
                        <div className="rounded-full w-full mx-auto bg-white border border-solid border-p-night mb-6 box-border">
                          <div className="flex flex-row flex-nowrap justify-between w-full">
                            <button
                              onClick={() => handleNextClick(1)}
                              className={`w-full text-sm 2xl:text-sm text-center rtl:first:rounded-tl-none rtl:first:rounded-bl-none rtl:last:rounded-tr-none rtl:last:rounded-br-none first:rounded-ts-full first:rounded-bs-full last:rounded-te-full last:rounded-be-full p-4 font-medium hover:bg-primary-bold text-gray-800${current1}`}
                            >
                              Infos personnelles
                            </button>
                            <button
                              onClick={() => handleNextClick(2)}
                              className={`w-full text-sm 2xl:text-sm text-center rtl:first:rounded-tl-none rtl:first:rounded-bl-none rtl:last:rounded-tr-none rtl:last:rounded-br-none first:rounded-ts-full first:rounded-bs-full last:rounded-te-full last:rounded-be-full p-4 font-medium hover:bg-primary-bold text-gray-800${current2}`}
                            >
                              Maladies chroniques
                            </button>
                            <button
                              onClick={() => handleNextClick(3)}
                              className={`w-full text-sm 2xl:text-sm text-center rtl:first:rounded-tl-none rtl:first:rounded-bl-none rtl:last:rounded-tr-none rtl:last:rounded-br-none first:rounded-ts-full first:rounded-bs-full last:rounded-te-full last:rounded-be-full p-4 font-medium hover:bg-primary-bold text-gray-800${current3}`}
                            >
                              Chirugies
                            </button>
                            <button
                              onClick={() => handleNextClick(4)}
                              className={`w-full text-sm 2xl:text-sm text-center rtl:first:rounded-tl-none rtl:first:rounded-bl-none rtl:last:rounded-tr-none rtl:last:rounded-br-none first:rounded-ts-full first:rounded-bs-full last:rounded-te-full last:rounded-be-full p-4 font-medium hover:bg-primary-bold text-gray-800${current4}`}
                            >
                              Allergies
                            </button>
                            <button
                              onClick={() => handleNextClick(5)}
                              className={`w-full text-sm 2xl:text-sm text-center rtl:first:rounded-tl-none rtl:first:rounded-bl-none rtl:last:rounded-tr-none rtl:last:rounded-br-none first:rounded-ts-full first:rounded-bs-full last:rounded-te-full last:rounded-be-full p-4 font-medium hover:bg-primary-bold text-gray-800${current5}`}
                            >
                              Médicaments
                            </button>
                          </div>
                        </div>
                        <div className="w-full">
                          {showNextContent === 1 && (
                            <div className="flex flex-1 flex-col items-center justify-center h-full">
                              <div className="max-w-xl mx-auto w-full">
                                <div className="flex flex-col items-center justify-center w-full">
                                  <div
                                    id="item-1"
                                    className="grid gap-5 w-full border-b border-solid items-center border-p-night py-4 pl-3"
                                    style={{ gridTemplateColumns: "1fr 120px" }}
                                  >
                                    <div
                                      className="grid gap-3 items-center"
                                      style={{
                                        gridTemplateColumns: "32px 1fr",
                                      }}
                                    >
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
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                          />
                                        </span>
                                        <img
                                          src="src/assets/image_Profil/height.svg"
                                          decoding="async"
                                          data-nimg="intrinsic"
                                          style={{
                                            position: "absolute",
                                            inset: "0px",
                                            boxSizing: "border-box",
                                            padding: "0",
                                            border: "medium",
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
                                      <div>Taille</div>
                                    </div>
                                    <div className="w-full">
                                      <div className="rounded-full px-4 py-2 bg-p-cover flex flex-row flex-nowrap items-center w-full">
                                        <input
                                          className="w-full border-none bg-p-cover rounded-full p-0 text-sm text-center text-gray-400 select-none"
                                          style={{
                                            outline: "none",
                                            boxShadow: "none",
                                          }}
                                          placeholder="-"
                                        />
                                        <div className="ml-1 font-bold text-sm text-gray-400">
                                          cm
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    id="item-2"
                                    className="grid items-center gap-5 w-full border-b border-solid border-p-night py-4 pl-3"
                                    style={{ gridTemplateColumns: "1fr 120px" }}
                                  >
                                    <div
                                      className="grid gap-3 items-center"
                                      style={{
                                        gridTemplateColumns: "32px 1fr",
                                      }}
                                    >
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
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                          />
                                        </span>
                                        <img
                                          src="src/assets/image_Profil/weight.svg"
                                          decoding="async"
                                          data-nimg="intrinsic"
                                          style={{
                                            position: "absolute",
                                            inset: "0px",
                                            boxSizing: "border-box",
                                            padding: "0",
                                            border: "medium",
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
                                      <div>Poids</div>
                                    </div>
                                    <div className="w-full">
                                      <div className="rounded-full px-4 py-2 bg-p-cover flex flex-row flex-nowrap items-center w-full">
                                        <input
                                          className="w-full border-none bg-p-cover rounded-full p-0 text-sm text-center text-gray-400 select-none"
                                          style={{
                                            outline: "none",
                                            boxShadow: "none",
                                          }}
                                          placeholder="-"
                                        />
                                        <div className="ml-1 font-bold text-sm text-gray-400">
                                          kg
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    id="item-3"
                                    className="grid items-center gap-5 w-full border-b border-solid border-p-night py-4 pl-3"
                                    style={{ gridTemplateColumns: "1fr 120px" }}
                                  >
                                    <div
                                      className="grid items-center gap-3"
                                      style={{
                                        gridTemplateColumns: "32px 1fr",
                                      }}
                                    >
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
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                          />
                                        </span>
                                        <img
                                          src="src/assets/image_Profil/blood-type.svg"
                                          decoding="async"
                                          data-nimg="intrinsic"
                                          style={{
                                            position: "absolute",
                                            inset: "0px",
                                            boxSizing: "border-box",
                                            padding: "0",
                                            border: "medium",
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
                                      <div>Groupe sanguin</div>
                                    </div>
                                    <div className="w-full">
                                      <div className="rounded-full  bg-p-cover ">
                                        <Groupage></Groupage>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    id="item-4"
                                    className="grid gap-5 items-center w-full border-b border-solid border-p-night py-4 pl-3"
                                    style={{ gridTemplateColumns: "1fr 120px" }}
                                  >
                                    <div
                                      className="grid items-center gap-3"
                                      style={{
                                        gridTemplateColumns: "32px 1fr",
                                      }}
                                    >
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
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                          />
                                        </span>
                                        <img
                                          src="src/assets/image_Profil/smoking.svg"
                                          decoding="async"
                                          data-nimg="intrinsic"
                                          style={{
                                            position: "absolute",
                                            inset: "0px",
                                            boxSizing: "border-box",
                                            padding: "0",
                                            border: "medium",
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
                                      <div>Fumeur</div>
                                    </div>
                                    <div className="w-full">
                                      <div className="relative rounded-full  flex flex-row flex-nowrap justify-center items-center w-full">
                                        <Switch></Switch>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    id="item-5"
                                    className="grid items-center gap-5 w-full border-b border-solid border-p-night py-4 pl-3"
                                    style={{ gridTemplateColumns: "1fr 120px" }}
                                  >
                                    <div
                                      className="grid items-center gap-3"
                                      style={{
                                        gridTemplateColumns: "32px 1fr",
                                      }}
                                    >
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
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                          />
                                        </span>
                                        <img
                                          src="src/assets/image_Profil/alcohol.svg"
                                          decoding="async"
                                          data-nimg="intrinsic"
                                          style={{
                                            position: "absolute",
                                            inset: "0px",
                                            boxSizing: "border-box",
                                            padding: "0",
                                            border: "medium",
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
                                      <div>Alcool</div>
                                    </div>
                                    <div className="w-full">
                                      <div className="relative rounded-full  flex flex-row flex-nowrap justify-center items-center w-full">
                                        <Switch></Switch>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    id="item-6"
                                    className="grid items-center gap-5 w-full py-4 pl-3"
                                    style={{ gridTemplateColumns: "1fr 120px" }}
                                  >
                                    <div
                                      className="grid items-center gap-3"
                                      style={{
                                        gridTemplateColumns: "32px 1fr",
                                      }}
                                    >
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
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                          />
                                        </span>
                                        <img
                                          src="src/assets/image_Profil/married.svg"
                                          decoding="async"
                                          data-nimg="intrinsic"
                                          style={{
                                            position: "absolute",
                                            inset: "0px",
                                            boxSizing: "border-box",
                                            padding: "0",
                                            border: "medium",
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
                                      <div>Marié(e)</div>
                                    </div>
                                    <div className="w-full">
                                      <div className="relative rounded-full  flex flex-row flex-nowrap justify-center items-center w-full">
                                        <Switch></Switch>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          {showNextContent === 2 && (
                            <div className="flex flex-1 flex-col items-center justify-center h-full">
                              <div className="flex flex-1 h-full flex-col items-center justify-center max-w-xl mx-auto w-full">
                                <div className="flex flex-col flex-nowrap items-center justify-center h-full w-full">
                                  <div className="mb-6">
                                    <img
                                      loading="lazy"
                                      alt="chronic-disease"
                                      src="src/assets/image_Profil/chronic.webp"
                                      width="189"
                                      height="181"
                                    />
                                  </div>
                                  <div className="font-bold text-base mb-4">
                                    Aucune Maladie chronique ?
                                  </div>
                                  <div className="font-normal text-center text-xs text-gray-500">
                                    Vous avez une maladie chronique, indiquez-la
                                    <br />
                                    afin de partager l&apos;information
                                    rapidement avec vos médecins
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
                                      <div className="me-2">
                                        Ajouter une maladie chronique
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          {showNextContent === 3 && (
                            <div className="flex flex-1 flex-col items-center justify-center h-full">
                              <div className="flex flex-1 h-full flex-col items-center justify-center max-w-xl mx-auto w-full">
                                <div className="flex flex-col flex-nowrap items-center justify-center h-full w-full">
                                  <div className="mb-6">
                                    <img
                                      loading="lazy"
                                      alt="surgeries"
                                      src="src/assets/image_Profil/surgeries.webp"
                                      width="189"
                                      height="181"
                                    />
                                  </div>
                                  <div className="font-bold text-base  mb-4">
                                    Aucune Chirugie
                                  </div>
                                  <div className="font-normal text-center text-xs text-gray-500">
                                    Vous avez subi une opération chirurgicale
                                    <br />
                                    indiquez-la ici pour partager
                                    l&apos;information rapidement avec vos
                                    médecins
                                  </div>
                                  <div
                                    className="w-max self-center"
                                    style={{ paddingTop: "1.5%" }}
                                  >
                                    <button
                                      onClick={AjouterChirugieClick}
                                      style={{ backgroundColor: "#012bb4" }}
                                      type="submit"
                                      className="rounded-full bg-primary hover:bg-primary-bold h-12 text-center text-white font-bold flex items-center justify-center px-8 mt-4 text-base sm:text-base lg:text-base disabled:bg-gray-100 disabled:border disabled:text-black disabled:select-none disabled:pointer-events-none min-w-[100px] py-3"
                                    >
                                      <div className="me-2">
                                        Ajouter une chirurgie
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          {showNextContent === 4 && (
                            <div className="flex flex-1 flex-col items-center justify-center h-full">
                              <div className="flex flex-1 h-full flex-col items-center justify-center max-w-xl mx-auto w-full">
                                <div className="flex flex-col flex-nowrap items-center justify-center h-full w-full">
                                  <div className="mb-6">
                                    <img
                                      loading="lazy"
                                      alt="surgeries"
                                      src="src/assets/image_Profil/allergies.webp"
                                      width="189"
                                      height="181"
                                    />
                                  </div>
                                  <div className="font-bold text-base  mb-4">
                                    Aucune Allergie
                                  </div>
                                  <div className="font-normal text-center text-xs text-gray-500">
                                    Vous avez une allergie, indiquez-la ici{" "}
                                    <br />
                                    pour partager l&apos;information rapidement
                                    avec vos médecins
                                  </div>
                                  <div
                                    className="w-max self-center"
                                    style={{ paddingTop: "1.5%" }}
                                  >
                                    <button
                                      onClick={AjouterAllergieClick}
                                      style={{ backgroundColor: "#012bb4" }}
                                      type="submit"
                                      className="rounded-full bg-primary hover:bg-primary-bold h-12 text-center text-white font-bold flex items-center justify-center px-8 mt-4 text-base sm:text-base lg:text-base disabled:bg-gray-100 disabled:border disabled:text-black disabled:select-none disabled:pointer-events-none min-w-[100px] py-3"
                                    >
                                      <div className="me-2">
                                        Ajouter une allergie
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          {showNextContent === 5 && (
                            <div className="flex flex-1 flex-col items-center justify-center h-full">
                              <div className="flex flex-1 h-full flex-col items-center justify-center max-w-xl mx-auto w-full">
                                <div className="flex flex-col flex-nowrap items-center justify-center h-full w-full">
                                  <div className="mb-6">
                                    <img
                                      loading="lazy"
                                      alt="surgeries"
                                      src="src/assets/image_Profil/medicines.webp"
                                      width="189"
                                      height="181"
                                    />
                                  </div>
                                  <div className="font-bold text-base mb-4">
                                    Aucun Médicament
                                  </div>
                                  <div className="font-normal text-center text-xs text-gray-500">
                                    Vous prenez un médicament, indiquez-le ici
                                    <br />
                                    pour partager l&apos;information rapidement
                                    avec vos médecins.
                                  </div>
                                  <div
                                    className="w-max self-center"
                                    style={{ paddingTop: "1.5%" }}
                                  >
                                    <button
                                      onClick={AjouterMedicamentClick}
                                      style={{ backgroundColor: "#012bb4" }}
                                      type="submit"
                                      className="rounded-full bg-primary hover:bg-primary-bold h-12 text-center text-white font-bold flex items-center justify-center px-8 mt-4 text-base sm:text-base lg:text-base disabled:bg-gray-100 disabled:border disabled:text-black disabled:select-none disabled:pointer-events-none min-w-[100px] py-3"
                                    >
                                      <div className="me-2">
                                        Ajouter un médicament
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
                        Ajouter une maladie chronique
                      </div>

                      <div className="w-full">
                        <div
                          className="rounded-full px-5 py-1 bg-p-night w-full"
                          style={{ marginTop: "5%" }}
                        >
                          <input
                            type="text"
                            placeholder="Nom de votre maladie chronique"
                            className="text-base font-normal h-12 bg-p-night outline-none border-none w-full shadow-none focus:ring-transparent"
                            style={{
                              boxShadow: "none !important",
                              backgroundColor: "transparent",
                            }}
                            name="Nom de votre maladie chronique"
                          />
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
        {AjouterChirugie && (
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
                        Ajouter une chirugie
                      </div>

                      <div className="w-full">
                        <div
                          className="rounded-full px-5 py-1 bg-p-night w-full"
                          style={{ marginTop: "5%" }}
                        >
                          <input
                            type="text"
                            placeholder="Nom de votre chirugie"
                            className="text-base font-normal h-12 bg-p-night outline-none border-none w-full shadow-none focus:ring-transparent"
                            style={{
                              boxShadow: "none !important",
                              backgroundColor: "transparent",
                            }}
                            name="Nom de votre chirugie"
                          />
                        </div>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <button
                          onClick={DisableChirugieClick}
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
        {AjouterAllergie && (
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
                        Ajouter une allergie
                      </div>

                      <div className="w-full">
                        <div
                          className="rounded-full px-5 py-1 bg-p-night w-full"
                          style={{ marginTop: "5%" }}
                        >
                          <input
                            type="text"
                            placeholder="Nom de votre allergie"
                            className="text-base font-normal h-12 bg-p-night outline-none border-none w-full shadow-none focus:ring-transparent"
                            style={{
                              boxShadow: "none !important",
                              backgroundColor: "transparent",
                            }}
                            name="Nom de votre allergie"
                          />
                        </div>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <button
                          onClick={DisableAllergieClick}
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
        {AjouterMedicament && (
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
                        Ajouter une médicament
                      </div>

                      <div className="w-full">
                        <div
                          className="rounded-full px-5 py-1 bg-p-night w-full"
                          style={{ marginTop: "5%" }}
                        >
                          <input
                            type="text"
                            placeholder="Nommez le médicament"
                            className="text-base font-normal h-12 bg-p-night outline-none border-none w-full shadow-none focus:ring-transparent"
                            style={{
                              boxShadow: "none !important",
                              backgroundColor: "transparent",
                            }}
                            name="Nommez le médicament"
                          />
                        </div>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <button
                          onClick={DisableMedicamentClick}
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
    </>
  );
};
export default Profil;
