
import "../Médecin/Medecin.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import  { useState } from "react";
import PrenezRDV from "../Médecin/PrenezRDV.jsx";
import { Menu2 } from "../../Components/menu/Menu2";
function Medecin() {
    const [activeItem, setActiveItem] = useState("Item 1");

    const handleItemClick = (item) => {
      setActiveItem(item);
    };
       const [showFirstContent, setShowFirstContent] = useState(false);

       const handleRadioClick = () => {
         // setShowFirstContent(!showFirstContent);
         setShowFirstContent(true);
       };
       const [showLastContent, setShowLastContent] = useState(false);

       const handleBoxClick = () => {
         setShowLastContent(true);
       };
       const [showContent, setShowContent] = useState(true);

       const handleButtonClick = () => {
         setShowContent(!showContent);
       };

  return (
    <>
      <div className="Main">
        {/**Header */}
        <header className="Header">
          <div className="w-full h-full py-3 flex md:gap-12 items-center justify-between px-3 md:px-8 md:px-5 lg:px-9 shadow-sh-112-8">
            <Link
              className="ps-3 lg:w-52 !h-[56px] !w-[124px] flex items-center justify-start"
              to="/"
            >
              <div className=" md:flex md:items-center md:justify-center">
                <img
                  src={logo}
                  width="124"
                  height="56"
                  className="lg:w-52"
                  alt=""
                  loading="eager"
                />
              </div>
            </Link>
            <div className="Menuaff flex md:hidden min-w-[1.5em] min-h-[1.5em] ">
              <Menu2></Menu2>
            </div>
            <div className="Menuadiff flex justify-end ms-auto">
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
        <main>
          <div
            className="bg-p-cover od-profile od-profile--bookable"
            data-professional-id="96172"
            data-entity-id="20972"
            data-calendar-id="31312"
            data-professional-selection="single-or-any"
          >
            <header className="od-profile-header">
              <div className="od-profile-header-wrapper">
                <div className="od-profile-header-picture">
                  <img
                    alt=" Dr BELHADJ ABDELILLAH"
                    title=" Dr BELHADJ ABDELILLAH"
                    src="src/assets/avatar_doctor.jpg"
                  />
                </div>
                <div className="od-profile-header-description">
                  <h1 className="od-profile-header-description-name">
                    Dr BELHADJ ABDELILLAH
                  </h1>
                  <h2 className="od-profile-header-description-specialty">
                    Médecin généraliste
                  </h2>
                </div>
              </div>
            </header>
            <nav className="od-profile-nav">
              <div className="od-profile-nav-wrapper">
                <div className="od-profile-nav-items">
                  <div
                    data-target="summary"
                    className={
                      activeItem === "Item 1"
                        ? "od-profile-nav-item active"
                        : "od-profile-nav-item"
                    }
                  >
                    Résumé
                  </div>
                  <div
                    className={
                      activeItem === "Item 2"
                        ? "od-profile-nav-item active"
                        : "od-profile-nav-item"
                    }
                    data-target="map"
                  >
                    Carte
                  </div>
                  <div
                    className={
                      activeItem === "Item 3"
                        ? "od-profile-nav-item active"
                        : "od-profile-nav-item"
                    }
                    data-target="description"
                  >
                    Présentation
                  </div>
                  <div
                    className={
                      activeItem === "Item 4"
                        ? "od-profile-nav-item active"
                        : "od-profile-nav-item"
                    }
                    data-target="description"
                  >
                    Reviews
                  </div>
                </div>
              </div>
            </nav>
            <div className="od-profile-content">
              <div className="od-profile-content-body">
                <div id="profile-summary" className="od-profile-anchor"></div>
                <div
                  className="od-profile-card"
                  onMouseMove={() => handleItemClick("Item 1")}
                >
                  <div className="od-profile-card-section">
                    <div className="od-profile-card-section-header">
                      <img
                        className="od-profile-card-section-icon"
                        src="src/assets/image_Medecin/expertises-svg.svg"
                      />
                      <h3 className="od-profile-card-section-title">
                        Expertises et actes
                      </h3>
                    </div>
                    <div className="od-profile-card-section-body">
                      <div className="od-profile-chip-set">
                        <div className="od-profile-chip">Infiltration</div>
                        <div className="od-profile-chip">
                          Médecin agréé permis de conduire
                        </div>
                        <div className="od-profile-chip">Mésothérapie</div>
                        <div className="od-profile-chip">Épilation laser</div>
                      </div>
                    </div>
                  </div>
                  <div className="od-profile-card-section-blank-separator"></div>
                  <div className="od-profile-card-section">
                    <div className="od-profile-card-section-header">
                      <img
                        className="od-profile-card-section-icon"
                        src="src/assets/image_Medecin/specialties-svg.svg"
                      />
                      <h3 className="od-profile-card-section-title">
                        Diplômes
                      </h3>
                    </div>
                    <div className="od-profile-card-section-body">
                      <div className="od-profile-chip-set">
                        <div className="od-profile-chip">
                          DE (diplôme d&apos;État) de docteur en médecine
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="profile-map" className="od-profile-anchor"></div>
                <div
                  className="od-profile-card"
                  onMouseMove={() => handleItemClick("Item 2")}
                >
                  <div className="od-profile-card-section od-profile-card-section-map">
                    <div className="od-profile-card-section-map-content">
                      <div className="od-profile-card-section-header">
                        <img
                          className="od-profile-card-section-icon"
                          src="src/assets/image_Medecin/map-svg.svg"
                        />
                        <h3 className="od-profile-card-section-title">
                          Carte et informations d&apos;accès
                        </h3>
                      </div>
                      <div className="od-profile-card-section-body">
                        <p>
                          90 Rue de la Zune
                          <br />
                          60840 Algérie
                        </p>
                      </div>
                      <div className="od-profile-card-section-blank-separator"></div>
                      <div className="od-profile-card-section-body">
                        <h4>Heures d&apos;ouverture</h4>
                        <div className="od-profile-opening-day">
                          <div className="od-profile-opening-day-label">
                            lundi:
                          </div>
                          <div className="od-profile-opening-day-times">
                            08:00 - 12:00 et 13:30 - 17:30
                          </div>
                        </div>
                        <div className="od-profile-opening-day">
                          <div className="od-profile-opening-day-label">
                            mardi:
                          </div>
                          <div className="od-profile-opening-day-times">
                            08:00 - 12:00 et 13:30 - 17:30
                          </div>
                        </div>
                        <div className="od-profile-opening-day">
                          <div className="od-profile-opening-day-label">
                            mercredi:
                          </div>
                          <div className="od-profile-opening-day-times">
                            08:00 - 12:00 et 13:30 - 17:30
                          </div>
                        </div>
                        <div className="od-profile-opening-day">
                          <div className="od-profile-opening-day-label">
                            jeudi:
                          </div>
                          <div className="od-profile-opening-day-times">
                            08:00 - 12:00 et 13:30 - 17:30
                          </div>
                        </div>
                        <div className="od-profile-opening-day">
                          <div className="od-profile-opening-day-label">
                            dimanche:
                          </div>
                          <div className="od-profile-opening-day-times">
                            08:00 - 12:00 et 13:30 - 17:30
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="od-profile-card-section-map-image">
                      <iframe
                        className="od-profile-googlemaps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14468796.894767692!2d-8.965395742697925!3d27.704281253446712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e8a6a28037bd1%3A0x7140bee3abd7f8a2!2zQWxnw6lyaWU!5e0!3m2!1sfr!2sdz!4v1708558499416!5m2!1sfr!2sdz"
                        width="330"
                        height="322"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div
                  id="profile-description"
                  className="od-profile-anchor"
                ></div>
                <div
                  className="od-profile-card"
                  onMouseMove={() => handleItemClick("Item 3")}
                >
                  <div className="od-profile-card-section">
                    <div className="od-profile-card-section-header">
                      <img
                        className="od-profile-card-section-icon"
                        src="src/assets/image_Medecin/presentation-svg.svg"
                      />
                      <h3 className="od-profile-card-section-title">
                        Présentation du professionnel de santé
                      </h3>
                    </div>
                    <div className="od-profile-card-section-body cw-rich-text">
                      <div className="od-profile-expandable">
                        <div className="od-profile-expandable-text">
                          <p>
                            <span style={{ backgroundColor: "initial" }}>
                              je suis passionné par le domaine médical depuis
                              aussi longtemps que je me souvienne. En tant que
                              médecin, j&apos;ai le privilège d&apos;être au
                              carrefour entre la science, l&apos;empathie et le
                              dévouement envers le bien-être des autres. Depuis
                              que j&apos;ai décidé de me lancer dans ce domaine,
                              chaque jour a été une aventure. Chaque patient que
                              je rencontre apporte avec lui son histoire unique,
                              ses défis et ses espoirs. Et je considère cela
                              comme un honneur de pouvoir les accompagner dans
                              leur parcours de santé.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="od-profile-card-section-separator" />

                  <div className="od-profile-card-section">
                    <div className="od-profile-card-section-header">
                      <img className="od-profile-card-section-icon" src="" />
                      <h3 className="od-profile-card-section-title">
                        Langues parlées
                      </h3>
                    </div>
                    <div className="od-profile-card-section-body cw-rich-text">
                      <div className="od-profile-expandable">
                        <div className="od-profile-expandable-text">
                          <p>arabe , anglais et français</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="od-profile-card-section-separator" />

                  <div className="od-profile-card-section">
                    <div className="od-profile-card-section-header">
                      <img className="od-profile-card-section-icon" src="" />
                      <h3 className="od-profile-card-section-title">
                        Expériences
                      </h3>
                    </div>
                    <div className="od-profile-card-section-body cw-rich-text">
                      <div className="od-profile-expandable">
                        <div className="od-profile-expandable-text">
                          <p>Depuis 2013</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="od-profile-card-section-separator" />

                  <div className="od-profile-card-section">
                    <div className="od-profile-card-section-header">
                      <img className="od-profile-card-section-icon" src="" />
                      <h3 className="od-profile-card-section-title">
                        contacts
                      </h3>
                    </div>
                    <div className="od-profile-card-section-body cw-rich-text">
                      <div className="od-profile-expandable">
                        <div className="od-profile-expandable-text">
                          <p>0664189325</p>
                          <p>abdouBLH75@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="od-profile-card"
                  onMouseMove={() => handleItemClick("Item 4")}
                >
                  <div className="od-profile-card-section">
                    <div className="od-profile-card-section-header">
                      <img
                        className="od-profile-card-section-icon"
                        src="src/assets/image_Medecin/faq-svg.svg"
                      />
                      <h3 className="od-profile-card-section-title">
                        Patient Reviews
                      </h3>
                    </div>
                    <div className="od-profile-card-section-body cw-rich-text">
                      <div className="od-profile-expandable">
                        <div className="od-profile-expandable-text">
                          <p>
                            <span style={{ backgroundColor: "initial" }}>
                              Verified reviews from real patients
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="overview">
                      <div className="average">
                        <div className="wrapper">
                          <span className="grade">9.8</span>
                        </div>
                        <p className="raters">From 714 reviews</p>
                      </div>
                      <div className="average-bars">
                        <div className="bar average-bar">
                          <div className="text">Reviews by 714 patient</div>
                          <div className="line">
                            <div
                              className="line__inner"
                              style={{ width: "95%" }}
                            ></div>
                          </div>
                          <div className="grade">9.5</div>
                        </div>

                        <div className="bar bar--pink">
                          <div className="text">Punctuality</div>
                          <div className="line">
                            <div
                              className="line__inner"
                              style={{ width: "95%" }}
                            ></div>
                          </div>
                          <div className="grade">9.5</div>
                        </div>
                        <div className="bar bar--pink">
                          <div className="text">
                            Cleanliness of the practice
                          </div>
                          <div className="line">
                            <div
                              className="line__inner"
                              style={{ width: "98%" }}
                            ></div>
                          </div>
                          <div className="grade">9.8</div>
                        </div>
                        <div className="bar bar--pink">
                          <div className="text">
                            Clear information on the pathology
                          </div>
                          <div className="line">
                            <div
                              className="line__inner"
                              style={{ width: "99%" }}
                            ></div>
                          </div>
                          <div className="grade">9.9</div>
                        </div>
                        <div className="bar bar--pink">
                          <div className="text">
                            Clear information on the side effects
                          </div>
                          <div className="line">
                            <div
                              className="line__inner"
                              style={{ width: "98%" }}
                            ></div>
                          </div>
                          <div className="grade">9.8</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="od-profile-content-book">
                <div className="od-profile-content-book-sticky ">
                  <div
                    className="od-profile-content-book-container"
                    style={{ position: "relative" }}
                  >
                    <div className="od-profile-content-book-header">
                      <h3 className="od-profile-content-book-title">
                        Prenez votre rendez-vous en ligne
                      </h3>
                      <p>Renseignez les informations suivantes</p>
                    </div>
                    <div className="od-profile-content-book-body">
                      <div className="cw-select flow">
                        <div className="flow-loader">
                          <div
                            className="loading-spinner"
                            style={{ width: "auto", margin: "auto" }}
                          >
                            <div
                              className="bounce1"
                              style={{ width: "18px", margin: "18px" }}
                            ></div>
                            <div
                              className="bounce2"
                              style={{ width: "18px", margin: "18px" }}
                            ></div>
                            <div
                              className="bounce3"
                              style={{ width: "18px", margin: "18px" }}
                            ></div>
                          </div>
                        </div>
                        <div className="flow-step" style={{ zIndex: "4" }}>
                          <div
                            className={
                              showFirstContent
                                ? "flow-step-line flow-step-line--checked"
                                : ""
                            }
                          ></div>
                          <div className="flow-step-number">
                            <div style={{ lineHeight: "28px" }}>1</div>
                          </div>

                          <div className="flow-step-content">
                            <div className="flow-step-label">
                              Première consultation?
                            </div>
                            <div className="flow-step-body">
                              <div
                                className="radio-set"
                                data-uuid="255016d5-82ba-4920-9dfe-21852efee617"
                              >
                                <div className="radio-set-item radio-set-item--checked">
                                  <div
                                    className="mdc-form-field"
                                    data-uuid="52f93e42-7c64-4c4f-a45e-0d7c81f3be1f"
                                  >
                                    <div className=" boul mdc-radio mdc-ripple-upgraded mdc-ripple-upgraded--unbounded">
                                      <input
                                        type="radio"
                                        className="mdc-radio__native-control"
                                        id="radio-52f93e42-7c64-4c4f-a45e-0d7c81f3be1f"
                                        name="clientType"
                                        value="new"
                                        onClick={handleRadioClick}
                                      />
                                      <div className="mdc-radio__background">
                                        <div className="mdc-radio__outer-circle"></div>
                                        <div className="mdc-radio__inner-circle"></div>
                                      </div>
                                    </div>
                                    <label htmlFor="radio-52f93e42-7c64-4c4f-a45e-0d7c81f3be1f">
                                      Ceci est ma première consultation avec Dr.
                                      Abdelillah
                                    </label>
                                  </div>
                                </div>
                                <div className="radio-set-item">
                                  <div
                                    className="mdc-form-field"
                                    data-uuid="fab6428d-b07b-45c5-bfd8-6f701ae9c479"
                                  >
                                    <div className="boul mdc-radio mdc-ripple-upgraded mdc-ripple-upgraded--unbounded">
                                      <input
                                        type="radio"
                                        className="mdc-radio__native-control"
                                        id="radio-fab6428d-b07b-45c5-bfd8-6f701ae9c479"
                                        name="clientType"
                                        value="established"
                                        onClick={handleRadioClick}
                                      />
                                      <div className="mdc-radio__background">
                                        <div className="mdc-radio__outer-circle"></div>
                                        <div className="mdc-radio__inner-circle"></div>
                                      </div>
                                    </div>
                                    <label htmlFor="radio-fab6428d-b07b-45c5-bfd8-6f701ae9c479">
                                      Je suis déjà suivi(e) par Dr. Abdelillah
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {showFirstContent && (
                          <div>
                            <hr
                              className="flow-step-divider"
                              data-node-id="clientType"
                            />
                            <div className="flow-step" style={{ zIndex: "3" }}>
                              <div
                                className={
                                  showLastContent
                                    ? "flow-step-line flow-step-line--checked"
                                    : ""
                                }
                              ></div>
                              <div className="flow-step-number">
                                <div style={{ lineHeight: "28px" }}>2</div>
                              </div>
                              <div className="flow-step-content">
                                <div className="flow-step-label">
                                  Spécialité
                                </div>
                                <div className="flow-step-body">
                                  <div
                                    className="mdc-select mdc-select--outlined mdc-select--focused"
                                    data-uuid="2ff8f807-35bf-487d-9c1f-7ac051473d8a"
                                  >
                                    <i className="mdc-select__dropdown-icon"></i>
                                    <select
                                      className="mdc-select__native-control"
                                      id="select-2ff8f807-35bf-487d-9c1f-7ac051473d8a"
                                      name="profession"
                                    >
                                      <option
                                        value="30"
                                        onClick={handleBoxClick}
                                      >
                                        Médecine générale
                                      </option>
                                    </select>
                                    <div className="mdc-notched-outline mdc-notched-outline--upgraded mdc-notched-outline--notched">
                                      <div className="mdc-notched-outline__leading"></div>
                                      <div
                                        className="mdc-notched-outline__notch"
                                        style={{ width: "157.25px" }}
                                      >
                                        <label className="mdc-floating-label mdc-floating-label--float-above">
                                          Sélectionnez une spécialité
                                        </label>
                                      </div>
                                      <div className="mdc-notched-outline__trailing"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {showLastContent && (
                          <div>
                            <hr
                              className="flow-step-divider"
                              data-node-id="appointmentType"
                            />
                            <div className="flow-step" style={{ zIndex: "1" }}>
                              <div className="flow-step-line"></div>
                              <div className="flow-step-number">
                                <div style={{ lineHeight: "28px" }}>3</div>
                              </div>
                              <div className="flow-step-content">
                                <div className="flow-step-label">
                                  Choisissez un créneau horaire
                                </div>

                                <div
                                  className="dl-desktop-availabilities dl-desktop-availabilities-flat"
                                  style={{ marginTop: "10px" }}
                                >
                                  <div className="dl-desktop-availabilities-inner">
                                    {showContent ? (
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
                                      {showContent
                                        ? "Voir plus d'horaires"
                                        : "Voir moins d'horaires"}
                                    </button>
                                  </div>
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
        </main>
      </div>
    </>
  );
}
export default Medecin;
