import { Headconect } from "../../Components/Headconect";
import "./Rendezvous.css";
import { useState } from "react";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import HealingIcon from "@mui/icons-material/Healing";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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

  const handleNextClick = (numeroPage) => {
    setShowNextContent(numeroPage);
    if (numeroPage === 2) {
      setCurrent2(
        "w-full text-sm 2xl:text-sm text-center rtl:first:rounded-tl-none rtl:first:rounded-bl-none rtl:last:rounded-tr-none rtl:last:rounded-br-none first:rounded-ts-full first:rounded-bs-full last:rounded-te-full last:rounded-be-full p-4 bg-primary hover:bg-primary-bold text-white font-bold"
      );
      setCurrent1("");
      setCurrent3("");
    }
    if (numeroPage === 1) {
      setCurrent1(
        "w-full text-sm 2xl:text-sm text-center rtl:first:rounded-tl-none rtl:first:rounded-bl-none rtl:last:rounded-tr-none rtl:last:rounded-br-none first:rounded-ts-full first:rounded-bs-full last:rounded-te-full last:rounded-be-full p-4 bg-primary hover:bg-primary-bold text-white font-bold"
      );
      setCurrent2("");
      setCurrent3("");
    }
    if (numeroPage === 3) {
      setCurrent3(
        "w-full text-sm 2xl:text-sm text-center rtl:first:rounded-tl-none rtl:first:rounded-bl-none rtl:last:rounded-tr-none rtl:last:rounded-br-none first:rounded-ts-full first:rounded-bs-full last:rounded-te-full last:rounded-be-full p-4 bg-primary hover:bg-primary-bold text-white font-bold"
      );
      setCurrent1("");
      setCurrent2("");
    }
  };
  const [showFirstContent, setShowFirstContent] = useState(true);

  const handleButtonClick = () => {
    setShowFirstContent(!showFirstContent);
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
                        src="src/assets/image_Profil/appointment-icon.svg"
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
                      Rendez-vous
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
                              Rendez-vous à venir
                            </button>
                            <button
                              onClick={() => handleNextClick(2)}
                              className={`w-full text-sm 2xl:text-sm text-center rtl:first:rounded-tl-none rtl:first:rounded-bl-none rtl:last:rounded-tr-none rtl:last:rounded-br-none first:rounded-ts-full first:rounded-bs-full last:rounded-te-full last:rounded-be-full p-4 font-medium hover:bg-primary-bold text-gray-800${current2}`}
                            >
                              Rendez-vous à réalisé(s)
                            </button>
                            <button
                              onClick={() => handleNextClick(3)}
                              className={`w-full text-sm 2xl:text-sm text-center rtl:first:rounded-tl-none rtl:first:rounded-bl-none rtl:last:rounded-tr-none rtl:last:rounded-br-none first:rounded-ts-full first:rounded-bs-full last:rounded-te-full last:rounded-be-full p-4 font-medium hover:bg-primary-bold text-gray-800${current3}`}
                            >
                              Rendez-vous annulé(s)
                            </button>
                          </div>
                        </div>
                        <div className="w-full">
                          {showNextContent === 1 && (
                            <div
                               className="wrapper od-appointments"
                            >
                              <div
                                className="od-appointments-wrapper"
                                style={{ display: "block" }}
                              >
                                <div className="od-appointments-container">
                                  <div className="od-appointments-list">
                                    <section className="od-appointments-section od-appointments-section--past">
                                      <div
                                        className="od-appointments-section-content"
                                        style={{ paddingTop: "11.5%" }}
                                      >
                                        {showFirstContent ? (
                                          <div className="od-appointment od-appointment--carried-out">
                                            <div className="od-appointment-header">
                                              <div className="od-appointment-header-date-time">
                                                <div className="od-appointment-header-date">
                                                  <div
                                                    style={{
                                                      position: "relative",
                                                      top: "-1px",
                                                      fontSize: "20px",
                                                      height: "auto",
                                                      paddingRight: "4px",
                                                    }}
                                                  >
                                                    <EventIcon></EventIcon>
                                                  </div>
                                                  <span>
                                                    Vendredi 8 mars 2024
                                                  </span>
                                                </div>
                                                <div className="od-appointment-header-time">
                                                  <div
                                                    style={{
                                                      position: "relative",
                                                      top: "-1px",
                                                      fontSize: "20px",
                                                      height: "auto",
                                                      paddingRight: "4px",
                                                      marginLeft: "16px",
                                                    }}
                                                  >
                                                    <AccessTimeIcon></AccessTimeIcon>
                                                  </div>
                                                  <span>08:45</span>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="od-appointment-resource">
                                              <div className="od-appointment-resource-picture">
                                                <img src="src/assets/avatar_doctor.jpg" />
                                              </div>
                                              <div className="od-appointment-resource-description">
                                                <div className="od-appointment-resource-description-name">
                                                  Dr BELHADJ ABDELILLAH
                                                </div>
                                                <div className="od-appointment-resource-description-specialty">
                                                  Médecin généraliste
                                                </div>
                                              </div>
                                            </div>
                                            <div className="od-appointment-info-container">
                                              <div
                                                className="od-appointment-info-toggle"
                                                onClick={handleButtonClick}
                                              >
                                                <span>
                                                  Voir les informations détaillées
                                          
                                                </span>
                                                <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                                              </div>
                                            </div>
                                          </div>
                                        ) : (
                                            <div className="od-appointment od-appointment--carried-out od-appointment--details">
                                              <div className="od-appointment-header">
                                                <div className="od-appointment-header-date-time">
                                                  <div className="od-appointment-header-date">
                                                    <div
                                                      style={{
                                                        position: "relative",
                                                        top: "-1px",
                                                        fontSize: "20px",
                                                        height: "auto",
                                                        paddingRight: "4px",
                                                      }}
                                                    >
                                                      <EventIcon></EventIcon>
                                                    </div>
                                                    <span>
                                                      Vendredi 8 mars 2024
                                                    </span>
                                                  </div>
                                                  <div className="od-appointment-header-time">
                                                    <div
                                                      style={{
                                                        position: "relative",
                                                        top: "-1px",
                                                        fontSize: "20px",
                                                        height: "auto",
                                                        paddingRight: "4px",
                                                        marginLeft: "16px",
                                                      }}
                                                    >
                                                      <AccessTimeIcon></AccessTimeIcon>
                                                    </div>
                                                    <span>09:00</span>
                                                  </div>
                                                </div>
                                                <div className="od-appointment-header-status">
                                                  <span>Effectué</span>
                                                </div>
                                              </div>
                                              <div className="od-appointment-resource">
                                                <div className="od-appointment-resource-picture">
                                                  <img src="src/assets/avatar_doctor.jpg" />
                                                </div>
                                                <div className="od-appointment-resource-description">
                                                  <div className="od-appointment-resource-description-name">
                                                    Urgence Archimed
                                                  </div>
                                                  <div className="od-appointment-resource-description-specialty">
                                                    médecin urgentiste
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="od-appointment-info-container">
                                                <div
                                                  className="od-appointment-info cw-confirmation"
                                                  style={{ display: "block" }}
                                                >
                                                  <h3>
                                                    À propos de votre
                                                    rendez-vous
                                                  </h3>
                                                  <div className="od-appointment-info-section">
                                                    <div className="cw-confirmation-summary">
                                                      <div className="cw-confirmation-summary-item">
                                                        <div
                                                          style={{
                                                            position:
                                                              "relative",
                                                            top: "-6px",
                                                            fontSize: "20px",
                                                            height: "auto",
                                                            paddingRight: "4px",
                                                          }}
                                                        >
                                                          <EventIcon></EventIcon>
                                                        </div>
                                                        <span>
                                                          Vendredi 8 mars 2024 à
                                                          09:00
                                                        </span>
                                                      </div>
                                                      <div className="cw-confirmation-summary-item">
                                                        <div
                                                          style={{
                                                            position:
                                                              "relative",
                                                            top: "-6px",
                                                            fontSize: "20px",
                                                            height: "auto",
                                                            paddingRight: "4px",
                                                          }}
                                                        >
                                                          <HealingIcon></HealingIcon>
                                                        </div>
                                                        <span>
                                                          Première consultation
                                                        </span>
                                                      </div>
                                                    </div>
                                                    <div className="od-appointment-info-action od-appointment-info-book">
                                                      <div
                                                        className="flex dl-justify-center my-16"
                                                        style={{
                                                          flex: "0 1 50%",
                                                          height: "50px",
                                                        }}
                                                      >
                                                        <a
                                                          className="text-sm md:text-base font-semibold rounded-3xl px-7 py-3 bg-primary-ice text-white"
                                                          data-design-system="oxygen"
                                                          data-design-system-component="Button"
                                                        >
                                                          <span className="dl-button-label">
                                                            <TouchAppIcon
                                                              style={{
                                                                marginRight:
                                                                  "10px",
                                                              }}
                                                            ></TouchAppIcon>
                                                            Nouveau rendez-vous
                                                          </span>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <h3>
                                                    Informations pratiques
                                                  </h3>
                                                  <div className="od-appointment-info-section">
                                                    <div className="cw-confirmation-practical-info">
                                                      <div className="cw-confirmation-practical-info-item">
                                                        <div
                                                          style={{
                                                            position:
                                                              "relative",
                                                            top: "-6px",
                                                            fontSize: "20px",
                                                            height: "auto",
                                                            paddingRight: "4px",
                                                          }}
                                                        >
                                                          <PlaceIcon></PlaceIcon>
                                                        </div>
                                                        <a
                                                          href="https://www.google.ch/maps/place/La Voie-Creuse 16, 1202 Genève"
                                                          target="_blank"
                                                        >
                                                          <span>
                                                            Centre Médical
                                                            ARCHIMED NATIONS
                                                            <br />
                                                            La Voie-Creuse 16
                                                            <br />
                                                            1202 Genève
                                                          </span>
                                                        </a>
                                                      </div>
                                                      <div className="cw-confirmation-practical-info-item">
                                                        <div
                                                          style={{
                                                            position:
                                                              "relative",
                                                            top: "-6px",
                                                            fontSize: "20px",
                                                            height: "auto",
                                                            paddingRight: "4px",
                                                          }}
                                                        >
                                                          <PhoneIcon></PhoneIcon>
                                                        </div>
                                                        <a href="tel:+41227340303">
                                                          <span>
                                                            022 734 03 03
                                                          </span>
                                                        </a>
                                                      </div>
                                                    </div>
                                                    <div
                                                      className="od-appointment-info-action od-appointment-info-cancel"
                                                      style={{
                                                        display: "block",
                                                      }}
                                                    >
                                                      <div
                                                        className="flex dl-justify-center my-16"
                                                        style={{
                                                          flex: "0 1 50%",
                                                          height: "50px",
                                                        }}
                                                      >
                                                        <a
                                                          className="text-sm md:text-base font-semibold rounded-3xl px-7 py-3 bg-primary-ice text-white"
                                                          style={{
                                                            backgroundColor:
                                                              "#c00",
                                                          }}
                                                          data-design-system="oxygen"
                                                          data-design-system-component="Button"
                                                        >
                                                          <span className="dl-button-label">
                                                            <EventBusyIcon
                                                              style={{
                                                                marginRight:
                                                                  "10px",
                                                              }}
                                                            ></EventBusyIcon>
                                                            Annuler le
                                                            rendez-vous
                                                          </span>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                       
                                        )}
                                        <div className="od-appointment od-appointment--carried-out active">
                                          <div className="od-appointment-header">
                                            <div className="od-appointment-header-date-time">
                                              <div className="od-appointment-header-date">
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    top: "-1px",
                                                    fontSize: "20px",
                                                    height: "auto",
                                                    paddingRight: "4px",
                                                  }}
                                                >
                                                  <EventIcon></EventIcon>
                                                </div>
                                                <span>
                                                  Vendredi 8 mars 2024
                                                </span>
                                              </div>
                                              <div className="od-appointment-header-time">
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    top: "-1px",
                                                    fontSize: "20px",
                                                    height: "auto",
                                                    paddingRight: "4px",
                                                    marginLeft: "16px",
                                                  }}
                                                >
                                                  <AccessTimeIcon></AccessTimeIcon>
                                                </div>
                                                <span>09:00</span>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="od-appointment-resource">
                                            <div className="od-appointment-resource-picture">
                                              <img src="https://sos-ch-dk-2.exo.io/onedoc-images/users/002d1324dbaecd2cd53046d2e9e5564d975ce5a790fbdecb510e6523b1b55240-tiny.png" />
                                            </div>
                                            <div className="od-appointment-resource-description">
                                              <div className="od-appointment-resource-description-name">
                                                Urgence Archimed
                                              </div>
                                              <div className="od-appointment-resource-description-specialty">
                                                médecin urgentiste
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="od-appointments-section-footer"
                                        style={{ display: "block" }}
                                      >
                                        <div
                                          className="flex dl-justify-center my-16"
                                          style={{
                                            flex: "0 1 50%",
                                            height: "50px",
                                          }}
                                        >
                                          <a
                                            className="text-sm md:text-base font-semibold rounded-3xl px-7 py-3 bg-primary-ice text-white"
                                            data-design-system="oxygen"
                                            data-design-system-component="Button"
                                          >
                                            <span className="dl-button-label">
                                              <CloudDownloadIcon
                                                style={{
                                                  marginRight: "10px",
                                                }}
                                              ></CloudDownloadIcon>
                                              Voir plus
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </section>
                                  </div>
                                  <div className="od-appointments-details">
                                    <div className="od-appointment od-appointment--carried-out od-appointment--details">
                                      <div className="od-appointment-header">
                                        <div className="od-appointment-header-date-time">
                                          <div className="od-appointment-header-date">
                                            <div
                                              style={{
                                                position: "relative",
                                                top: "-1px",
                                                fontSize: "20px",
                                                height: "auto",
                                                paddingRight: "4px",
                                              }}
                                            >
                                              <EventIcon></EventIcon>
                                            </div>
                                            <span>Vendredi 8 mars 2024</span>
                                          </div>
                                          <div className="od-appointment-header-time">
                                            <div
                                              style={{
                                                position: "relative",
                                                top: "-1px",
                                                fontSize: "20px",
                                                height: "auto",
                                                paddingRight: "4px",
                                                marginLeft: "16px",
                                              }}
                                            >
                                              <AccessTimeIcon></AccessTimeIcon>
                                            </div>
                                            <span>09:00</span>
                                          </div>
                                        </div>
                                        <div className="od-appointment-header-status">
                                          <span>Effectué</span>
                                        </div>
                                      </div>
                                      <div className="od-appointment-resource">
                                        <div className="od-appointment-resource-picture">
                                          <img src="src/assets/avatar_doctor.jpg" />
                                        </div>
                                        <div className="od-appointment-resource-description">
                                          <div className="od-appointment-resource-description-name">
                                            Urgence Archimed
                                          </div>
                                          <div className="od-appointment-resource-description-specialty">
                                            médecin urgentiste
                                          </div>
                                        </div>
                                      </div>
                                      <div className="od-appointment-info-container">
                                        <div
                                          className="od-appointment-info cw-confirmation"
                                          style={{ display: "block" }}
                                        >
                                          <h3>À propos de votre rendez-vous</h3>
                                          <div className="od-appointment-info-section">
                                            <div className="cw-confirmation-summary">
                                              <div className="cw-confirmation-summary-item">
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    top: "-6px",
                                                    fontSize: "20px",
                                                    height: "auto",
                                                    paddingRight: "4px",
                                                  }}
                                                >
                                                  <EventIcon></EventIcon>
                                                </div>
                                                <span>
                                                  Vendredi 8 mars 2024 à 09:00
                                                </span>
                                              </div>
                                              <div className="cw-confirmation-summary-item">
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    top: "-6px",
                                                    fontSize: "20px",
                                                    height: "auto",
                                                    paddingRight: "4px",
                                                  }}
                                                >
                                                  <HealingIcon></HealingIcon>
                                                </div>
                                                <span>
                                                  Première consultation
                                                </span>
                                              </div>
                                            </div>
                                            <div className="od-appointment-info-action od-appointment-info-book">
                                              <div
                                                className="flex dl-justify-center my-16"
                                                style={{
                                                  flex: "0 1 50%",
                                                  height: "50px",
                                                }}
                                              >
                                                <a
                                                  className="text-sm md:text-base font-semibold rounded-3xl px-7 py-3 bg-primary-ice text-white"
                                                  data-design-system="oxygen"
                                                  data-design-system-component="Button"
                                                >
                                                  <span className="dl-button-label">
                                                    <TouchAppIcon
                                                      style={{
                                                        marginRight: "10px",
                                                      }}
                                                    ></TouchAppIcon>
                                                    Nouveau rendez-vous
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                          <h3>Informations pratiques</h3>
                                          <div className="od-appointment-info-section">
                                            <div className="cw-confirmation-practical-info">
                                              <div className="cw-confirmation-practical-info-item">
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    top: "-6px",
                                                    fontSize: "20px",
                                                    height: "auto",
                                                    paddingRight: "4px",
                                                  }}
                                                >
                                                  <PlaceIcon></PlaceIcon>
                                                </div>
                                                <a
                                                  href="https://www.google.ch/maps/place/La Voie-Creuse 16, 1202 Genève"
                                                  target="_blank"
                                                >
                                                  <span>
                                                    Centre Médical ARCHIMED
                                                    NATIONS
                                                    <br />
                                                    La Voie-Creuse 16
                                                    <br />
                                                    1202 Genève
                                                  </span>
                                                </a>
                                              </div>
                                              <div className="cw-confirmation-practical-info-item">
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    top: "-6px",
                                                    fontSize: "20px",
                                                    height: "auto",
                                                    paddingRight: "4px",
                                                  }}
                                                >
                                                  <PhoneIcon></PhoneIcon>
                                                </div>
                                                <a href="tel:+41227340303">
                                                  <span>022 734 03 03</span>
                                                </a>
                                              </div>
                                            </div>
                                            <div
                                              className="od-appointment-info-action od-appointment-info-cancel"
                                              style={{ display: "block" }}
                                            >
                                              <div
                                                className="flex dl-justify-center my-16"
                                                style={{
                                                  flex: "0 1 50%",
                                                  height: "50px",
                                                }}
                                              >
                                                <a
                                                  className="text-sm md:text-base font-semibold rounded-3xl px-7 py-3 bg-primary-ice text-white"
                                                  style={{
                                                    backgroundColor: "#c00",
                                                  }}
                                                  data-design-system="oxygen"
                                                  data-design-system-component="Button"
                                                >
                                                  <span className="dl-button-label">
                                                    <EventBusyIcon
                                                      style={{
                                                        marginRight: "10px",
                                                      }}
                                                    ></EventBusyIcon>
                                                    Annuler le rendez-vous
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                className="w-full flex flex-col mx-auto flex-1"
                                style={{ display: "none", paddingTop: "15%" }}
                              >
                                <div className="w-full max-w-xl mx-auto">
                                  <div className="max-w-xl mx-auto">
                                    <div className="flex flex-col items-center justify-center">
                                      <svg
                                        width="2em"
                                        height="2em"
                                        viewBox="0 0 40 40"
                                      >
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
                                        Il n&apos;y a aucun rendez-vous à
                                        afficher
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="w-max self-center"
                                  style={{
                                    paddingTop: "1.5%",
                                  }}
                                >
                                  <button
                                    style={{ backgroundColor: "#012bb4" }}
                                    type="submit"
                                    className="rounded-full bg-primary hover:bg-primary-bold h-12 text-center text-white font-bold flex items-center justify-center px-8 mt-4 text-base sm:text-base lg:text-base disabled:bg-gray-100 disabled:border disabled:text-black disabled:select-none disabled:pointer-events-none min-w-[100px] py-3"
                                  >
                                    {" "}
                                    <TouchAppIcon
                                      style={{
                                        marginRight: "10px",
                                      }}
                                    ></TouchAppIcon>
                                    <div className="me-2">
                                      Prendre rendez-vous
                                    </div>
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
                          )}
                          {showNextContent === 2 && (
                            <div
                              data-user-id="2583061"
                              className="wrapper od-appointments"
                            >
                              <div
                                className="od-appointments-wrapper"
                                style={{ display: "none" }}
                              >
                                <div className="od-appointments-container">
                                  <div className="od-appointments-list">
                                    <section className="od-appointments-section od-appointments-section--past">
                                      <div
                                        className="od-appointments-section-content"
                                        style={{ paddingTop: "11.5%" }}
                                      >
                                        <div className="col od-appointment od-appointment--cancelled">
                                          <div className="od-appointment-header">
                                            <div className="od-appointment-header-date-time">
                                              <div className="od-appointment-header-date">
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    top: "-1px",
                                                    fontSize: "20px",
                                                    height: "auto",
                                                    paddingRight: "4px",
                                                  }}
                                                >
                                                  <EventIcon></EventIcon>
                                                </div>
                                                <span>
                                                  Vendredi 8 mars 2024
                                                </span>
                                              </div>
                                              <div className="od-appointment-header-time">
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    top: "-1px",
                                                    fontSize: "20px",
                                                    height: "auto",
                                                    paddingRight: "4px",
                                                    marginLeft: "16px",
                                                  }}
                                                >
                                                  <AccessTimeIcon></AccessTimeIcon>
                                                </div>
                                                <span>08:45</span>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="od-appointment-resource">
                                            <div className="od-appointment-resource-picture">
                                              <img src="src/assets/avatar_doctor.jpg" />
                                            </div>
                                            <div className="od-appointment-resource-description">
                                              <div className="od-appointment-resource-description-name">
                                                Dr BELHADJ ABDELILLAH
                                              </div>
                                              <div className="od-appointment-resource-description-specialty">
                                                Médecin généraliste
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className=" od-appointment od-appointment--cancelled active3">
                                          <div className="od-appointment-header">
                                            <div className="od-appointment-header-date-time">
                                              <div className="od-appointment-header-date">
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    top: "-1px",
                                                    fontSize: "20px",
                                                    height: "auto",
                                                    paddingRight: "4px",
                                                  }}
                                                >
                                                  <EventIcon></EventIcon>
                                                </div>
                                                <span>
                                                  Vendredi 8 mars 2024
                                                </span>
                                              </div>
                                              <div className="od-appointment-header-time">
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    top: "-1px",
                                                    fontSize: "20px",
                                                    height: "auto",
                                                    paddingRight: "4px",
                                                    marginLeft: "16px",
                                                  }}
                                                >
                                                  <AccessTimeIcon></AccessTimeIcon>
                                                </div>
                                                <span>09:00</span>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="od-appointment-resource">
                                            <div className="od-appointment-resource-picture">
                                              <img src="https://sos-ch-dk-2.exo.io/onedoc-images/users/002d1324dbaecd2cd53046d2e9e5564d975ce5a790fbdecb510e6523b1b55240-tiny.png" />
                                            </div>
                                            <div className="od-appointment-resource-description">
                                              <div className="od-appointment-resource-description-name">
                                                Urgence Archimed
                                              </div>
                                              <div className="od-appointment-resource-description-specialty">
                                                médecin urgentiste
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="od-appointments-section-footer"
                                        style={{ display: "block" }}
                                      >
                                        <div
                                          className="flex dl-justify-center my-16"
                                          style={{
                                            flex: "0 1 50%",
                                            height: "50px",
                                          }}
                                        >
                                          <a
                                            className="text-sm md:text-base font-semibold rounded-3xl px-7 py-3 bg-primary-ice text-white"
                                            data-design-system="oxygen"
                                            data-design-system-component="Button"
                                          >
                                            <span className="dl-button-label">
                                              <CloudDownloadIcon
                                                style={{
                                                  marginRight: "10px",
                                                }}
                                              ></CloudDownloadIcon>
                                              Voir plus
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </section>
                                  </div>
                                  <div className="od-appointments-details">
                                    <div className="col od-appointment od-appointment--cancelled od-appointment--details">
                                      <div className="od-appointment-header">
                                        <div className="od-appointment-header-date-time">
                                          <div className="od-appointment-header-date">
                                            <div
                                              style={{
                                                position: "relative",
                                                top: "-1px",
                                                fontSize: "20px",
                                                height: "auto",
                                                paddingRight: "4px",
                                              }}
                                            >
                                              <EventIcon></EventIcon>
                                            </div>
                                            <span>Vendredi 8 mars 2024</span>
                                          </div>
                                          <div className="od-appointment-header-time">
                                            <div
                                              style={{
                                                position: "relative",
                                                top: "-1px",
                                                fontSize: "20px",
                                                height: "auto",
                                                paddingRight: "4px",
                                                marginLeft: "16px",
                                              }}
                                            >
                                              <AccessTimeIcon></AccessTimeIcon>
                                            </div>
                                            <span>09:00</span>
                                          </div>
                                        </div>
                                        <div className="od-appointment-header-status">
                                          <span>Réalisé</span>
                                        </div>
                                      </div>
                                      <div className="od-appointment-resource">
                                        <div className="od-appointment-resource-picture">
                                          <img src="src/assets/avatar_doctor.jpg" />
                                        </div>
                                        <div className="od-appointment-resource-description">
                                          <div className="od-appointment-resource-description-name">
                                            Urgence Archimed
                                          </div>
                                          <div className="od-appointment-resource-description-specialty">
                                            médecin urgentiste
                                          </div>
                                        </div>
                                      </div>
                                      <div className="od-appointment-info-container">
                                        <div
                                          className="od-appointment-info cw-confirmation"
                                          style={{ display: "block" }}
                                        >
                                          <h3>À propos de votre rendez-vous</h3>
                                          <div className="od-appointment-info-section">
                                            <div className="cw-confirmation-summary">
                                              <div className="cw-confirmation-summary-item">
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    top: "-6px",
                                                    fontSize: "20px",
                                                    height: "auto",
                                                    paddingRight: "4px",
                                                  }}
                                                >
                                                  <EventIcon></EventIcon>
                                                </div>
                                                <span>
                                                  Vendredi 8 mars 2024 à 09:00
                                                </span>
                                              </div>
                                              <div className="cw-confirmation-summary-item">
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    top: "-6px",
                                                    fontSize: "20px",
                                                    height: "auto",
                                                    paddingRight: "4px",
                                                  }}
                                                >
                                                  <HealingIcon></HealingIcon>
                                                </div>
                                                <span>
                                                  Première consultation
                                                </span>
                                              </div>
                                            </div>
                                            <div className="od-appointment-info-action od-appointment-info-book">
                                              <div
                                                className="flex dl-justify-center my-16"
                                                style={{
                                                  flex: "0 1 50%",
                                                  height: "50px",
                                                }}
                                              >
                                                <a
                                                  className="text-sm md:text-base font-semibold rounded-3xl px-7 py-3 bg-primary-ice text-white"
                                                  data-design-system="oxygen"
                                                  data-design-system-component="Button"
                                                >
                                                  <span className="dl-button-label">
                                                    <TouchAppIcon
                                                      style={{
                                                        marginRight: "10px",
                                                      }}
                                                    ></TouchAppIcon>
                                                    Nouveau rendez-vous
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                          <h3>Informations pratiques</h3>
                                          <div className="od-appointment-info-section">
                                            <div className="cw-confirmation-practical-info">
                                              <div className="cw-confirmation-practical-info-item">
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    top: "-6px",
                                                    fontSize: "20px",
                                                    height: "auto",
                                                    paddingRight: "4px",
                                                  }}
                                                >
                                                  <PlaceIcon></PlaceIcon>
                                                </div>
                                                <a
                                                  href="https://www.google.ch/maps/place/La Voie-Creuse 16, 1202 Genève"
                                                  target="_blank"
                                                >
                                                  <span>
                                                    Centre Médical ARCHIMED
                                                    NATIONS
                                                    <br />
                                                    La Voie-Creuse 16
                                                    <br />
                                                    1202 Genève
                                                  </span>
                                                </a>
                                              </div>
                                              <div className="cw-confirmation-practical-info-item">
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    top: "-6px",
                                                    fontSize: "20px",
                                                    height: "auto",
                                                    paddingRight: "4px",
                                                  }}
                                                >
                                                  <PhoneIcon></PhoneIcon>
                                                </div>
                                                <a href="tel:+41227340303">
                                                  <span>022 734 03 03</span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="w-full flex flex-col mx-auto flex-1"
                                style={{ display: "flex", paddingTop: "15%" }}
                              >
                                <div className="w-full max-w-xl mx-auto">
                                  <div className="max-w-xl mx-auto">
                                    <div className="flex flex-col items-center justify-center">
                                      <svg
                                        width="2em"
                                        height="2em"
                                        viewBox="0 0 40 40"
                                      >
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
                                        Il n&apos;y a aucun rendez-vous à
                                        afficher
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="w-max self-center"
                                  style={{
                                    paddingTop: "1.5%",
                                  }}
                                >
                                  <button
                                    style={{ backgroundColor: "#012bb4" }}
                                    type="submit"
                                    className="rounded-full bg-primary hover:bg-primary-bold h-12 text-center text-white font-bold flex items-center justify-center px-8 mt-4 text-base sm:text-base lg:text-base disabled:bg-gray-100 disabled:border disabled:text-black disabled:select-none disabled:pointer-events-none min-w-[100px] py-3"
                                  >
                                    {" "}
                                    <TouchAppIcon
                                      style={{
                                        marginRight: "10px",
                                      }}
                                    ></TouchAppIcon>
                                    <div className="me-2">
                                      Prendre rendez-vous
                                    </div>
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
                          )}
                          {showNextContent === 3 && (
                            <div
                              data-user-id="2583061"
                              className="wrapper od-appointments"
                            >
                              <div
                                className="od-appointments-wrapper"
                                style={{ display: "block" }}
                              >
                                <div className="od-appointments-container">
                                  <div className="od-appointments-list">
                                    <section className="od-appointments-section od-appointments-section--past">
                                      <div
                                        className="od-appointments-section-content"
                                        style={{ paddingTop: "11.5%" }}
                                      >
                                        <div className="od-appointment od-appointment--cancelled">
                                          <div className="od-appointment-header">
                                            <div className="od-appointment-header-date-time">
                                              <div className="od-appointment-header-date">
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    top: "-1px",
                                                    fontSize: "20px",
                                                    height: "auto",
                                                    paddingRight: "4px",
                                                  }}
                                                >
                                                  <EventIcon></EventIcon>
                                                </div>
                                                <span>
                                                  Vendredi 8 mars 2024
                                                </span>
                                              </div>
                                              <div className="od-appointment-header-time">
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    top: "-1px",
                                                    fontSize: "20px",
                                                    height: "auto",
                                                    paddingRight: "4px",
                                                    marginLeft: "16px",
                                                  }}
                                                >
                                                  <AccessTimeIcon></AccessTimeIcon>
                                                </div>
                                                <span>08:45</span>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="od-appointment-resource">
                                            <div className="od-appointment-resource-picture">
                                              <img src="src/assets/avatar_doctor.jpg" />
                                            </div>
                                            <div className="od-appointment-resource-description">
                                              <div className="od-appointment-resource-description-name">
                                                Dr BELHADJ ABDELILLAH
                                              </div>
                                              <div className="od-appointment-resource-description-specialty">
                                                Médecin généraliste
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className=" od-appointment od-appointment--cancelled active2">
                                          <div className="od-appointment-header">
                                            <div className="od-appointment-header-date-time">
                                              <div className="od-appointment-header-date">
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    top: "-1px",
                                                    fontSize: "20px",
                                                    height: "auto",
                                                    paddingRight: "4px",
                                                  }}
                                                >
                                                  <EventIcon></EventIcon>
                                                </div>
                                                <span>
                                                  Vendredi 8 mars 2024
                                                </span>
                                              </div>
                                              <div className="od-appointment-header-time">
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    top: "-1px",
                                                    fontSize: "20px",
                                                    height: "auto",
                                                    paddingRight: "4px",
                                                    marginLeft: "16px",
                                                  }}
                                                >
                                                  <AccessTimeIcon></AccessTimeIcon>
                                                </div>
                                                <span>09:00</span>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="od-appointment-resource">
                                            <div className="od-appointment-resource-picture">
                                              <img src="https://sos-ch-dk-2.exo.io/onedoc-images/users/002d1324dbaecd2cd53046d2e9e5564d975ce5a790fbdecb510e6523b1b55240-tiny.png" />
                                            </div>
                                            <div className="od-appointment-resource-description">
                                              <div className="od-appointment-resource-description-name">
                                                Urgence Archimed
                                              </div>
                                              <div className="od-appointment-resource-description-specialty">
                                                médecin urgentiste
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="od-appointments-section-footer"
                                        style={{ display: "block" }}
                                      >
                                        <div
                                          className="flex dl-justify-center my-16"
                                          style={{
                                            flex: "0 1 50%",
                                            height: "50px",
                                          }}
                                        >
                                          <a
                                            className="text-sm md:text-base font-semibold rounded-3xl px-7 py-3 bg-primary-ice text-white"
                                            data-design-system="oxygen"
                                            data-design-system-component="Button"
                                          >
                                            <span className="dl-button-label">
                                              <CloudDownloadIcon
                                                style={{
                                                  marginRight: "10px",
                                                }}
                                              ></CloudDownloadIcon>
                                              Voir plus
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </section>
                                  </div>
                                  <div className="od-appointments-details">
                                    <div className="od-appointment od-appointment--cancelled od-appointment--details">
                                      <div className="od-appointment-header">
                                        <div className="od-appointment-header-date-time">
                                          <div className="od-appointment-header-date">
                                            <div
                                              style={{
                                                position: "relative",
                                                top: "-1px",
                                                fontSize: "20px",
                                                height: "auto",
                                                paddingRight: "4px",
                                              }}
                                            >
                                              <EventIcon></EventIcon>
                                            </div>
                                            <span>Vendredi 8 mars 2024</span>
                                          </div>
                                          <div className="od-appointment-header-time">
                                            <div
                                              style={{
                                                position: "relative",
                                                top: "-1px",
                                                fontSize: "20px",
                                                height: "auto",
                                                paddingRight: "4px",
                                                marginLeft: "16px",
                                              }}
                                            >
                                              <AccessTimeIcon></AccessTimeIcon>
                                            </div>
                                            <span>09:00</span>
                                          </div>
                                        </div>
                                        <div className="od-appointment-header-status">
                                          <span>Annulé</span>
                                        </div>
                                      </div>
                                      <div className="od-appointment-resource">
                                        <div className="od-appointment-resource-picture">
                                          <img src="src/assets/avatar_doctor.jpg" />
                                        </div>
                                        <div className="od-appointment-resource-description">
                                          <div className="od-appointment-resource-description-name">
                                            Urgence Archimed
                                          </div>
                                          <div className="od-appointment-resource-description-specialty">
                                            médecin urgentiste
                                          </div>
                                        </div>
                                      </div>
                                      <div className="od-appointment-info-container">
                                        <div
                                          className="od-appointment-info cw-confirmation"
                                          style={{ display: "block" }}
                                        >
                                          <h3>À propos de votre rendez-vous</h3>
                                          <div className="od-appointment-info-section">
                                            <div className="cw-confirmation-summary">
                                              <div className="cw-confirmation-summary-item">
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    top: "-6px",
                                                    fontSize: "20px",
                                                    height: "auto",
                                                    paddingRight: "4px",
                                                  }}
                                                >
                                                  <EventIcon></EventIcon>
                                                </div>
                                                <span>
                                                  Vendredi 8 mars 2024 à 09:00
                                                </span>
                                              </div>
                                              <div className="cw-confirmation-summary-item">
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    top: "-6px",
                                                    fontSize: "20px",
                                                    height: "auto",
                                                    paddingRight: "4px",
                                                  }}
                                                >
                                                  <HealingIcon></HealingIcon>
                                                </div>
                                                <span>
                                                  Première consultation
                                                </span>
                                              </div>
                                            </div>
                                            <div className="od-appointment-info-action od-appointment-info-book">
                                              <div
                                                className="flex dl-justify-center my-16"
                                                style={{
                                                  flex: "0 1 50%",
                                                  height: "50px",
                                                }}
                                              >
                                                <a
                                                  className="text-sm md:text-base font-semibold rounded-3xl px-7 py-3 bg-primary-ice text-white"
                                                  data-design-system="oxygen"
                                                  data-design-system-component="Button"
                                                >
                                                  <span className="dl-button-label">
                                                    <TouchAppIcon
                                                      style={{
                                                        marginRight: "10px",
                                                      }}
                                                    ></TouchAppIcon>
                                                    Nouveau rendez-vous
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                          <h3>Informations pratiques</h3>
                                          <div className="od-appointment-info-section">
                                            <div className="cw-confirmation-practical-info">
                                              <div className="cw-confirmation-practical-info-item">
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    top: "-6px",
                                                    fontSize: "20px",
                                                    height: "auto",
                                                    paddingRight: "4px",
                                                  }}
                                                >
                                                  <PlaceIcon></PlaceIcon>
                                                </div>
                                                <a
                                                  href="https://www.google.ch/maps/place/La Voie-Creuse 16, 1202 Genève"
                                                  target="_blank"
                                                >
                                                  <span>
                                                    Centre Médical ARCHIMED
                                                    NATIONS
                                                    <br />
                                                    La Voie-Creuse 16
                                                    <br />
                                                    1202 Genève
                                                  </span>
                                                </a>
                                              </div>
                                              <div className="cw-confirmation-practical-info-item">
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    top: "-6px",
                                                    fontSize: "20px",
                                                    height: "auto",
                                                    paddingRight: "4px",
                                                  }}
                                                >
                                                  <PhoneIcon></PhoneIcon>
                                                </div>
                                                <a href="tel:+41227340303">
                                                  <span>022 734 03 03</span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="w-full flex flex-col mx-auto flex-1"
                                style={{ display: "none", paddingTop: "15%" }}
                              >
                                <div className="w-full max-w-xl mx-auto">
                                  <div className="max-w-xl mx-auto">
                                    <div className="flex flex-col items-center justify-center">
                                      <svg
                                        width="2em"
                                        height="2em"
                                        viewBox="0 0 40 40"
                                      >
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
                                        Il n&apos;y a aucun rendez-vous à
                                        afficher
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="w-max self-center"
                                  style={{
                                    paddingTop: "1.5%",
                                  }}
                                >
                                  <button
                                    style={{ backgroundColor: "#012bb4" }}
                                    type="submit"
                                    className="rounded-full bg-primary hover:bg-primary-bold h-12 text-center text-white font-bold flex items-center justify-center px-8 mt-4 text-base sm:text-base lg:text-base disabled:bg-gray-100 disabled:border disabled:text-black disabled:select-none disabled:pointer-events-none min-w-[100px] py-3"
                                  >
                                    {" "}
                                    <TouchAppIcon
                                      style={{
                                        marginRight: "10px",
                                      }}
                                    ></TouchAppIcon>
                                    <div className="me-2">
                                      Prendre rendez-vous
                                    </div>
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
      </body>
    </>
  );
};
export default Profil;
