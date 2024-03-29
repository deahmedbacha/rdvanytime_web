import "../Médecin/Medecin.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import SectionSignin from "../conecter/SectionSignin.jsx";  
import SectionSignup from "../conecter/SectionSignup.jsx";  
import { Menu2 } from "../../Components/menu/Menu2";
import EventIcon from "@mui/icons-material/Event";
import HealingIcon from "@mui/icons-material/Healing";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import Relationn from "Components/showDiv/Relationn";

function Rdv() {
  const [showFirstContent, setShowFirstContent] = useState(false);

  const handleRadioClick = () => {
    // setShowFirstContent(!showFirstContent);
    setShowFirstContent(true);
  };

  const [showNextContent, setShowNextContent] = useState(1);
  const [lineActive, setLineActive] = useState("od-book-progress-line-active");
  const [current1, setCurrent1] = useState("");
  const [current2, setCurrent2] = useState("");
  const [current3, setCurrent3] = useState("");
  const handleNextClick = (numeroPage) => {
    setShowNextContent(numeroPage);
    if (numeroPage === 2) {
      setLineActive("od-book-progress-line-active2");
      setCurrent1("current1");
    }
    if (numeroPage === 3) {
      setLineActive("od-book-progress-line-active3");
      setCurrent2("current2");
    }
    if (numeroPage === 4) {
      setLineActive("od-book-progress-line-active4");
      setCurrent3("current3");
    }
  };

  const [showLastContent, setShowLastContent] = useState(false);
  const [showSigninContent, setShowSigninContent] = useState(true);
  const [showSignupContent, setShowSignupContent] = useState(true);

  const handleSigninClick = () => {
    setShowSigninContent(!showSigninContent);
    setShowSignupContent(true);
  };

  const handleSignupClick = () => {
    setShowSignupContent(!showSignupContent);
    setShowSigninContent(true);
  };

  const [showVousContent, setShowVousContent] = useState(false);

  const handlechoixClick = (event) => {
    setShowVousContent(event.target.value);
  };

  /// set les ville sur input
  const [inputValueVille, setInputValueVille] = useState("");
  const ButtonClickVille = (value) => {
    setInputValueVille(value);
    setShowDiv2(false);
    setShowLastContent(true);
  };
  ///
  const [showDiv2, setShowDiv2] = useState(false);
  const inputRef2 = useRef(null);
  const divRef2 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef2.current &&
        !inputRef2.current.contains(event.target) &&
        divRef2.current &&
        !divRef2.current.contains(event.target)
      ) {
        setShowDiv2(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputClick2 = () => {
    setShowDiv2(true);
  };
    const [AjouterProche, setShowAjouterProche] = useState(false);
    const AjouterProcheClick = () => {
      setShowAjouterProche(true);
    };

    const DisableProcheClick = () => {
      setShowAjouterProche(false);
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
          <div className="od-book">
            <div className="od-book-container">
              <div className="od-book-progress">
                <div className="od-book-progress-line step-1">
                  <div className="od-book-progress-line-full"></div>
                  <div className={lineActive}></div>
                </div>
                <div className="od-book-progress-steps">
                  <div className="od-book-step current">
                    <div className="od-book-step-number">
                      <div className="number">1</div>
                      <i className="material-icons">check</i>
                    </div>
                    <div className="od-book-step-title">Choix du motif</div>
                  </div>
                  <div className={`od-book-step ${current1 ? "current" : ""}`}>
                    <div className="od-book-step-number">
                      <div className="number">2</div>
                      <i className="material-icons">check</i>
                    </div>
                    <div className="od-book-step-title">Identification</div>
                  </div>
                  <div className={`od-book-step ${current2 ? "current" : ""}`}>
                    <div className="od-book-step-number">
                      <div className="number">3</div>
                      <i className="material-icons">check</i>
                    </div>
                    <div className="od-book-step-title">Infos patient</div>
                  </div>
                  <div className={`od-book-step ${current3 ? "current" : ""}`}>
                    <div className="od-book-step-number">
                      <div className="number">4</div>
                      <i className="material-icons">check</i>
                    </div>
                    <div className="od-book-step-title">Confirmation</div>
                  </div>
                </div>
              </div>

              <div className="od-book-content-container">
                <div className="od-book-content-header"></div>
                <div className="od-book-content">
                  <div className="od-book-content-body">
                    {showNextContent === 1 && (
                      <div>
                        <div className="cw-component cw-select flow">
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
                                <div className="radio-set">
                                  <div className="radio-set-item radio-set-item--checked">
                                    <div className="mdc-form-field">
                                      <div className=" boul mdc-radio mdc-ripple-upgraded mdc-ripple-upgraded--unbounded">
                                        <input
                                          type="radio"
                                          className="mdc-radio__native-control"
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
                                        Ceci est ma première consultation avec
                                        Dr. Abdelillah
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
                              <hr className="flow-step-divider" />
                              <div
                                className="flow-step"
                                style={{ zIndex: "3" }}
                              >
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
                                  <div
                                    className="flex flex-col sm:grid grid-cols-2 gap-4"
                                    style={{
                                      display: "flex",
                                      padding: "1.5%",
                                    }}
                                  >
                                    <div
                                      className="rounded-full px-5 py-1 bg-p-night "
                                      style={{ display: "flex" }}
                                    >
                                      <input
                                        className="bg-liquide outline-clear w-full text-base sm:text-sm lg:text-sm"
                                        placeholder="Spécialité ?"
                                        onClick={handleInputClick2}
                                        ref={inputRef2}
                                        value={inputValueVille}
                                        onChange={(e) =>
                                          setInputValueVille(e.target.value)
                                        }
                                      />
                                      {showDiv2 && (
                                        <div
                                          ref={divRef2}
                                          className=" sm:top-13 w-full  bg-white border border-1 shadow-lg h-auto min-mobile:max-w-[max-content] min-mobile:min-w-[360px]  rounded-2xl z-50 py-4 transform transition-opacity"
                                          style={{
                                            top: "5.5rem",
                                            position: "absolute",
                                          }}
                                        >
                                          <div className="max-h-80 overflow-y-auto px-3 flex flex-col min-h-[max-content] ">
                                            <button
                                              onClick={() =>
                                                ButtonClickVille(
                                                  "Médecine générale"
                                                )
                                              }
                                              className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                                            >
                                              <div></div>
                                              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                                                Médecine générale
                                              </div>
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                className="w-6 h-6 rtl:transform rtl:rotate-180"
                                              >
                                                <circle
                                                  cx="12"
                                                  cy="12"
                                                  r="12"
                                                  fill="#f2f2f2"
                                                ></circle>
                                                <path
                                                  d="M10.75 16.3a.74.74 0 01-.53-.22.75.75 0 010-1.06l3-3-3-3a.75.75 0 010-1.06.74.74 0 011.06 0L15.36 12l-4.08 4.08a.73.73 0 01-.53.22z"
                                                  fill="#444"
                                                ></path>
                                              </svg>
                                            </button>
                                          </div>
                                        </div>
                                      )}
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
                              </div>
                            </div>
                          )}
                          {showLastContent && (
                            <div>
                              <hr className="flow-step-divider" />
                              <div
                                className="flow-step"
                                style={{ zIndex: "1" }}
                              >
                                <div className="flow-step-line"></div>
                                <div className="flow-step-number">
                                  <div style={{ lineHeight: "28px" }}>3</div>
                                </div>
                                <div className="flow-step-split-content">
                                  <div className="flow-step-content">
                                    <div className="flow-step-label">
                                      Créneau horaire
                                    </div>
                                    <div className="flow-step-body">
                                      Jeudi 7 mars 2024 à 09:30
                                    </div>
                                  </div>
                                  <div
                                    className="flex dl-justify-center my-16"
                                    style={{ flex: "0 1 50%", height: "50px" }}
                                  >
                                    <a
                                      className="text-sm md:text-base font-semibold rounded-3xl px-7 py-3 bg-primary-ice text-white"
                                      onClick={() => handleNextClick(2)}
                                      data-design-system="oxygen"
                                      data-design-system-component="Button"
                                    >
                                      <span className="dl-button-label">
                                        Prendre rendez-vous
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    {showNextContent === 2 && (
                      <div>
                        <div
                          className="cw-warning"
                          onClick={() => handleNextClick(3)}
                        >
                          Votre RDV n&apos;est pas encore confirmé Merci de vous
                          identifier pour confirmer votre rendez-vous.
                        </div>
                        <div
                          className="od-book-content"
                          style={{ paddingTop: "30px" }}
                        >
                          <div className="od-book-content-body">
                            <div className="cw-component cw-register">
                              {showSignupContent ? (
                                <section className="cw-form-section">
                                  <h2 className="cw-form-section-title cw-form-section-title--centered">
                                    Nouveau sur RDVanytime?
                                  </h2>
                                  <div className="cw-form-buttons cw-form-buttons-full cw-form-toggleable-toggle">
                                    <button
                                      className="bodel mdc-button mdc-button--unelevated mdc-ripple-upgraded"
                                      type="button"
                                      onClick={handleSignupClick}
                                    >
                                      <span className="mdc-button__label">
                                        S&apos;inscrire
                                      </span>
                                    </button>
                                  </div>
                                </section>
                              ) : (
                                <div>
                                  <SectionSignup></SectionSignup>
                                </div>
                              )}
                              <div className="cw-login-container">
                                <div className="cw-component cw-login">
                                  {showSigninContent ? (
                                    <section className="cw-form-section">
                                      <h2 className="cw-form-section-title cw-form-section-title--centered">
                                        Connexion avec votre compte RDVanytime
                                      </h2>
                                      <div className="cw-form-buttons cw-form-buttons-full cw-form-toggleable-toggle">
                                        <button
                                          className="bodel mdc-button mdc-button--unelevated mdc-ripple-upgraded"
                                          type="button"
                                          onClick={handleSigninClick}
                                        >
                                          <span className="mdc-button__label">
                                            Se connecter
                                          </span>
                                        </button>
                                      </div>
                                    </section>
                                  ) : (
                                    <div>
                                      <SectionSignin></SectionSignin>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="od-book-content-sidebar">
                            <div className="cw-funnel-sidebar-summary">
                              <h2 className="cw-summary-title">
                                Récapitulatif
                              </h2>
                              <div className="cw-summary-resource">
                                <div className="cw-summary-resource-picture">
                                  <img
                                    src="src/assets/avatar_doctor.jpg"
                                    alt=""
                                    title=""
                                  />
                                </div>
                                <div className="cw-summary-resource-info">
                                  Dr BELHADJ ABDELILLAH
                                </div>
                                <div className="cw-summary-resource-secondary-info">
                                  Médecin généraliste
                                </div>
                              </div>
                              <div className="cw-summary-disclaimer">
                                <div className="cw-warning">
                                  Votre RDV n&apos;est pas encore confirmé .
                                </div>
                              </div>
                              <div className="cw-summary-details">
                                <div className="cw-summary-details-appointment-time">
                                  <EventIcon
                                    style={{ marginRight: "8px" }}
                                  ></EventIcon>
                                  <span>Vendredi 8 mars 2024 à 08:45</span>
                                </div>
                                <div className="cw-summary-details-appointment-type">
                                  <HealingIcon
                                    style={{ marginRight: "8px" }}
                                  ></HealingIcon>
                                  <span>Première consultation</span>
                                </div>
                                <div className="cw-summary-details-address">
                                  <LocationOnIcon
                                    style={{ marginRight: "8px" }}
                                  ></LocationOnIcon>
                                  <span>
                                    90 Rue de la Zune
                                    <br />
                                    60840 Algérie
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {showNextContent === 3 && (
                      <div>
                        <div
                          className="cw-warning"
                          onClick={() => handleNextClick(3)}
                        >
                          Votre RDV n&apos;est pas encore confirmé Merci de vous
                          identifier pour confirmer votre rendez-vous.
                        </div>
                        <div
                          className="od-book-content"
                          style={{ paddingTop: "30px" }}
                        >
                          <div className="od-book-content-body">
                            {/* @ts-ignore */}

                            <div className="cw-info">
                              <form className="cw-form" name="info">
                                <section
                                  className="cw-form-section"
                                  style={{ marginBottom: "1.5%" }}
                                >
                                  <h2 className="cw-form-section-title">
                                    Pour qui prenez-vous rendez-vous?
                                  </h2>
                                  <div className="cw-form-row">
                                    <div
                                      className="radio-set"
                                      style={{ marginBottom: "10px" }}
                                    >
                                      <div className="radio-set-item">
                                        <div
                                          className="mdc-form-field"
                                          data-uuid="ce76cf6b-59ae-469b-85eb-e444bc8bd532"
                                        >
                                          <div className="boul mdc-radio mdc-ripple-upgraded mdc-ripple-upgraded--unbounded">
                                            <input
                                              type="radio"
                                              className="mdc-radio__native-control"
                                              id="option1"
                                              name="who"
                                              value="option1"
                                              required=""
                                              checked={
                                                showVousContent === "option1"
                                              }
                                              onClick={handlechoixClick}
                                            />
                                            <div className="mdc-radio__background">
                                              <div className="mdc-radio__outer-circle"></div>
                                              <div className="mdc-radio__inner-circle"></div>
                                            </div>
                                          </div>
                                          <label htmlFor="radio-ce76cf6b-59ae-469b-85eb-e444bc8bd532">
                                            Vous-même
                                          </label>
                                        </div>
                                      </div>
                                      <div className="radio-set-item">
                                        <div className="mdc-form-field">
                                          <div className="boul mdc-radio mdc-ripple-upgraded mdc-ripple-upgraded--unbounded">
                                            <input
                                              type="radio"
                                              className="mdc-radio__native-control"
                                              id="option2"
                                              name="who"
                                              value="option2"
                                              required=""
                                              checked={
                                                showVousContent === "option2"
                                              }
                                              onClick={handlechoixClick}
                                            />
                                            <div className="mdc-radio__background">
                                              <div className="mdc-radio__outer-circle"></div>
                                              <div className="mdc-radio__inner-circle"></div>
                                            </div>
                                          </div>
                                          <label htmlFor="radio-72db4515-d52f-43d1-a9ad-91782132f016">
                                            Un proche (enfant, parent, etc.)
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </form>
                              {showVousContent === "option1" && (
                                <div>
                                  <section className="cw-form-section cw-form-section--user">
                                    <div className="user-info-header">
                                      <h2 className="cw-form-section-title">
                                        À propos de vous
                                      </h2>
                                    </div>
                                    <div className="user-info">
                                      <h3>Vos informations de base</h3>
                                      <div className="cw-form-row">
                                        <div
                                          className="radio-set"
                                          data-uuid="037c4ff1-f221-4576-bbb6-da9f77c0080c"
                                          style={{ marginBottom: "10px" }}
                                        >
                                          <div className="radio-set-item">
                                            <div
                                              className="mdc-form-field"
                                              data-uuid="409cce71-3e8a-4ce6-8779-89481f3ce679"
                                            >
                                              <div className="boul mdc-radio mdc-ripple-upgraded mdc-ripple-upgraded--unbounded">
                                                <input
                                                  type="radio"
                                                  className="mdc-radio__native-control"
                                                  name="gender"
                                                  value="Homme"
                                                  required=""
                                                />
                                                <div className="mdc-radio__background">
                                                  <div className="mdc-radio__outer-circle"></div>
                                                  <div className="mdc-radio__inner-circle"></div>
                                                </div>
                                              </div>
                                              <label htmlFor="radio-409cce71-3e8a-4ce6-8779-89481f3ce679">
                                                Homme
                                              </label>
                                            </div>
                                          </div>
                                          <div className="radio-set-item">
                                            <div
                                              className="mdc-form-field"
                                              data-uuid="3b962c17-6c7a-4450-8304-17724ec58a90"
                                            >
                                              <div className="boul mdc-radio mdc-ripple-upgraded mdc-ripple-upgraded--unbounded">
                                                <input
                                                  type="radio"
                                                  className="mdc-radio__native-control"
                                                  name="gender"
                                                  value="Femme"
                                                  required=""
                                                />
                                                <div className="mdc-radio__background">
                                                  <div className="mdc-radio__outer-circle"></div>
                                                  <div className="mdc-radio__inner-circle"></div>
                                                </div>
                                              </div>
                                              <label htmlFor="radio-3b962c17-6c7a-4450-8304-17724ec58a90">
                                                Femme
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="rounded-full px-5 py-1 bg-p-night w-full"
                                        style={{ marginBottom: "2%" }}
                                      >
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
                                      <div
                                        className="rounded-full px-5 py-1 bg-p-night w-full"
                                        style={{ marginBottom: "2%" }}
                                      >
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
                                      <div
                                        className="rounded-full px-5 py-1 bg-p-night w-full flex flex-row gap-2 flex-nowrap items-center"
                                        style={{ marginBottom: "2%" }}
                                      >
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
                                    <div className="user-address">
                                      <h3
                                        style={{
                                          marginBottom: "3%",
                                        }}
                                      >
                                        Votre adresse (domicile)
                                      </h3>
                                      <div
                                        className="flex flex-col sm:grid grid-cols-2 gap-4"
                                        style={{ display: "ruby" }}
                                      >
                                        <div
                                          className="rounded-full px-5 py-1 bg-p-night "
                                          style={{
                                            width: "79%",
                                            marginRight: "1.5%",
                                            marginBottom: "2%",
                                          }}
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
                                          style={{
                                            width: "25%",
                                            marginRight: "1.5%",
                                            marginBottom: "2%",
                                          }}
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
                                  </section>
                                  <section className="cw-form-section cw-form-section--comment">
                                    <h2
                                      className="cw-form-section-title"
                                      style={{
                                        marginBottom: "3%",
                                      }}
                                    >
                                      Raison de la visite / Renseignements
                                      complémentaires
                                    </h2>
                                    <div
                                      className=" px-5 py-1 bg-p-night w-full"
                                      style={{
                                        marginBottom: "2%",
                                        borderRadius: "30px",
                                      }}
                                    >
                                      <textarea
                                        type="text"
                                        placeholder=" Transmettre un message au personnel soignant (optionnel)"
                                        className="text-base font-normal h-12 bg-p-night outline-none border-none w-full shadow-none focus:ring-transparent"
                                        style={{
                                          boxShadow: "none !important",
                                          backgroundColor: "transparent",
                                          height: "100px",
                                        }}
                                        name="message"
                                      />
                                    </div>
                                  </section>
                                  <div className="cw-form-buttons cw-form-buttons-full">
                                    <button
                                      className="mdc-button mdc-button--unelevated mdc-ripple-upgraded"
                                      type="submit"
                                      onClick={() => handleNextClick(4)}
                                    >
                                      <span className="mdc-button__label">
                                        Confirmer rendez-vous
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              )}
                              {showVousContent === "option2" && (
                                <div>
                                  <section className="cw-form-section cw-form-section--user">
                                    <div className="user-info-header">
                                      <h2 className="cw-form-section-title">
                                        Mes proches
                                      </h2>
                                    </div>
                                    <div className="w-full flex flex-col mx-auto flex-1">
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
                                              Aucun proches
                                            </div>
                                          </div>
                                        </div>
                                        <div className="font-normal text-xs text-gray-500 text-center mt-9">
                                          Ajoutez vos proches à votre compte et
                                          gérez leurs rendez-vous en toute
                                          simplicité.
                                        </div>
                                      </div>
                                      <div
                                        className="w-max self-center "
                                        style={{ paddingTop: "1.5%" }}
                                      >
                                        <button
                                          onClick={AjouterProcheClick}
                                          style={{
                                            backgroundColor: "#012bb4",
                                          }}
                                          className="rounded-full bg-primary hover:bg-primary-bold h-12 text-center text-white font-bold flex items-center justify-center px-8 mt-4 text-base sm:text-base lg:text-base disabled:bg-gray-100 disabled:border disabled:text-black disabled:select-none disabled:pointer-events-none min-w-[100px] py-3"
                                        >
                                          <div className="me-2">
                                            Ajouter un proche
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
                                  </section>
                                  <section className="cw-form-section cw-form-section--user">
                                    <div className="user-info-header">
                                      <h2 className="cw-form-section-title">
                                        À propos de vous
                                      </h2>
                                    </div>
                                    <div className="user-info">
                                      <h3>Vos informations de base</h3>
                                      <div className="cw-form-row">
                                        <div
                                          className="radio-set"
                                          style={{ marginBottom: "10px" }}
                                        >
                                          <div className="radio-set-item">
                                            <div className="mdc-form-field">
                                              <div className="boul mdc-radio mdc-ripple-upgraded mdc-ripple-upgraded--unbounded">
                                                <input
                                                  type="radio"
                                                  className="mdc-radio__native-control"
                                                  name="gender"
                                                  value="Homme"
                                                  required=""
                                                />
                                                <div className="mdc-radio__background">
                                                  <div className="mdc-radio__outer-circle"></div>
                                                  <div className="mdc-radio__inner-circle"></div>
                                                </div>
                                              </div>
                                              <label htmlFor="radio-409cce71-3e8a-4ce6-8779-89481f3ce679">
                                                Homme
                                              </label>
                                            </div>
                                          </div>
                                          <div className="radio-set-item">
                                            <div
                                              className="mdc-form-field"
                                              data-uuid="3b962c17-6c7a-4450-8304-17724ec58a90"
                                            >
                                              <div className="boul mdc-radio mdc-ripple-upgraded mdc-ripple-upgraded--unbounded">
                                                <input
                                                  type="radio"
                                                  className="mdc-radio__native-control"
                                                  name="gender"
                                                  value="Femme"
                                                  required=""
                                                />
                                                <div className="mdc-radio__background">
                                                  <div className="mdc-radio__outer-circle"></div>
                                                  <div className="mdc-radio__inner-circle"></div>
                                                </div>
                                              </div>
                                              <label htmlFor="radio-3b962c17-6c7a-4450-8304-17724ec58a90">
                                                Femme
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="rounded-full px-5 py-1 bg-p-night w-full"
                                        style={{ marginBottom: "2%" }}
                                      >
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
                                      <div
                                        className="rounded-full px-5 py-1 bg-p-night w-full"
                                        style={{ marginBottom: "2%" }}
                                      >
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
                                      <div
                                        className="rounded-full px-5 py-1 bg-p-night w-full flex flex-row gap-2 flex-nowrap items-center"
                                        style={{ marginBottom: "2%" }}
                                      >
                                        <input
                                          type="date"
                                          placeholder="Date de naissance"
                                          className="text-base font-normal h-12 bg-p-night outline-none border-none w-full !font-main shadow-none focus:ring-transparent"
                                          style={{
                                            boxShadow: "none !important",
                                            backgroundColor: "transparent",
                                          }}
                                          name="Date de naissance"
                                        />
                                      </div>
                                    </div>
                                  </section>
                                  <section className="cw-form-section cw-form-section--comment">
                                    <h2
                                      className="cw-form-section-title"
                                      style={{
                                        marginBottom: "3%",
                                      }}
                                    >
                                      Raison de la visite / Renseignements
                                      complémentaires
                                    </h2>
                                    <div
                                      className=" px-5 py-1 bg-p-night w-full"
                                      style={{
                                        marginBottom: "2%",
                                        borderRadius: "30px",
                                      }}
                                    >
                                      <textarea
                                        type="text"
                                        placeholder=" Transmettre un message au personnel soignant (optionnel)"
                                        className="text-base font-normal h-12 bg-p-night outline-none border-none w-full shadow-none focus:ring-transparent"
                                        style={{
                                          boxShadow: "none !important",
                                          backgroundColor: "transparent",
                                          height: "100px",
                                        }}
                                        name="message"
                                      />
                                    </div>
                                  </section>

                                  <div className="cw-form-buttons cw-form-buttons-full">
                                    <button
                                      className="mdc-button mdc-button--unelevated mdc-ripple-upgraded"
                                      type="submit"
                                      onClick={() => handleNextClick(4)}
                                    >
                                      <span className="mdc-button__label">
                                        Confirmer rendez-vous
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                            {/* @ts*/}
                          </div>
                          <div className="od-book-content-sidebar">
                            <div className="cw-funnel-sidebar-summary">
                              <h2 className="cw-summary-title">
                                Récapitulatif
                              </h2>
                              <div className="cw-summary-resource">
                                <div className="cw-summary-resource-picture">
                                  <img
                                    src="src/assets/avatar_doctor.jpg"
                                    alt=""
                                    title=""
                                  />
                                </div>
                                <div className="cw-summary-resource-info">
                                  Dr BELHADJ ABDELILLAH
                                </div>
                                <div className="cw-summary-resource-secondary-info">
                                  Médecin généraliste
                                </div>
                              </div>
                              <div className="cw-summary-disclaimer">
                                <div className="cw-warning">
                                  Votre RDV n&apos;est pas encore confirmé .
                                </div>
                              </div>
                              <div className="cw-summary-details">
                                <div className="cw-summary-details-appointment-time">
                                  <EventIcon
                                    style={{ marginRight: "8px" }}
                                  ></EventIcon>
                                  <span>Vendredi 8 mars 2024 à 08:45</span>
                                </div>
                                <div className="cw-summary-details-appointment-type">
                                  <HealingIcon
                                    style={{ marginRight: "8px" }}
                                  ></HealingIcon>
                                  <span>Première consultation</span>
                                </div>
                                <div className="cw-summary-details-address">
                                  <LocationOnIcon
                                    style={{ marginRight: "8px" }}
                                  ></LocationOnIcon>
                                  <span>
                                    90 Rue de la Zune
                                    <br />
                                    60840 Algérie
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {showNextContent === 4 && (
                      <div>
                        <div className="od-book-banner">
                          <div className="cw-confirmation-banner">
                            <div className="cw-form">
                              <section className="cw-form-section">
                                <div className="cw-confirmation-banner-content">
                                  <h1
                                    className="cw-form-section-title"
                                    style={{ marginBottom: "15px" }}
                                  >
                                    Votre rendez-vous est confirmé!
                                  </h1>
                                  <p>
                                    Nous venons de vous envoyer un email de
                                    confirmation de rendez-vous
                                  </p>
                                  <p style={{ margin: "8px" }}>
                                    Vous recevrez également un SMS de rappel 24h
                                    avant votre consultation!
                                  </p>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                        <div className="od-book-content-container">
                          <div className="od-book-content-header"></div>
                          <div className="od-book-content">
                            <div className="od-book-content-body">
                              <div className="cw-confirmation">
                                <div className="cw-form">
                                  <section className="cw-form-section">
                                    <h2 className="cw-form-section-title">
                                      À propos de votre rendez-vous
                                    </h2>
                                    <div className="cw-confirmation-summary">
                                      <div className="cw-confirmation-summary-item">
                                        <PersonIcon
                                          style={{
                                            marginRight: "8px",
                                          }}
                                        ></PersonIcon>
                                        <span>Znasni morad</span>
                                      </div>
                                      <div className="cw-confirmation-summary-item cw-confirmation-practical-info-item--wrap">
                                        <span className="cw-confirmation-summary-item-group">
                                          <EventIcon
                                            style={{ marginRight: "8px" }}
                                          ></EventIcon>
                                          <span>
                                            Vendredi 8 mars 2024 à 08:45
                                          </span>
                                        </span>
                                      </div>
                                      <div className="cw-confirmation-summary-item">
                                        <HealingIcon
                                          style={{ marginRight: "8px" }}
                                        ></HealingIcon>
                                        <span>Première consultation</span>
                                      </div>
                                    </div>
                                    <h2 className="cw-form-section-title">
                                      Informations pratiques
                                    </h2>
                                    <div className="cw-confirmation-practical-info">
                                      <div className="cw-confirmation-practical-info-item">
                                        <PlaceIcon
                                          style={{ marginRight: "8px" }}
                                        ></PlaceIcon>
                                        <a
                                          href="https://www.google.ch/maps/"
                                          target="_blank"
                                        >
                                          <span>
                                            Centre Médical EZAHRA
                                            <br />
                                            90 Rue de la Zune
                                            <br />
                                            60840 Algérie
                                          </span>
                                        </a>
                                      </div>
                                      <div className="cw-confirmation-practical-info-item">
                                        <PhoneIcon
                                          style={{ marginRight: "8px" }}
                                        ></PhoneIcon>
                                        <a href="tel:+213664189325">
                                          <span>0664189325</span>
                                        </a>
                                      </div>
                                    </div>
                                  </section>

                                  <div className="cw-form-buttons cw-form-buttons-wrap">
                                    <button
                                      className="mdc-button mdc-button--unelevated mdc-ripple-upgraded"
                                      type="button"
                                    >
                                      <span className="mdc-button__label">
                                        Voir mes rendez-vous
                                      </span>
                                    </button>
                                    <button
                                      className="mdc-button mdc-button--unelevated mdc-ripple-upgraded"
                                      type="button"
                                    >
                                      <span className="mdc-button__label">
                                        Nouveau rendez-vous
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="od-book-content-sidebar">
                              <iframe
                                className="od-profile-googlemaps2"
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
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
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
            <div className="react-responsive-modal-container react-responsive-modal-containerCenter">
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
}
export default Rdv;
