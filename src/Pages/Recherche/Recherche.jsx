import ShoxDiv1 from "../../Components/showDiv/ShoxDiv1.jsx";
import ShoxDiv2 from "../../Components/showDiv/ShowDiv2.jsx";
import ShoxDiv3 from "../../Components/showDiv/ShowDiv3.jsx";
import { useState } from "react";
import iconsearch from "../../assets/iconsearch.json";
import Lottie from "lottie-react";
import iconData from "../../assets/position.json";
import calender from "../../assets/calonder.json";
import StarRating from "react-star-ratings";
import "../Recherche/Recherche.css"
import { Link } from "react-router-dom";
import Head2 from "Components/Head2.jsx";
function Recherche() {
    const ratings1 = [
      { id: 1, value: 3.5 },
    ];
    const ratings2 = [
      { id: 1, value: 2 },
        ];
    const ratings3 = [
      { id: 2, value: 4 },
        ];
    const ratings4 = [
      { id: 2, value: 1 },
         ];
  const [showFirstContent, setShowFirstContent] = useState(true);

  const handleButtonClick = () => {
    setShowFirstContent(!showFirstContent);
  };

  return (
    <>
      <div
        id="build-overlay"
        className="fixed inset-0 w-full h-screen hidden z-0 transition-all build-overlay"
      ></div>
      <div id="__next" data-reactroot>
        <div
          style={{
            position: "fixed",
            zIndex: 9999,
            top: "90px",
            left: "16px",
            right: "16px",
            bottom: "16px",
            pointerEvents: "none",
          }}
        ></div>
        <section id="search-page">
          <Head2></Head2>
          <section
            id="search-section"
            className="mt-20 bg-p-cover h-full pb-10"
          >
            <div className="relative w-full bg-white py-4 px-4 md:px-9">
              <div className="w-full max-w-5xl mx-auto grid grid-cols-[1fr,48px,48px] gap-3 md:flex flex-row items-start md:gap-4">
                <div
                  className="md:relative w-full  flex-col gap-2 sm:grid sm:place-content-center bg-white grid-cols-1 grid-rows-1 md:grid-rows-2 md:grid-cols-[minmax(270px,1fr),minmax(270px,1fr)] xl:grid-rows-1 xl:!grid-cols-[minmax(270px,1.2fr),minmax(170px,.7fr),minmax(170px,.6fr)]"
                  style={{ flexDirection: "row" }}
                >
                  <div className="relative rounded-full flex-grow border-liquide border flex items-center h-14 py-2 px-2 bg-liquide focus-within:border-primary border-liquide border">
                    <div className="grid grid-cols-[32px,1fr] gap-1 items-center w-full">
                      <div
                        className="min-w-[26px] min-h-[26px]"
                        style={{
                          loading: "eager",
                          width: "26",
                          height: "26",
                          alt: "pin",
                        }}
                      >
                        <Lottie animationData={iconsearch} loop={true}></Lottie>
                      </div>
                      <ShoxDiv1></ShoxDiv1>
                    </div>
                  </div>

                  <div className="relative rounded-full flex-grow border-liquide border  flex items-center h-14 py-2 px-2 bg-liquide focus-within:border-primary">
                    <button className="grid grid-cols-[32px,1fr,32px] gap-1 items-center justify-center w-full">
                      <div
                        className="min-w-[26px] min-h-[26px]"
                        style={{
                          loading: "eager",
                          width: "26",
                          height: "26",
                          alt: "pin",
                        }}
                      >
                        <Lottie animationData={iconData} loop={true}></Lottie>
                      </div>
                      <ShoxDiv2></ShoxDiv2>
                      <div className="flex flex-col items-center justify-center">
                        <img
                          alt="here"
                          src="src/assets/envoyer.png"
                          loading="eager"
                          width="18"
                          height="18"
                          className="min-w-[18px] min-h-[18px]"
                        />
                      </div>
                    </button>
                  </div>
                  <div className="relative rounded-full flex-grow border-liquide border  flex items-center h-14 py-2 px-2 bg-liquide focus-within:border-primary">
                    <button className="grid grid-cols-[32px,1fr,32px] gap-1 items-center justify-center w-full">
                      <div
                        className="min-w-[26px] min-h-[26px]"
                        style={{
                          loading: "eager",
                          width: "26",
                          height: "26",
                          alt: "pin",
                        }}
                      >
                        <Lottie animationData={calender} loop={true}></Lottie>
                      </div>
                      {/* */}
                      <ShoxDiv3></ShoxDiv3>
                    </button>
                  </div>
                </div>
                <button
                  className="butt-phone  rounded-full bg-primary hover:bg-primary-bold text-center text-white font-medium md:w-max flex items-center justify-center h-14 py-2 px-5 text-base rtl:text-lg"
               
                >
                  <div className=" md:flex">Rechercher</div>
                </button>
              </div>
            </div>
            <div className="px-6 max-w-4xl mx-auto mt-10 lg:px-0">
              <div className="grid grid-flow-col auto-cols gap-3 overflow-y-auto scrollbar-hide">
                <button className="rounded-3xl w-max flex items-center bg-white py-2 px-4 border-2 border-primary bg-primary-ice font-bold text-white">
                  <span>Tous </span>
                  <span className="!font-main ms-1">(0)</span>
                </button>
                <button className="rounded-3xl w-max flex items-center hover:primary-ice bg-white py-2 px-4 text-gray-800">
                  <span>Praticiens</span>
                  <span className="!font-main ms-1">(0)</span>
                </button>
                <button className="rounded-3xl w-max flex items-center hover:primary-ice bg-white py-2 px-4 text-gray-800">
                  <span>Cliniques</span>{" "}
                  <span className="!font-main ms-1">(0)</span>
                </button>
              </div>
            </div>
            <div id="search-results" className="px-2 md:px-6 mt-5 lg:px-0">
              <div data-place-id="" data-speciality-id="">
                <div className="row-center row-padding-1">
                  <div
                    className="js-dl-doctor-results"
                    style={{ display: "ruby" }}
                  >
                    <div className="col-8 col-padding search-results-col-list">
                      <div
                        className="dl-search-result"
                        id="search-result-1"
                        data-test="search-result-card"
                      >
                        <div className="dl-search-result-presentation">
                          <div className="dl-search-result-title-container">
                            <div className="dl-search-result-avatar">
                              <a
                                aria-hidden="true"
                                tabIndex={-1}
                                className="dl-link"
                                href=""
                                data-design-system="base"
                              >
                                <img
                                  src="src/assets/avatar_doctor.jpg"
                                  alt=""
                                  className="dl-image dl-image-rounded"
                                  data-design-system="base"
                                />
                              </a>
                            </div>
                            <div className="dl-search-result-title">
                              <div className="dl-flex-row dl-justify-between dl-align-items-center">
                                <a
                                  className="dl-link"
                                  href=""
                                  data-design-system="base"
                                >
                                  <h3
                                    className="dl-text dl-text-body dl-text-regular dl-text-s dl-text-primary-110"
                                    data-design-system="oxygen"
                                    data-design-system-component="Text"
                                    data-test="dl-search-result-name"
                                  >
                                    Dr BELHADJ ABDELILLAH
                                  </h3>
                                </a>
                              </div>
                              <div className="dl-search-result-subtitle">
                                <div
                                  className="text-sm md:text-base font-light text-gray-900 min-w-[max-content]"
                                  data-design-system="oxygen"
                                  data-design-system-component="Text"
                                >
                                  Médecin généraliste
                                </div>
                              </div>
                            </div>
                          </div>
                          <a href="" target="_blank" rel="noreferrer noopener">
                            <div className="ml-96">
                              <span
                                className="dl-text dl-text-body dl-text-regular dl-text-s"
                                data-design-system="oxygen"
                                data-design-system-component="Text"
                              >
                                90 Rue de la Zune
                              </span>
                              <div
                                className="dl-text dl-text-body dl-text-regular dl-text-s"
                                data-design-system="oxygen"
                                data-design-system-component="Text"
                              >
                                60840 Algérie
                              </div>
                            </div>
                          </a>
                          <div
                            className="dl-text dl-text-body dl-text-regular dl-text-s dl-text-neutral-090 !my-16"
                            data-design-system="oxygen"
                            data-design-system-component="Text"
                            style={{ paddingLeft: "30%" }}
                          >
                            {ratings1.map((item) => (
                              <div key={item.id}>
                                <StarRating
                                  rating={item.value}
                                  starRatedColor="blue"
                                  numberOfStars={5}
                                  name={`rating-${item.id}`}
                                  starDimension="20px"
                                />
                              </div>
                            ))}
                          </div>
                          <div className="flex dl-justify-center my-16">
                            <a
                              className="text-sm md:text-base font-semibold rounded-3xl px-7 py-3 bg-primary-ice text-white"
                              href=""
                              data-design-system="oxygen"
                              data-design-system-component="Button"
                            >
                              <span className="dl-button-label">
                                Prendre rendez-vous
                              </span>
                            </a>
                          </div>
                        </div>

                        <div className="dl-search-result-calendar">
                          <div style={{ overflow: "visible", width: "0px" }}>
                            <div
                              data-test="search-result-calendar"
                              style={{ width: "490px" }}
                            >
                              <div
                                style={{ overflow: "visible", width: "0px" }}
                              >
                                <div
                                  className="dl-desktop-availabilities dl-desktop-availabilities-flat"
                                  style={{ width: "490px" }}
                                >
                                  <div className="dl-desktop-availabilities-inner">
                                    {showFirstContent ? (
                                      <div>
                                        <div
                                          className="dl-desktop-availabilities-days"
                                          style={{ opacity: "1" }}
                                        >
                                          <div className="availabilities-pagination availabilities-pagination-disabled">
                                            <button
                                              aria-label="Disponibilités précédentes"
                                              title="Disponibilités précédentes"
                                              tabIndex={0}
                                              className="Tappable-inactive dl-icon-button dl-availabilities-pagination-icon-button dl-icon-button-small dl-icon-button-primary"
                                              role="button"
                                              type="button"
                                              disabled=""
                                              data-design-system="oxygen"
                                              data-design-system-component="IconButton"
                                              style={{
                                                webkitTapHighlightColor:
                                                  "rgba(0, 0, 0, 0)",
                                                userSelect: "none",
                                                cursor: "pointer",
                                              }}
                                            >
                                              <div className="dl-icon-wrapper dl-position-relative">
                                                <svg
                                                  width="16"
                                                  height="16"
                                                  viewBox="0 0 16 16"
                                                  fill="currentColor"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  aria-hidden="true"
                                                  focusable="false"
                                                  className="dl-icon dl-icon-primary-110 dl-icon-small"
                                                  data-icon-name="solid/chevron-left"
                                                  data-design-system="oxygen"
                                                  data-design-system-component="Icon"
                                                >
                                                  <path d="M10.977 3.494c0 .211-.07.399-.211.54l-3.961 3.96 3.96 3.985a.723.723 0 0 1 0 1.054.723.723 0 0 1-1.054 0l-4.5-4.5a.723.723 0 0 1 0-1.054l4.5-4.5a.723.723 0 0 1 1.055 0c.14.14.21.328.21.515Z"></path>
                                                </svg>
                                              </div>
                                            </button>
                                          </div>
                                          <div className="availabilities-day">
                                            <div className="availabilities-day-title">
                                              <div className="availabilities-day-name">
                                                lundi
                                              </div>
                                              <div className="availabilities-day-date">
                                                19 févr.
                                              </div>
                                            </div>
                                            <div className="availabilities-slots">
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="availabilities-day">
                                            <div className="availabilities-day-title">
                                              <div className="availabilities-day-name">
                                                mardi
                                              </div>
                                              <div className="availabilities-day-date">
                                                20 févr.
                                              </div>
                                            </div>
                                            <div className="availabilities-slots">
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-indisponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mar. 20 févr. 15:30"
                                                title="mar. 20 févr. 15:30"
                                                data-test="available-slot"
                                                style={{
                                                  webkitTapHighlightColor:
                                                    "rgba(0, 0, 0, 0)",
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                15:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-indisponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mar. 20 févr. 15:45"
                                                title="mar. 20 févr. 15:45"
                                                data-test="available-slot"
                                                style={{
                                                  webkitTapHighlightColor:
                                                    "rgba(0, 0, 0, 0)",
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                15:45
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mar. 20 févr. 17:00"
                                                title="mar. 20 févr. 17:00"
                                                data-test="available-slot"
                                                style={{
                                                  webkitTapHighlightColor:
                                                    "rgba(0, 0, 0, 0)",
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                17:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mar. 20 févr. 17:30"
                                                title="mar. 20 févr. 17:30"
                                                data-test="available-slot"
                                                style={{
                                                  webkitTapHighlightColor:
                                                    "rgba(0, 0, 0, 0)",
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                17:30
                                              </div>
                                            </div>
                                          </div>
                                          <div className="availabilities-day">
                                            <div className="availabilities-day-title">
                                              <div className="availabilities-day-name">
                                                mercredi
                                              </div>
                                              <div className="availabilities-day-date">
                                                21 févr.
                                              </div>
                                            </div>
                                            <div className="availabilities-slots">
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-indisponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 09:15"
                                                title="mer. 21 févr. 09:15"
                                                data-test="available-slot"
                                                style={{
                                                  webkitTapHighlightColor:
                                                    "rgba(0, 0, 0, 0)",
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 09:45"
                                                title="mer. 21 févr. 09:45"
                                                data-test="available-slot"
                                                style={{
                                                  webkitTapHighlightColor:
                                                    "rgba(0, 0, 0, 0)",
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:45
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 10:15"
                                                title="mer. 21 févr. 10:15"
                                                data-test="available-slot"
                                                style={{
                                                  webkitTapHighlightColor:
                                                    "rgba(0, 0, 0, 0)",
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                10:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 10:30"
                                                title="mer. 21 févr. 10:30"
                                                data-test="available-slot"
                                                style={{
                                                  webkitTapHighlightColor:
                                                    "rgba(0, 0, 0, 0)",
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                10:30
                                              </div>
                                            </div>
                                          </div>
                                          <div className="availabilities-day">
                                            <div className="availabilities-day-title">
                                              <div className="availabilities-day-name">
                                                jeudi
                                              </div>
                                              <div className="availabilities-day-date">
                                                22 févr.
                                              </div>
                                            </div>
                                            <div className="availabilities-slots">
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-indisponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 09:00"
                                                title="jeu. 22 févr. 09:00"
                                                data-test="available-slot"
                                                style={{
                                                  webkitTapHighlightColor:
                                                    "rgba(0, 0, 0, 0)",
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 09:15"
                                                title="jeu. 22 févr. 09:15"
                                                data-test="available-slot"
                                                style={{
                                                  webkitTapHighlightColor:
                                                    "rgba(0, 0, 0, 0)",
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-indisponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 09:30"
                                                title="jeu. 22 févr. 09:30"
                                                data-test="available-slot"
                                                style={{
                                                  webkitTapHighlightColor:
                                                    "rgba(0, 0, 0, 0)",
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 09:45"
                                                title="jeu. 22 févr. 09:45"
                                                data-test="available-slot"
                                                style={{
                                                  webkitTapHighlightColor:
                                                    "rgba(0, 0, 0, 0)",
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:45
                                              </div>
                                            </div>
                                          </div>
                                          <div className="availabilities-day">
                                            <div className="availabilities-day-title">
                                              <div className="availabilities-day-name">
                                                vendredi
                                              </div>
                                              <div className="availabilities-day-date">
                                                23 févr.
                                              </div>
                                            </div>
                                            <div className="availabilities-slots">
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 09:00"
                                                title="ven. 23 févr. 09:00"
                                                data-test="available-slot"
                                                style={{
                                                  webkitTapHighlightColor:
                                                    "rgba(0, 0, 0, 0)",
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 09:15"
                                                title="ven. 23 févr. 09:15"
                                                data-test="available-slot"
                                                style={{
                                                  webkitTapHighlightColor:
                                                    "rgba(0, 0, 0, 0)",
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 09:30"
                                                title="ven. 23 févr. 09:30"
                                                data-test="available-slot"
                                                style={{
                                                  webkitTapHighlightColor:
                                                    "rgba(0, 0, 0, 0)",
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 10:00"
                                                title="ven. 23 févr. 10:00"
                                                data-test="available-slot"
                                                style={{
                                                  webkitTapHighlightColor:
                                                    "rgba(0, 0, 0, 0)",
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                10:00
                                              </div>
                                            </div>
                                          </div>
                                          <div className="availabilities-day">
                                            <div className="availabilities-day-title">
                                              <div className="availabilities-day-name">
                                                samedi
                                              </div>
                                              <div className="availabilities-day-date">
                                                24 févr.
                                              </div>
                                            </div>
                                            <div className="availabilities-slots">
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="availabilities-pagination">
                                            <button
                                              aria-label="Disponibilités suivantes"
                                              title="Disponibilités suivantes"
                                              tabIndex={0}
                                              className="Tappable-inactive dl-icon-button dl-availabilities-pagination-icon-button dl-icon-button-small dl-icon-button-primary"
                                              role="button"
                                              type="button"
                                              data-design-system="oxygen"
                                              data-design-system-component="IconButton"
                                              style={{
                                                webkitTapHighlightColor:
                                                  "rgba(0, 0, 0, 0)",
                                                userSelect: "none",
                                                cursor: "pointer",
                                              }}
                                            >
                                              <div className="dl-icon-wrapper dl-position-relative">
                                                <svg
                                                  width="16"
                                                  height="16"
                                                  viewBox="0 0 16 16"
                                                  fill="currentColor"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  aria-hidden="true"
                                                  focusable="false"
                                                  className="dl-icon dl-icon-primary-110 dl-icon-small"
                                                  data-icon-name="solid/chevron-right"
                                                  data-design-system="oxygen"
                                                  data-design-system-component="Icon"
                                                >
                                                  <path d="M5.006 12.518c0-.211.07-.399.21-.54l3.962-3.96-3.961-3.985a.723.723 0 0 1 0-1.054.723.723 0 0 1 1.054 0l4.5 4.5a.723.723 0 0 1 0 1.054l-4.5 4.5a.723.723 0 0 1-1.054 0 .727.727 0 0 1-.211-.515Z"></path>
                                                </svg>
                                              </div>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    ) : (
                                      <div>
                                        <div
                                          className="dl-desktop-availabilities-days"
                                          style={{ opacity: "1" }}
                                        >
                                          <div className="availabilities-pagination availabilities-pagination-disabled">
                                            <button
                                              aria-label="Disponibilités précédentes"
                                              title="Disponibilités précédentes"
                                              tabIndex={0}
                                              className="Tappable-inactive dl-icon-button dl-availabilities-pagination-icon-button dl-icon-button-small dl-icon-button-primary"
                                              role="button"
                                              type="button"
                                              disabled=""
                                              data-design-system="oxygen"
                                              data-design-system-component="IconButton"
                                              style={{
                                                userSelect: "none",
                                                cursor: "pointer",
                                              }}
                                            >
                                              <div className="dl-icon-wrapper dl-position-relative">
                                                <svg
                                                  width="16"
                                                  height="16"
                                                  viewBox="0 0 16 16"
                                                  fill="currentColor"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  aria-hidden="true"
                                                  focusable="false"
                                                  className="dl-icon dl-icon-primary-110 dl-icon-small"
                                                  data-icon-name="solid/chevron-left"
                                                  data-design-system="oxygen"
                                                  data-design-system-component="Icon"
                                                >
                                                  <path d="M10.977 3.494c0 .211-.07.399-.211.54l-3.961 3.96 3.96 3.985a.723.723 0 0 1 0 1.054.723.723 0 0 1-1.054 0l-4.5-4.5a.723.723 0 0 1 0-1.054l4.5-4.5a.723.723 0 0 1 1.055 0c.14.14.21.328.21.515Z"></path>
                                                </svg>
                                              </div>
                                            </button>
                                          </div>
                                          <div className="availabilities-day">
                                            <div className="availabilities-day-title">
                                              <div className="availabilities-day-name">
                                                lundi
                                              </div>
                                              <div className="availabilities-day-date">
                                                19 févr.
                                              </div>
                                            </div>
                                            <div className="availabilities-slots">
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="availabilities-day">
                                            <div className="availabilities-day-title">
                                              <div className="availabilities-day-name">
                                                mardi
                                              </div>
                                              <div className="availabilities-day-date">
                                                20 févr.
                                              </div>
                                            </div>
                                            <div className="availabilities-slots">
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-indisponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mar. 20 févr. 09:00"
                                                title="mar. 20 févr. 09:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-indisponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mar. 20 févr. 09:15"
                                                title="mar. 20 févr. 09:15"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mar. 20 févr. 09:30"
                                                title="mar. 20 févr. 09:30"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mar. 20 févr. 09:45"
                                                title="mar. 20 févr. 09:45"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:45
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mar. 20 févr. 10:00"
                                                title="mar. 20 févr. 10:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                10:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mar. 20 févr. 11:15"
                                                title="mar. 20 févr. 11:15"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                11:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mar. 20 févr. 11:30"
                                                title="mar. 20 févr. 11:30"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                11:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mar. 20 févr. 15:30"
                                                title="mar. 20 févr. 15:30"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                15:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mar. 20 févr. 15:45"
                                                title="mar. 20 févr. 15:45"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                15:45
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mar. 20 févr. 16:00"
                                                title="mar. 20 févr. 16:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                16:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mar. 20 févr. 17:15"
                                                title="mar. 20 févr. 17:15"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                17:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mar. 20 févr. 18:00"
                                                title="mar. 20 févr. 18:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                18:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mar. 20 févr. 18:30"
                                                title="mar. 20 févr. 18:30"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                18:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mar. 20 févr. 18:45"
                                                title="mar. 20 févr. 18:45"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                18:45
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="availabilities-day">
                                            <div className="availabilities-day-title">
                                              <div className="availabilities-day-name">
                                                mercredi
                                              </div>
                                              <div className="availabilities-day-date">
                                                21 févr.
                                              </div>
                                            </div>
                                            <div className="availabilities-slots">
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-indisponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 09:00"
                                                title="mer. 21 févr. 09:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 09:15"
                                                title="mer. 21 févr. 09:15"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 09:30"
                                                title="mer. 21 févr. 09:30"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 09:45"
                                                title="mer. 21 févr. 09:45"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:45
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 10:00"
                                                title="mer. 21 févr. 10:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                10:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 10:15"
                                                title="mer. 21 févr. 10:15"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                10:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 10:30"
                                                title="mer. 21 févr. 10:30"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                10:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 10:45"
                                                title="mer. 21 févr. 10:45"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                10:45
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 11:00"
                                                title="mer. 21 févr. 11:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                11:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 11:15"
                                                title="mer. 21 févr. 11:15"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                11:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 11:30"
                                                title="mer. 21 févr. 11:30"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                11:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 11:45"
                                                title="mer. 21 févr. 11:45"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                11:45
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 16:45"
                                                title="mer. 21 févr. 16:45"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                16:45
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 17:00"
                                                title="mer. 21 févr. 17:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                17:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 17:15"
                                                title="mer. 21 févr. 17:15"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                17:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 17:30"
                                                title="mer. 21 févr. 17:30"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                17:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 17:45"
                                                title="mer. 21 févr. 17:45"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                17:45
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 18:00"
                                                title="mer. 21 févr. 18:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                18:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 18:15"
                                                title="mer. 21 févr. 18:15"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                18:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 18:30"
                                                title="mer. 21 févr. 18:30"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                18:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 18:45"
                                                title="mer. 21 févr. 18:45"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                18:45
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="mer. 21 févr. 19:00"
                                                title="mer. 21 févr. 19:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                19:00
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="availabilities-day">
                                            <div className="availabilities-day-title">
                                              <div className="availabilities-day-name">
                                                jeudi
                                              </div>
                                              <div className="availabilities-day-date">
                                                22 févr.
                                              </div>
                                            </div>
                                            <div className="availabilities-slots">
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-indisponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 09:00"
                                                title="jeu. 22 févr. 09:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 09:15"
                                                title="jeu. 22 févr. 09:15"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-indisponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 09:30"
                                                title="jeu. 22 févr. 09:30"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 09:45"
                                                title="jeu. 22 févr. 09:45"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:45
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 10:00"
                                                title="jeu. 22 févr. 10:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                10:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 10:15"
                                                title="jeu. 22 févr. 10:15"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                10:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 10:30"
                                                title="jeu. 22 févr. 10:30"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                10:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 10:45"
                                                title="jeu. 22 févr. 10:45"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                10:45
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 11:00"
                                                title="jeu. 22 févr. 11:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                11:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 11:15"
                                                title="jeu. 22 févr. 11:15"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                11:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 11:30"
                                                title="jeu. 22 févr. 11:30"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                11:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 11:45"
                                                title="jeu. 22 févr. 11:45"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                11:45
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 12:00"
                                                title="jeu. 22 févr. 12:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                12:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 14:00"
                                                title="jeu. 22 févr. 14:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                14:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 14:15"
                                                title="jeu. 22 févr. 14:15"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                14:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 14:30"
                                                title="jeu. 22 févr. 14:30"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                14:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 14:45"
                                                title="jeu. 22 févr. 14:45"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                14:45
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 15:00"
                                                title="jeu. 22 févr. 15:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                15:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 15:15"
                                                title="jeu. 22 févr. 15:15"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                15:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 15:30"
                                                title="jeu. 22 févr. 15:30"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                15:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 15:45"
                                                title="jeu. 22 févr. 15:45"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                15:45
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 16:00"
                                                title="jeu. 22 févr. 16:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                16:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 16:15"
                                                title="jeu. 22 févr. 16:15"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                16:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 16:30"
                                                title="jeu. 22 févr. 16:30"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                16:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 16:45"
                                                title="jeu. 22 févr. 16:45"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                16:45
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 17:00"
                                                title="jeu. 22 févr. 17:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                17:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 17:15"
                                                title="jeu. 22 févr. 17:15"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                17:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 17:30"
                                                title="jeu. 22 févr. 17:30"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                17:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 17:45"
                                                title="jeu. 22 févr. 17:45"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                17:45
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="jeu. 22 févr. 18:00"
                                                title="jeu. 22 févr. 18:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                18:00
                                              </div>
                                            </div>
                                          </div>
                                          <div className="availabilities-day">
                                            <div className="availabilities-day-title">
                                              <div className="availabilities-day-name">
                                                vendredi
                                              </div>
                                              <div className="availabilities-day-date">
                                                23 févr.
                                              </div>
                                            </div>
                                            <div className="availabilities-slots">
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 09:00"
                                                title="ven. 23 févr. 09:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 09:15"
                                                title="ven. 23 févr. 09:15"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 09:30"
                                                title="ven. 23 févr. 09:30"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 09:45"
                                                title="ven. 23 févr. 09:45"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                09:45
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 10:00"
                                                title="ven. 23 févr. 10:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                10:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 10:15"
                                                title="ven. 23 févr. 10:15"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                10:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 10:30"
                                                title="ven. 23 févr. 10:30"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                10:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 10:45"
                                                title="ven. 23 févr. 10:45"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                10:45
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 11:00"
                                                title="ven. 23 févr. 11:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                11:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 11:15"
                                                title="ven. 23 févr. 11:15"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                11:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 11:30"
                                                title="ven. 23 févr. 11:30"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                11:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 11:45"
                                                title="ven. 23 févr. 11:45"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                11:45
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 14:45"
                                                title="ven. 23 févr. 14:45"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                14:45
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 15:00"
                                                title="ven. 23 févr. 15:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                15:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 15:15"
                                                title="ven. 23 févr. 15:15"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                15:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 15:30"
                                                title="ven. 23 févr. 15:30"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                15:30
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 15:45"
                                                title="ven. 23 févr. 15:45"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                15:45
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 16:00"
                                                title="ven. 23 févr. 16:00"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                16:00
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 16:15"
                                                title="ven. 23 févr. 16:15"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                16:15
                                              </div>
                                              <div
                                                className="Tappable-inactive availabilities-slot availabilities-disponible "
                                                tabIndex={0}
                                                role="button"
                                                aria-label="ven. 23 févr. 16:30"
                                                title="ven. 23 févr. 16:30"
                                                data-test="available-slot"
                                                style={{
                                                  userSelect: "none",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                16:30
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="availabilities-day">
                                            <div className="availabilities-day-title">
                                              <div className="availabilities-day-name">
                                                samedi
                                              </div>
                                              <div className="availabilities-day-date">
                                                24 févr.
                                              </div>
                                            </div>
                                            <div className="availabilities-slots">
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                              <div className="availabilities-empty-slot">
                                                <div className="availabilities-empty-slot-dash"></div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="availabilities-pagination">
                                            <button
                                              aria-label="Disponibilités suivantes"
                                              title="Disponibilités suivantes"
                                              tabIndex={0}
                                              className="Tappable-inactive dl-icon-button dl-availabilities-pagination-icon-button dl-icon-button-small dl-icon-button-primary"
                                              role="button"
                                              type="button"
                                              data-design-system="oxygen"
                                              data-design-system-component="IconButton"
                                              style={{
                                                userSelect: "none",
                                                cursor: "pointer",
                                              }}
                                            >
                                              <div className="dl-icon-wrapper dl-position-relative">
                                                <svg
                                                  width="16"
                                                  height="16"
                                                  viewBox="0 0 16 16"
                                                  fill="currentColor"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  aria-hidden="true"
                                                  focusable="false"
                                                  className="dl-icon dl-icon-primary-110 dl-icon-small"
                                                  data-icon-name="solid/chevron-right"
                                                  data-design-system="oxygen"
                                                  data-design-system-component="Icon"
                                                >
                                                  <path d="M5.006 12.518c0-.211.07-.399.21-.54l3.962-3.96-3.961-3.985a.723.723 0 0 1 0-1.054.723.723 0 0 1 1.054 0l4.5 4.5a.723.723 0 0 1 0 1.054l-4.5 4.5a.723.723 0 0 1-1.054 0 .727.727 0 0 1-.211-.515Z"></path>
                                                </svg>
                                              </div>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    )}

                                    {/** */}

                                    <button
                                      onClick={handleButtonClick}
                                      className="Tappable-inactive dl-button-tertiary-primary dl-button dl-button-block dl-button-size-medium"
                                      type="button"
                                      data-design-system="oxygen"
                                      data-design-system-component="Button"
                                      style={{
                                        webkitTapHighlightColor:
                                          "rgba(0, 0, 0, 0)",
                                        userSelect: "none",
                                        cursor: "pointer",
                                      }}
                                    >
                                      {showFirstContent
                                        ? "Voir plus d'horaires"
                                        : "Voir moins d'horaires"}
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="availabilities-substition-description">
                                  <div className="availabilities-substitution-indicator-disponible"></div>
                                  <span className="availabilities-substition-name">
                                    Disponible
                                  </span>

                                  <div className="availabilities-substitution-indicator-indisponible"></div>
                                  <span className="availabilities-substition-name">
                                    Indisponible
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="dl-search-result"
                        id="search-result-2"
                        data-test="search-result-card"
                      >
                        <div className="dl-search-result-presentation">
                          <div className="dl-search-result-title-container">
                            <div className="dl-search-result-avatar">
                              <a
                                aria-hidden="true"
                                tabIndex={-1}
                                className="dl-link"
                                href=""
                                data-design-system="base"
                              >
                                <img
                                  src="src/assets/avatar_doctor.jpg"
                                  alt=""
                                  className="dl-image dl-image-rounded"
                                  data-design-system="base"
                                />
                              </a>
                            </div>
                            <div className="dl-search-result-title">
                              <div className="dl-flex-row dl-justify-between dl-align-items-center">
                                <a
                                  className="dl-link"
                                  href=""
                                  data-design-system="base"
                                >
                                  <h3
                                    className="dl-text dl-text-body dl-text-regular dl-text-s dl-text-primary-110"
                                    data-design-system="oxygen"
                                    data-design-system-component="Text"
                                    data-test="dl-search-result-name"
                                  >
                                    Dr DJAMAL AHMED BACHA
                                  </h3>
                                </a>
                              </div>
                              <div className="dl-search-result-subtitle">
                                <div
                                  className="text-sm md:text-base font-light text-gray-900 min-w-[max-content]"
                                  data-design-system="oxygen"
                                  data-design-system-component="Text"
                                >
                                  Médecin généraliste
                                </div>
                              </div>
                            </div>
                          </div>
                          <a href="" target="_blank" rel="noreferrer noopener">
                            <div className="ml-96">
                              <span
                                className="dl-text dl-text-body dl-text-regular dl-text-s"
                                data-design-system="oxygen"
                                data-design-system-component="Text"
                              >
                                90 Rue de la ZUNE
                              </span>
                              <div
                                className="dl-text dl-text-body dl-text-regular dl-text-s"
                                data-design-system="oxygen"
                                data-design-system-component="Text"
                              >
                                60840 ORAN
                              </div>
                            </div>
                          </a>
                          <div
                            className="dl-text dl-text-body dl-text-regular dl-text-s dl-text-neutral-090 !my-16"
                            data-design-system="oxygen"
                            data-design-system-component="Text"
                            style={{ paddingLeft: "30%" }}
                          >
                            {ratings2.map((item) => (
                              <div key={item.id}>
                                <StarRating
                                  rating={item.value}
                                  starRatedColor="blue"
                                  numberOfStars={5}
                                  name={`rating-${item.id}`}
                                  starDimension="20px"
                                />
                              </div>
                            ))}
                          </div>
                          <div className="flex dl-justify-center my-16">
                            <a
                              className="text-sm md:text-base font-semibold rounded-3xl px-7 py-3 bg-primary-ice text-white"
                              href=""
                              data-design-system="oxygen"
                              data-design-system-component="Button"
                              style={{
                                webkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                userSelect: "none",
                                cursor: "pointer",
                              }}
                            >
                              <span className="dl-button-label">
                                Prendre rendez-vous
                              </span>
                            </a>
                          </div>
                        </div>

                        <div className="dl-search-result-calendar">
                          <div style={{ overflow: "visible", width: "0px" }}>
                            <div
                              data-test="search-result-calendar"
                              style={{ width: "490px" }}
                            >
                              <div
                                style={{ overflow: "visible", width: "0px" }}
                              >
                                <div
                                  className="dl-desktop-availabilities dl-desktop-availabilities-flat"
                                  style={{ width: "490px" }}
                                >
                                  <div className="dl-desktop-availabilities-inner">
                                    <div
                                      className="dl-desktop-availabilities-days"
                                      style={{ opacity: "0.8" }}
                                    >
                                      <div className="availabilities-pagination availabilities-pagination-disabled">
                                        <button
                                          aria-label="Disponibilités précédentes"
                                          title="Disponibilités précédentes"
                                          tabIndex={0}
                                          className="Tappable-inactive dl-icon-button dl-availabilities-pagination-icon-button dl-icon-button-small dl-icon-button-primary"
                                          role="button"
                                          type="button"
                                          disabled=""
                                          data-design-system="oxygen"
                                          data-design-system-component="IconButton"
                                          style={{
                                            webkitTapHighlightColor:
                                              "rgba(0, 0, 0, 0)",
                                            userSelect: "none",
                                            cursor: "pointer",
                                          }}
                                        >
                                          <div className="dl-icon-wrapper dl-position-relative">
                                            <svg
                                              width="16"
                                              height="16"
                                              viewBox="0 0 16 16"
                                              fill="currentColor"
                                              xmlns="http://www.w3.org/2000/svg"
                                              aria-hidden="true"
                                              focusable="false"
                                              className="dl-icon dl-icon-primary-110 dl-icon-small"
                                              data-icon-name="solid/chevron-left"
                                              data-design-system="oxygen"
                                              data-design-system-component="Icon"
                                            >
                                              <path d="M10.977 3.494c0 .211-.07.399-.211.54l-3.961 3.96 3.96 3.985a.723.723 0 0 1 0 1.054.723.723 0 0 1-1.054 0l-4.5-4.5a.723.723 0 0 1 0-1.054l4.5-4.5a.723.723 0 0 1 1.055 0c.14.14.21.328.21.515Z"></path>
                                            </svg>
                                          </div>
                                        </button>
                                      </div>
                                      <div className="availabilities-day">
                                        <div className="availabilities-day-title">
                                          <div className="availabilities-day-name">
                                            lundi
                                          </div>
                                          <div className="availabilities-day-date">
                                            19 févr.
                                          </div>
                                        </div>
                                        <div className="availabilities-slots">
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="availabilities-day">
                                        <div className="availabilities-day-title">
                                          <div className="availabilities-day-name">
                                            mardi
                                          </div>
                                          <div className="availabilities-day-date">
                                            20 févr.
                                          </div>
                                        </div>
                                        <div className="availabilities-slots">
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="availabilities-day">
                                        <div className="availabilities-day-title">
                                          <div className="availabilities-day-name">
                                            mercredi
                                          </div>
                                          <div className="availabilities-day-date">
                                            21 févr.
                                          </div>
                                        </div>
                                        <div className="availabilities-slots">
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="availabilities-day">
                                        <div className="availabilities-day-title">
                                          <div className="availabilities-day-name">
                                            jeudi
                                          </div>
                                          <div className="availabilities-day-date">
                                            22 févr.
                                          </div>
                                        </div>
                                        <div className="availabilities-slots">
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="availabilities-day">
                                        <div className="availabilities-day-title">
                                          <div className="availabilities-day-name">
                                            vendredi
                                          </div>
                                          <div className="availabilities-day-date">
                                            23 févr.
                                          </div>
                                        </div>
                                        <div className="availabilities-slots">
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="availabilities-day">
                                        <div className="availabilities-day-title">
                                          <div className="availabilities-day-name">
                                            samedi
                                          </div>
                                          <div className="availabilities-day-date">
                                            24 févr.
                                          </div>
                                        </div>
                                        <div className="availabilities-slots">
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="availabilities-pagination">
                                        <button
                                          aria-label="Disponibilités suivantes"
                                          title="Disponibilités suivantes"
                                          tabIndex={0}
                                          className="Tappable-inactive dl-icon-button dl-availabilities-pagination-icon-button dl-icon-button-small dl-icon-button-primary"
                                          role="button"
                                          type="button"
                                          data-design-system="oxygen"
                                          data-design-system-component="IconButton"
                                          style={{
                                            webkitTapHighlightColor:
                                              "rgba(0, 0, 0, 0)",
                                            userSelect: "none",
                                            cursor: "pointer",
                                          }}
                                        >
                                          <div className="dl-icon-wrapper dl-position-relative">
                                            <svg
                                              width="16"
                                              height="16"
                                              viewBox="0 0 16 16"
                                              fill="currentColor"
                                              xmlns="http://www.w3.org/2000/svg"
                                              aria-hidden="true"
                                              focusable="false"
                                              className="dl-icon dl-icon-primary-110 dl-icon-small"
                                              data-icon-name="solid/chevron-right"
                                              data-design-system="oxygen"
                                              data-design-system-component="Icon"
                                            >
                                              <path d="M5.006 12.518c0-.211.07-.399.21-.54l3.962-3.96-3.961-3.985a.723.723 0 0 1 0-1.054.723.723 0 0 1 1.054 0l4.5 4.5a.723.723 0 0 1 0 1.054l-4.5 4.5a.723.723 0 0 1-1.054 0 .727.727 0 0 1-.211-.515Z"></path>
                                            </svg>
                                          </div>
                                        </button>
                                      </div>
                                    </div>
                                    <div className="dl-desktop-availabilities-overlay">
                                      <div className="h-full w-full rounded-lg p-24 flex flex-row justify-center items-center dl-primary-010-bg">
                                        <div className="dl-shadow-3 rounded-lg bg-white">
                                          <div
                                            className="Tappable-inactive dl-card dl-card-bg-white dl-card-variant-default dl-card-tappable"
                                            data-design-system="oxygen"
                                            data-design-system-component="Card"
                                            aria-live="polite"
                                            role="button"
                                            tabIndex={0}
                                            style={{
                                              webkitTapHighlightColor:
                                                "rgba(0, 0, 0, 0)",
                                              userSelect: "none",
                                              cursor: "pointer",
                                            }}
                                          >
                                            <div className="dl-card-content">
                                              <div className="flex flex-row justify-center items-center gap-8">
                                                <svg
                                                  width="16"
                                                  height="16"
                                                  viewBox="0 0 16 16"
                                                  fill="currentColor"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  aria-hidden="true"
                                                  focusable="false"
                                                  className="dl-icon dl-icon-primary-110 dl-icon-xsmall"
                                                  data-icon-name="solid/eye"
                                                  data-design-system="oxygen"
                                                  data-design-system-component="Icon"
                                                >
                                                  <path d="M7.79 5.773c.07 0 .14-.023.21-.023a2.25 2.25 0 0 1 0 4.5A2.236 2.236 0 0 1 5.75 8v-.188c.21.118.469.188.75.188C7.32 8 8 7.344 8 6.5c0-.258-.094-.516-.21-.727Zm4.71-1.125a9.14 9.14 0 0 1 2.18 3.07.84.84 0 0 1 0 .587c-.352.82-1.078 2.039-2.18 3.07-1.102 1.031-2.625 1.875-4.5 1.875-1.898 0-3.422-.844-4.523-1.875-1.102-1.031-1.829-2.25-2.18-3.07a.84.84 0 0 1 0-.586c.351-.844 1.078-2.063 2.18-3.07C4.578 3.616 6.102 2.75 8 2.75c1.875 0 3.398.867 4.5 1.898ZM8 4.625A3.376 3.376 0 0 0 4.625 8c0 1.875 1.5 3.375 3.375 3.375 1.852 0 3.375-1.5 3.375-3.375A3.391 3.391 0 0 0 8 4.625Z"></path>
                                                </svg>
                                                <div
                                                  className="dl-text dl-text-body dl-text-regular dl-text-s dl-text-left dl-text-primary-110"
                                                  data-design-system="oxygen"
                                                  data-design-system-component="Text"
                                                >
                                                  <span
                                                    data-design-system="oxygen"
                                                    data-design-system-component="HTML"
                                                  >
                                                    Prochain RDV le
                                                    <strong>
                                                      29 février 2024
                                                    </strong>
                                                  </span>
                                                </div>
                                                <svg
                                                  width="16"
                                                  height="16"
                                                  viewBox="0 0 16 16"
                                                  fill="currentColor"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  aria-hidden="true"
                                                  focusable="false"
                                                  className="dl-icon dl-icon-primary-110 dl-icon-xsmall"
                                                  data-icon-name="solid/chevron-right"
                                                  data-design-system="oxygen"
                                                  data-design-system-component="Icon"
                                                >
                                                  <path d="M5.006 12.518c0-.211.07-.399.21-.54l3.962-3.96-3.961-3.985a.723.723 0 0 1 0-1.054.723.723 0 0 1 1.054 0l4.5 4.5a.723.723 0 0 1 0 1.054l-4.5 4.5a.723.723 0 0 1-1.054 0 .727.727 0 0 1-.211-.515Z"></path>
                                                </svg>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
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
                        className="dl-search-result"
                        id="search-result-3"
                        data-test="search-result-card"
                      >
                        <div className="dl-search-result-presentation">
                          <div className="dl-search-result-title-container">
                            <div className="dl-search-result-avatar">
                              <a
                                aria-hidden="true"
                                tabIndex={-1}
                                className="dl-link"
                                href=""
                                data-design-system="base"
                              >
                                <img
                                  src="src/assets/avatar_doctor.jpg"
                                  alt=""
                                  className="dl-image dl-image-rounded"
                                  data-design-system="base"
                                />
                              </a>
                            </div>
                            <div className="dl-search-result-title">
                              <div className="dl-flex-row dl-justify-between dl-align-items-center">
                                <a
                                  className="dl-link"
                                  href=""
                                  data-design-system="base"
                                >
                                  <h3
                                    className="dl-text dl-text-body dl-text-regular dl-text-s dl-text-primary-110"
                                    data-design-system="oxygen"
                                    data-design-system-component="Text"
                                    data-test="dl-search-result-name"
                                  >
                                    Dr BELHADJ ABDELILLAH
                                  </h3>
                                </a>
                              </div>
                              <div className="dl-search-result-subtitle">
                                <div
                                  className="text-sm md:text-base font-light text-gray-900 min-w-[max-content]"
                                  data-design-system="oxygen"
                                  data-design-system-component="Text"
                                >
                                  Médecin généraliste
                                </div>
                              </div>
                            </div>
                          </div>
                          <a href="" target="_blank" rel="noreferrer noopener">
                            <div className="ml-96">
                              <span
                                className="dl-text dl-text-body dl-text-regular dl-text-s"
                                data-design-system="oxygen"
                                data-design-system-component="Text"
                              >
                                90 Rue de la Zune
                              </span>
                              <div
                                className="dl-text dl-text-body dl-text-regular dl-text-s"
                                data-design-system="oxygen"
                                data-design-system-component="Text"
                              >
                                60840 Oran
                              </div>
                            </div>
                          </a>
                          <div
                            className="dl-text dl-text-body dl-text-regular dl-text-s dl-text-neutral-090 !my-16"
                            data-design-system="oxygen"
                            data-design-system-component="Text"
                            style={{ paddingLeft: "30%" }}
                          >
                            {ratings3.map((item) => (
                              <div key={item.id}>
                                <StarRating
                                  rating={item.value}
                                  starRatedColor="blue"
                                  numberOfStars={5}
                                  name={`rating-${item.id}`}
                                  starDimension="20px"
                                />
                              </div>
                            ))}
                          </div>
                          <div className="flex dl-justify-center my-16">
                            <a
                              className="text-sm md:text-base font-semibold rounded-3xl px-7 py-3 bg-primary-ice text-white"
                              href=""
                              data-design-system="oxygen"
                              data-design-system-component="Button"
                              style={{
                                webkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                userSelect: "none",
                                cursor: "pointer",
                              }}
                            >
                              <span className="dl-button-label">
                                Prendre rendez-vous
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="dl-search-result-calendar">
                          <div style={{ overflow: "visible", width: "0px" }}>
                            <div
                              data-test="search-result-calendar"
                              style={{ width: "490px" }}
                            >
                              <div
                                style={{ overflow: "visible", width: "0px" }}
                              >
                                <div
                                  className="dl-desktop-availabilities dl-desktop-availabilities-flat"
                                  style={{ width: "490px" }}
                                >
                                  <div className="dl-desktop-availabilities-inner">
                                    <div
                                      className="dl-desktop-availabilities-days"
                                      style={{ opacity: "0.8" }}
                                    >
                                      <div className="availabilities-pagination availabilities-pagination-disabled">
                                        <button
                                          aria-label="Disponibilités précédentes"
                                          title="Disponibilités précédentes"
                                          tabIndex={0}
                                          className="Tappable-inactive dl-icon-button dl-availabilities-pagination-icon-button dl-icon-button-small dl-icon-button-primary"
                                          role="button"
                                          type="button"
                                          disabled=""
                                          data-design-system="oxygen"
                                          data-design-system-component="IconButton"
                                          style={{
                                            webkitTapHighlightColor:
                                              "rgba(0, 0, 0, 0)",
                                            userSelect: "none",
                                            cursor: "pointer",
                                          }}
                                        >
                                          <div className="dl-icon-wrapper dl-position-relative">
                                            <svg
                                              width="16"
                                              height="16"
                                              viewBox="0 0 16 16"
                                              fill="currentColor"
                                              xmlns="http://www.w3.org/2000/svg"
                                              aria-hidden="true"
                                              focusable="false"
                                              className="dl-icon dl-icon-primary-110 dl-icon-small"
                                              data-icon-name="solid/chevron-left"
                                              data-design-system="oxygen"
                                              data-design-system-component="Icon"
                                            >
                                              <path d="M10.977 3.494c0 .211-.07.399-.211.54l-3.961 3.96 3.96 3.985a.723.723 0 0 1 0 1.054.723.723 0 0 1-1.054 0l-4.5-4.5a.723.723 0 0 1 0-1.054l4.5-4.5a.723.723 0 0 1 1.055 0c.14.14.21.328.21.515Z"></path>
                                            </svg>
                                          </div>
                                        </button>
                                      </div>
                                      <div className="availabilities-day">
                                        <div className="availabilities-day-title">
                                          <div className="availabilities-day-name">
                                            lundi
                                          </div>
                                          <div className="availabilities-day-date">
                                            19 févr.
                                          </div>
                                        </div>
                                        <div className="availabilities-slots">
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="availabilities-day">
                                        <div className="availabilities-day-title">
                                          <div className="availabilities-day-name">
                                            mardi
                                          </div>
                                          <div className="availabilities-day-date">
                                            20 févr.
                                          </div>
                                        </div>
                                        <div className="availabilities-slots">
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="availabilities-day">
                                        <div className="availabilities-day-title">
                                          <div className="availabilities-day-name">
                                            mercredi
                                          </div>
                                          <div className="availabilities-day-date">
                                            21 févr.
                                          </div>
                                        </div>
                                        <div className="availabilities-slots">
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="availabilities-day">
                                        <div className="availabilities-day-title">
                                          <div className="availabilities-day-name">
                                            jeudi
                                          </div>
                                          <div className="availabilities-day-date">
                                            22 févr.
                                          </div>
                                        </div>
                                        <div className="availabilities-slots">
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="availabilities-day">
                                        <div className="availabilities-day-title">
                                          <div className="availabilities-day-name">
                                            vendredi
                                          </div>
                                          <div className="availabilities-day-date">
                                            23 févr.
                                          </div>
                                        </div>
                                        <div className="availabilities-slots">
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="availabilities-day">
                                        <div className="availabilities-day-title">
                                          <div className="availabilities-day-name">
                                            samedi
                                          </div>
                                          <div className="availabilities-day-date">
                                            24 févr.
                                          </div>
                                        </div>
                                        <div className="availabilities-slots">
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="availabilities-pagination">
                                        <button
                                          aria-label="Disponibilités suivantes"
                                          title="Disponibilités suivantes"
                                          tabIndex={0}
                                          className="Tappable-inactive dl-icon-button dl-availabilities-pagination-icon-button dl-icon-button-small dl-icon-button-primary"
                                          role="button"
                                          type="button"
                                          data-design-system="oxygen"
                                          data-design-system-component="IconButton"
                                          style={{
                                            webkitTapHighlightColor:
                                              "rgba(0, 0, 0, 0)",
                                            userSelect: "none",
                                            cursor: "pointer",
                                          }}
                                        >
                                          <div className="dl-icon-wrapper dl-position-relative">
                                            <svg
                                              width="16"
                                              height="16"
                                              viewBox="0 0 16 16"
                                              fill="currentColor"
                                              xmlns="http://www.w3.org/2000/svg"
                                              aria-hidden="true"
                                              focusable="false"
                                              className="dl-icon dl-icon-primary-110 dl-icon-small"
                                              data-icon-name="solid/chevron-right"
                                              data-design-system="oxygen"
                                              data-design-system-component="Icon"
                                            >
                                              <path d="M5.006 12.518c0-.211.07-.399.21-.54l3.962-3.96-3.961-3.985a.723.723 0 0 1 0-1.054.723.723 0 0 1 1.054 0l4.5 4.5a.723.723 0 0 1 0 1.054l-4.5 4.5a.723.723 0 0 1-1.054 0 .727.727 0 0 1-.211-.515Z"></path>
                                            </svg>
                                          </div>
                                        </button>
                                      </div>
                                    </div>
                                    <div className="dl-desktop-availabilities-overlay">
                                      <div className="h-full w-full rounded-lg p-24 flex flex-row justify-center items-center dl-primary-010-bg">
                                        <div className="dl-shadow-3 rounded-lg bg-white">
                                          <div
                                            className="Tappable-inactive dl-card dl-card-bg-white dl-card-variant-default dl-card-tappable"
                                            data-design-system="oxygen"
                                            data-design-system-component="Card"
                                            aria-live="polite"
                                            role="button"
                                            tabIndex={0}
                                            style={{
                                              webkitTapHighlightColor:
                                                "rgba(0, 0, 0, 0)",
                                              userSelect: "none",
                                              cursor: "pointer",
                                            }}
                                          >
                                            <div className="dl-card-content">
                                              <div className="flex flex-row justify-center items-center gap-8">
                                                <svg
                                                  width="16"
                                                  height="16"
                                                  viewBox="0 0 16 16"
                                                  fill="currentColor"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  aria-hidden="true"
                                                  focusable="false"
                                                  className="dl-icon dl-icon-primary-110 dl-icon-xsmall"
                                                  data-icon-name="solid/eye"
                                                  data-design-system="oxygen"
                                                  data-design-system-component="Icon"
                                                >
                                                  <path d="M7.79 5.773c.07 0 .14-.023.21-.023a2.25 2.25 0 0 1 0 4.5A2.236 2.236 0 0 1 5.75 8v-.188c.21.118.469.188.75.188C7.32 8 8 7.344 8 6.5c0-.258-.094-.516-.21-.727Zm4.71-1.125a9.14 9.14 0 0 1 2.18 3.07.84.84 0 0 1 0 .587c-.352.82-1.078 2.039-2.18 3.07-1.102 1.031-2.625 1.875-4.5 1.875-1.898 0-3.422-.844-4.523-1.875-1.102-1.031-1.829-2.25-2.18-3.07a.84.84 0 0 1 0-.586c.351-.844 1.078-2.063 2.18-3.07C4.578 3.616 6.102 2.75 8 2.75c1.875 0 3.398.867 4.5 1.898ZM8 4.625A3.376 3.376 0 0 0 4.625 8c0 1.875 1.5 3.375 3.375 3.375 1.852 0 3.375-1.5 3.375-3.375A3.391 3.391 0 0 0 8 4.625Z"></path>
                                                </svg>
                                                <div
                                                  className="dl-text dl-text-body dl-text-regular dl-text-s dl-text-left dl-text-primary-110"
                                                  data-design-system="oxygen"
                                                  data-design-system-component="Text"
                                                >
                                                  <span
                                                    data-design-system="oxygen"
                                                    data-design-system-component="HTML"
                                                  >
                                                    Prochain RDV le
                                                    <strong>
                                                      26 février 2024
                                                    </strong>
                                                  </span>
                                                </div>
                                                <svg
                                                  width="16"
                                                  height="16"
                                                  viewBox="0 0 16 16"
                                                  fill="currentColor"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  aria-hidden="true"
                                                  focusable="false"
                                                  className="dl-icon dl-icon-primary-110 dl-icon-xsmall"
                                                  data-icon-name="solid/chevron-right"
                                                  data-design-system="oxygen"
                                                  data-design-system-component="Icon"
                                                >
                                                  <path d="M5.006 12.518c0-.211.07-.399.21-.54l3.962-3.96-3.961-3.985a.723.723 0 0 1 0-1.054.723.723 0 0 1 1.054 0l4.5 4.5a.723.723 0 0 1 0 1.054l-4.5 4.5a.723.723 0 0 1-1.054 0 .727.727 0 0 1-.211-.515Z"></path>
                                                </svg>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
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
                        className="dl-search-result"
                        id="search-result-4"
                        data-test="search-result-card"
                      >
                        <div className="dl-search-result-presentation">
                          <div className="dl-search-result-title-container">
                            <div className="dl-search-result-avatar">
                              <a
                                aria-hidden="true"
                                tabIndex={0}
                                className="dl-link"
                                href=""
                                data-design-system="base"
                              >
                                <img
                                  src="src/assets/avatar_doctor.jpg"
                                  alt=""
                                  className="dl-image dl-image-rounded"
                                  data-design-system="base"
                                />
                              </a>
                            </div>
                            <div className="dl-search-result-title">
                              <div className="dl-flex-row dl-justify-between dl-align-items-center">
                                <a
                                  className="dl-link"
                                  href=""
                                  data-design-system="base"
                                >
                                  <h3
                                    className="dl-text dl-text-body dl-text-regular dl-text-s dl-text-primary-110"
                                    data-design-system="oxygen"
                                    data-design-system-component="Text"
                                    data-test="dl-search-result-name"
                                  >
                                    Dr DJAMAL AHMED BACHA
                                  </h3>
                                </a>
                              </div>
                              <div className="dl-search-result-subtitle">
                                <div
                                  className="text-sm md:text-base font-light text-gray-900 min-w-[max-content]"
                                  data-design-system="oxygen"
                                  data-design-system-component="Text"
                                >
                                  Médecin généraliste
                                </div>
                              </div>
                            </div>
                          </div>
                          <a href="" target="_blank" rel="noreferrer noopener">
                            <div className="ml-96">
                              <span
                                className="dl-text dl-text-body dl-text-regular dl-text-s"
                                data-design-system="oxygen"
                                data-design-system-component="Text"
                              >
                                90 Rue de la Zune
                              </span>
                              <div
                                className="dl-text dl-text-body dl-text-regular dl-text-s"
                                data-design-system="oxygen"
                                data-design-system-component="Text"
                              >
                                60840 Oran
                              </div>
                            </div>
                          </a>
                          <div
                            className="dl-text dl-text-body dl-text-regular dl-text-s dl-text-neutral-090 !my-16"
                            data-design-system="oxygen"
                            data-design-system-component="Text"
                            style={{ paddingLeft: "30%" }}
                          >
                            {ratings4.map((item) => (
                              <div key={item.id}>
                                <StarRating
                                  rating={item.value}
                                  starRatedColor="blue"
                                  numberOfStars={5}
                                  name={`rating-${item.id}`}
                                  starDimension="20px"
                                />
                              </div>
                            ))}
                          </div>
                          <div className="flex dl-justify-center my-16">
                            <a
                              className="text-sm md:text-base font-semibold rounded-3xl px-7 py-3 bg-primary-ice text-white"
                              href=""
                              data-design-system="oxygen"
                              data-design-system-component="Button"
                              style={{ userSelect: "none", cursor: "pointer" }}
                            >
                              <span className="dl-button-label">
                                Prendre rendez-vous
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="dl-search-result-calendar">
                          <div style={{ overflow: "visible", width: "0px" }}>
                            <div
                              style={{ width: "490px" }}
                              data-test="search-result-calendar"
                            >
                              <div
                                style={{ overflow: "visible", width: "0px" }}
                              >
                                <div
                                  className="dl-desktop-availabilities dl-desktop-availabilities-flat"
                                  style={{ width: "490px" }}
                                >
                                  <div className="dl-desktop-availabilities-inner">
                                    <div
                                      className="dl-desktop-availabilities-days"
                                      style={{ opacity: "0.8" }}
                                    >
                                      <div className="availabilities-pagination">
                                        <button
                                          aria-label="Disponibilités précédentes"
                                          title="Disponibilités précédentes"
                                          tabIndex={0}
                                          className="Tappable-inactive dl-icon-button dl-availabilities-pagination-icon-button dl-icon-button-small dl-icon-button-primary"
                                          role="button"
                                          type="button"
                                          data-design-system="oxygen"
                                          data-design-system-component="IconButton"
                                          style={{
                                            userSelect: "none",
                                            cursor: "pointer",
                                          }}
                                        >
                                          <div className="dl-icon-wrapper dl-position-relative">
                                            <svg
                                              width="16"
                                              height="16"
                                              viewBox="0 0 16 16"
                                              fill="currentColor"
                                              xmlns="http://www.w3.org/2000/svg"
                                              aria-hidden="true"
                                              focusable="false"
                                              className="dl-icon dl-icon-primary-110 dl-icon-small"
                                              data-icon-name="solid/chevron-left"
                                              data-design-system="oxygen"
                                              data-design-system-component="Icon"
                                            >
                                              <path d="M10.977 3.494c0 .211-.07.399-.211.54l-3.961 3.96 3.96 3.985a.723.723 0 0 1 0 1.054.723.723 0 0 1-1.054 0l-4.5-4.5a.723.723 0 0 1 0-1.054l4.5-4.5a.723.723 0 0 1 1.055 0c.14.14.21.328.21.515Z"></path>
                                            </svg>
                                          </div>
                                        </button>
                                      </div>
                                      <div className="availabilities-day">
                                        <div className="availabilities-day-title">
                                          <div className="availabilities-day-name">
                                            jeudi
                                          </div>
                                          <div className="availabilities-day-date">
                                            22 févr.
                                          </div>
                                        </div>
                                        <div className="availabilities-slots">
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="availabilities-day">
                                        <div className="availabilities-day-title">
                                          <div className="availabilities-day-name">
                                            vendredi
                                          </div>
                                          <div className="availabilities-day-date">
                                            23 févr.
                                          </div>
                                        </div>
                                        <div className="availabilities-slots">
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="availabilities-day">
                                        <div className="availabilities-day-title">
                                          <div className="availabilities-day-name">
                                            samedi
                                          </div>
                                          <div className="availabilities-day-date">
                                            24 févr.
                                          </div>
                                        </div>
                                        <div className="availabilities-slots">
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="availabilities-day">
                                        <div className="availabilities-day-title">
                                          <div className="availabilities-day-name">
                                            dimanche
                                          </div>
                                          <div className="availabilities-day-date">
                                            25 févr.
                                          </div>
                                        </div>
                                        <div className="availabilities-slots">
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="availabilities-day">
                                        <div className="availabilities-day-title">
                                          <div className="availabilities-day-name">
                                            lundi
                                          </div>
                                          <div className="availabilities-day-date">
                                            26 févr.
                                          </div>
                                        </div>
                                        <div className="availabilities-slots">
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="availabilities-day">
                                        <div className="availabilities-day-title">
                                          <div className="availabilities-day-name">
                                            mardi
                                          </div>
                                          <div className="availabilities-day-date">
                                            27 févr.
                                          </div>
                                        </div>
                                        <div className="availabilities-slots">
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                          <div className="availabilities-empty-slot">
                                            <div className="availabilities-empty-slot-dash"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="availabilities-pagination availabilities-pagination-disabled">
                                        <button
                                          aria-label="Disponibilités suivantes"
                                          title="Disponibilités suivantes"
                                          tabIndex={0}
                                          className="Tappable-inactive dl-icon-button dl-availabilities-pagination-icon-button dl-icon-button-small dl-icon-button-primary"
                                          role="button"
                                          type="button"
                                          data-design-system="oxygen"
                                          data-design-system-component="IconButton"
                                          style={{
                                            userSelect: "none",
                                            cursor: "pointer",
                                          }}
                                          disabled=""
                                        >
                                          <div className="dl-icon-wrapper dl-position-relative">
                                            <svg
                                              width="16"
                                              height="16"
                                              viewBox="0 0 16 16"
                                              fill="currentColor"
                                              xmlns="http://www.w3.org/2000/svg"
                                              aria-hidden="true"
                                              focusable="false"
                                              className="dl-icon dl-icon-primary-110 dl-icon-small"
                                              data-icon-name="solid/chevron-right"
                                              data-design-system="oxygen"
                                              data-design-system-component="Icon"
                                            >
                                              <path d="M5.006 12.518c0-.211.07-.399.21-.54l3.962-3.96-3.961-3.985a.723.723 0 0 1 0-1.054.723.723 0 0 1 1.054 0l4.5 4.5a.723.723 0 0 1 0 1.054l-4.5 4.5a.723.723 0 0 1-1.054 0 .727.727 0 0 1-.211-.515Z"></path>
                                            </svg>
                                          </div>
                                        </button>
                                      </div>
                                    </div>
                                    <div className="dl-desktop-availabilities-overlay">
                                      <div className="h-full w-full rounded-lg p-24 flex flex-row justify-center items-center dl-neutral-010-bg">
                                        <div className="flex flex-row justify-center items-start gap-8">
                                          <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            focusable="false"
                                            className="dl-icon mr-8 my-4 dl-icon-neutral-110 dl-icon-xsmall"
                                            data-icon-name="regular/calendar-xmark"
                                            data-design-system="oxygen"
                                            data-design-system-component="Icon"
                                          >
                                            <path d="m8.773 9.688 1.102 1.101c.234.234.234.586 0 .797a.513.513 0 0 1-.773 0L8 10.484l-1.125 1.102a.513.513 0 0 1-.773 0c-.235-.211-.235-.563 0-.797l1.101-1.101-1.101-1.102c-.235-.211-.235-.563 0-.797.21-.21.562-.21.773 0L8 8.914 9.102 7.79c.21-.21.562-.21.773 0 .234.234.234.586 0 .797l-1.102 1.1ZM5.75 2a.57.57 0 0 1 .563.563V3.5h3.375v-.938c0-.304.234-.562.562-.562a.57.57 0 0 1 .563.563V3.5h.937c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5h-7.5a1.48 1.48 0 0 1-1.5-1.5V5c0-.82.656-1.5 1.5-1.5h.938v-.938c0-.304.234-.562.562-.562Zm6.375 4.5h-8.25v6c0 .21.164.375.375.375h7.5a.385.385 0 0 0 .375-.375v-6Z"></path>
                                          </svg>
                                          <div
                                            className="dl-text dl-text-body dl-text-regular dl-text-s dl-text-left dl-text-neutral-130"
                                            data-design-system="oxygen"
                                            data-design-system-component="Text"
                                          >
                                            Aucune disponibilité en ligne ,vous
                                            pouvez contacter le secrétariat au :
                                            0664189325
                                          </div>
                                        </div>
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
                        className="dl-flex-column gap-y-16"
                        data-test="search-paginator"
                      >
                        <div className="dl-flex-row dl-justify-between dl-align-items-center">
                          <button
                            className="Tappable-inactive dl-button-tertiary-primary previous-link dl-button dl-button-size-medium"
                            type="button"
                            disabled=""
                            data-design-system="oxygen"
                            data-design-system-component="Button"
                            style={{
                              webkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              userSelect: "none",
                              cursor: "pointer",
                            }}
                          >
                            <span className="dl-button-label">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                className="dl-icon dl-button-left-icon dl-icon-xsmall"
                                data-icon-name="solid/chevron-left"
                                data-design-system="oxygen"
                                data-design-system-component="Icon"
                              >
                                <path d="M10.977 3.494c0 .211-.07.399-.211.54l-3.961 3.96 3.96 3.985a.723.723 0 0 1 0 1.054.723.723 0 0 1-1.054 0l-4.5-4.5a.723.723 0 0 1 0-1.054l4.5-4.5a.723.723 0 0 1 1.055 0c.14.14.21.328.21.515Z"></path>
                              </svg>
                              Précédent
                            </span>
                          </button>
                          <button
                            className="Tappable-inactive dl-button-tertiary-primary next-link dl-button dl-button-size-medium"
                            type="button"
                            data-design-system="oxygen"
                            data-design-system-component="Button"
                            style={{
                              webkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              userSelect: "none",
                              cursor: "pointer",
                            }}
                          >
                            <span className="dl-button-label">
                              Suivant
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                className="dl-icon dl-button-right-icon dl-icon-xsmall"
                                data-icon-name="solid/chevron-right"
                                data-design-system="oxygen"
                                data-design-system-component="Icon"
                              >
                                <path d="M5.006 12.518c0-.211.07-.399.21-.54l3.962-3.96-3.961-3.985a.723.723 0 0 1 0-1.054.723.723 0 0 1 1.054 0l4.5 4.5a.723.723 0 0 1 0 1.054l-4.5 4.5a.723.723 0 0 1-1.054 0 .727.727 0 0 1-.211-.515Z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/*Map */}
                    <div className="show-lg-screen col-4 col-padding search-results-col-map">
                      <div
                        id="booking-search-results-map"
                        className="dl-rounded-borders"
                      >
                        <div className="map-container dl-border-radius-inherit booking-search-results-map snapshot-black">
                          <div
                            className="dl-full-width dl-full-height dl-position-absolute dl-border-radius-inherit"
                            style={{ overflow: "hidden" }}
                          >
                            <div
                              style={{
                                height: "100%",
                                width: "100%",
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                backgroundColor: "rgb(229, 227, 223)",
                              }}
                            >
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14468796.894767692!2d-8.965395742697925!3d27.704281253446712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e8a6a28037bd1%3A0x7140bee3abd7f8a2!2zQWxnw6lyaWU!5e0!3m2!1sfr!2sdz!4v1708558499416!5m2!1sfr!2sdz"
                                width="600"
                                height="450"
                                style={{ border: "0" }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                              ></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
export default Recherche;
