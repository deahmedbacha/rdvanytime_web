import "../Médecin/Medecin.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import SectionSignin from "../conecter/SectionSignin.jsx";  
import SectionSignup from "../conecter/SectionSignup.jsx";  
import { Menu2 } from "../../Components/menu/Menu2";



function Rdv() {
    const [showFirstContent, setShowFirstContent] = useState(false);

    const handleRadioClick = () => {
      // setShowFirstContent(!showFirstContent);
      setShowFirstContent(true);
    };

    const [showNextContent, setShowNextContent] = useState(1);
    const [lineActive, setLineActive] = useState(
      "od-book-progress-line-active"
    );
     const [current1, setCurrent1] = useState("");
     const [current2, setCurrent2] = useState(""); 
     const [current3, setCurrent3] = useState(""); 
    const handleNextClick = (numeroPage) => {
      setShowNextContent(numeroPage);
      if (numeroPage===2){ 
      setLineActive("od-book-progress-line-active2");
      setCurrent1("current1");}
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

    const handleBoxClick = () => {
      setShowLastContent(true);
    };
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
            className="od-book"
            data-type="professional"
            data-entity-id="20972"
            data-professional-id="96172"
            data-calendar-id="31312"
            data-profession-id="30"
            data-original-profession-id="30"
            data-date-time="2024-03-07T09:30:00"
          >
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
                                      data-uuid="3bfd477f-b0f7-4d87-b8cf-4895e63d8b4d"
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
                                          data-uuid="3bfd477f-b0f7-4d87-b8cf-4895e63d8b4d"
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
                                  <img
                                    className="od-profile-card-section-icon"
                                    src="src/assets/calendar.png"
                                  />
                                  <span>Vendredi 8 mars 2024 à 08:45</span>
                                </div>
                                <div className="cw-summary-details-appointment-type">
                                  <img
                                    className="od-profile-card-section-icon"
                                    src="src/assets/job.png"
                                  />
                                  <span>Première consultation</span>
                                </div>
                                <div className="cw-summary-details-address">
                                  <img
                                    className="od-profile-card-section-icon"
                                    src="src/assets/location.png"
                                  />
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
                                      data-uuid="4b0a6df9-6c44-46f3-bfff-9475d080cf73"
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
                                        <div
                                          className="mdc-form-field"
                                          data-uuid="72db4515-d52f-43d1-a9ad-91782132f016"
                                        >
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
                                                    id="radio-409cce71-3e8a-4ce6-8779-89481f3ce679"
                                                    name="gender"
                                                    value="male"
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
                                                    id="radio-3b962c17-6c7a-4450-8304-17724ec58a90"
                                                    name="gender"
                                                    value="female"
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
                                        <div className="cw-form-row">
                                          <div className="input-group">
                                            <input
                                              className="input-group__input"
                                              type="text"
                                              placeholder="&nbsp;"
                                              name="Prénom"
                                              id="Prénom"
                                              autoComplete="off"
                                              required
                                            />
                                            <label
                                              className="input-group__label"
                                              htmlFor="Prénom"
                                            >
                                              Prénom*
                                            </label>
                                          </div>
                                        </div>
                                        <div className="cw-form-row">
                                          <div className="input-group">
                                            <input
                                              className="input-group__input"
                                              type="text"
                                              placeholder="&nbsp;"
                                              name="Nom de famille"
                                              id="Nom de famille"
                                              autoComplete="off"
                                              required
                                            />
                                            <label
                                              className="input-group__label"
                                              htmlFor="Nom de famille"
                                            >
                                              Nom de famille*
                                            </label>
                                          </div>
                                        </div>
                                        <div className="cw-form-row">
                                          <div className="input-group">
                                            <input
                                              className="input-group__input"
                                              type="date"
                                              placeholder="&nbsp;"
                                              name="Date de naissance"
                                              id="Date de naissance"
                                              autoComplete="off"
                                              required
                                            />
                                            <label
                                              className="input-group__label"
                                              htmlFor="Date de naissance"
                                            >
                                              Date de naissance*
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="user-address">
                                        <h3>Votre adresse (domicile)</h3>
                                        <div className="cw-form-row cw-form-row-cols">
                                          <div
                                            className="cw-form-row"
                                            style={{
                                              padding: "0 8px",
                                              width: "100%",
                                            }}
                                          >
                                            <div className="input-group">
                                              <input
                                                className="input-group__input"
                                                type="text"
                                                placeholder="&nbsp;"
                                                name="Nom de famille"
                                                id="Nom de famille"
                                                autoComplete="off"
                                                required
                                              />
                                              <label
                                                className="input-group__label"
                                                htmlFor="Nom de famille"
                                              >
                                                Rue*
                                              </label>
                                            </div>
                                          </div>
                                          <div
                                            className="cw-form-row"
                                            style={{
                                              padding: "0 8px",
                                              width: "20%",
                                            }}
                                          >
                                            <div className="input-group">
                                              <input
                                                className="input-group__input"
                                                type="text"
                                                placeholder="&nbsp;"
                                                name="Nom de famille"
                                                id="Nom de famille"
                                                autoComplete="off"
                                                required
                                              />
                                              <label
                                                className="input-group__label"
                                                htmlFor="Nom de famille"
                                              >
                                                N°
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="cw-form-row cw-form-row-cols">
                                          <div
                                            className="cw-form-row"
                                            style={{
                                              padding: "0 8px",
                                              width: "100%",
                                            }}
                                          >
                                            <div className="input-group">
                                              <input
                                                className="input-group__input"
                                                type="text"
                                                placeholder="&nbsp;"
                                                name="Nom de famille"
                                                id="Nom de famille"
                                                autoComplete="off"
                                                required
                                              />
                                              <label
                                                className="input-group__label"
                                                htmlFor="Nom de famille"
                                              >
                                                code postal*
                                              </label>
                                            </div>
                                          </div>
                                          <div
                                            className="cw-form-row"
                                            style={{
                                              padding: "0 8px",
                                              width: "420%",
                                            }}
                                          >
                                            <div className="input-group">
                                              <input
                                                className="input-group__input"
                                                type="text"
                                                placeholder="&nbsp;"
                                                name="Nom de famille"
                                                id="Nom de famille"
                                                autoComplete="off"
                                                required
                                              />
                                              <label
                                                className="input-group__label"
                                                htmlFor="Nom de famille"
                                              >
                                                Ville*
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="cw-form-row cw-form-row-cols">
                                          <div
                                            className="cw-form-row"
                                            style={{
                                              padding: "0 8px",
                                              width: "100%",
                                            }}
                                          >
                                            <div className="input-group">
                                              <input
                                                className="input-group__input"
                                                type="text"
                                                placeholder="&nbsp;"
                                                name="Nom de famille"
                                                id="Nom de famille"
                                                autoComplete="off"
                                                required
                                              />
                                              <label
                                                className="input-group__label"
                                                htmlFor="Nom de famille"
                                              >
                                                Pays*
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                    <section className="cw-form-section cw-form-section--comment">
                                      <h2 className="cw-form-section-title">
                                        Raison de la visite / Renseignements
                                        complémentaires
                                      </h2>
                                      <div className="cw-form-row">
                                        <div className="input-group">
                                          <textarea
                                            className="input-group__input"
                                            type="text"
                                            placeholder="&nbsp;"
                                            name="message"
                                            id="message"
                                            autoComplete="off"
                                            required
                                            style={{ height: "100px" }}
                                          />
                                          <label
                                            className="input-group__label"
                                            htmlFor="message"
                                          >
                                            Transmettre un message au personnel
                                            soignant (optionnel)
                                          </label>
                                        </div>
                                      </div>
                                    </section>
                                    <div className="cw-form-buttons cw-form-buttons-full">
                                      <button
                                        className="mdc-button mdc-button--unelevated mdc-ripple-upgraded"
                                        data-uuid="da6637bf-759c-4f80-83cd-cff0ff15f11d"
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
                                          Informations sur le patient
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
                                                    id="radio-409cce71-3e8a-4ce6-8779-89481f3ce679"
                                                    name="gender"
                                                    value="male"
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
                                                    id="radio-3b962c17-6c7a-4450-8304-17724ec58a90"
                                                    name="gender"
                                                    value="female"
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
                                        <div className="cw-form-row">
                                          <div className="input-group">
                                            <input
                                              className="input-group__input"
                                              type="text"
                                              placeholder="&nbsp;"
                                              name="Prénom"
                                              id="Prénom"
                                              autoComplete="off"
                                              required
                                            />
                                            <label
                                              className="input-group__label"
                                              htmlFor="Prénom"
                                            >
                                              Prénom*
                                            </label>
                                          </div>
                                        </div>
                                        <div className="cw-form-row">
                                          <div className="input-group">
                                            <input
                                              className="input-group__input"
                                              type="text"
                                              placeholder="&nbsp;"
                                              name="Nom de famille"
                                              id="Nom de famille"
                                              autoComplete="off"
                                              required
                                            />
                                            <label
                                              className="input-group__label"
                                              htmlFor="Nom de famille"
                                            >
                                              Nom de famille*
                                            </label>
                                          </div>
                                        </div>
                                        <div className="cw-form-row">
                                          <div className="input-group">
                                            <input
                                              className="input-group__input"
                                              type="date"
                                              placeholder="&nbsp;"
                                              name="Date de naissance"
                                              id="Date de naissance"
                                              autoComplete="off"
                                              required
                                            />
                                            <label
                                              className="input-group__label"
                                              htmlFor="Date de naissance"
                                            >
                                              Date de naissance*
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="user-address">
                                        <h3>Votre adresse (domicile)</h3>
                                        <div className="cw-form-row cw-form-row-cols">
                                          <div
                                            className="cw-form-row"
                                            style={{
                                              padding: "0 8px",
                                              width: "100%",
                                            }}
                                          >
                                            <div className="input-group">
                                              <input
                                                className="input-group__input"
                                                type="text"
                                                placeholder="&nbsp;"
                                                name="Nom de famille"
                                                id="Nom de famille"
                                                autoComplete="off"
                                                required
                                              />
                                              <label
                                                className="input-group__label"
                                                htmlFor="Nom de famille"
                                              >
                                                Rue*
                                              </label>
                                            </div>
                                          </div>
                                          <div
                                            className="cw-form-row"
                                            style={{
                                              padding: "0 8px",
                                              width: "20%",
                                            }}
                                          >
                                            <div className="input-group">
                                              <input
                                                className="input-group__input"
                                                type="text"
                                                placeholder="&nbsp;"
                                                name="Nom de famille"
                                                id="Nom de famille"
                                                autoComplete="off"
                                                required
                                              />
                                              <label
                                                className="input-group__label"
                                                htmlFor="Nom de famille"
                                              >
                                                N°
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="cw-form-row cw-form-row-cols">
                                          <div
                                            className="cw-form-row"
                                            style={{
                                              padding: "0 8px",
                                              width: "100%",
                                            }}
                                          >
                                            <div className="input-group">
                                              <input
                                                className="input-group__input"
                                                type="text"
                                                placeholder="&nbsp;"
                                                name="Nom de famille"
                                                id="Nom de famille"
                                                autoComplete="off"
                                                required
                                              />
                                              <label
                                                className="input-group__label"
                                                htmlFor="Nom de famille"
                                              >
                                                code postal*
                                              </label>
                                            </div>
                                          </div>
                                          <div
                                            className="cw-form-row"
                                            style={{
                                              padding: "0 8px",
                                              width: "420%",
                                            }}
                                          >
                                            <div className="input-group">
                                              <input
                                                className="input-group__input"
                                                type="text"
                                                placeholder="&nbsp;"
                                                name="Nom de famille"
                                                id="Nom de famille"
                                                autoComplete="off"
                                                required
                                              />
                                              <label
                                                className="input-group__label"
                                                htmlFor="Nom de famille"
                                              >
                                                Ville*
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="cw-form-row cw-form-row-cols">
                                          <div
                                            className="cw-form-row"
                                            style={{
                                              padding: "0 8px",
                                              width: "100%",
                                            }}
                                          >
                                            <div className="input-group">
                                              <input
                                                className="input-group__input"
                                                type="text"
                                                placeholder="&nbsp;"
                                                name="Nom de famille"
                                                id="Nom de famille"
                                                autoComplete="off"
                                                required
                                              />
                                              <label
                                                className="input-group__label"
                                                htmlFor="Nom de famille"
                                              >
                                                Pays*
                                              </label>
                                            </div>
                                          </div>
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
                                                    id="radio-409cce71-3e8a-4ce6-8779-89481f3ce679"
                                                    name="gender"
                                                    value="male"
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
                                                    id="radio-3b962c17-6c7a-4450-8304-17724ec58a90"
                                                    name="gender"
                                                    value="female"
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
                                        <div className="cw-form-row">
                                          <div className="input-group">
                                            <input
                                              className="input-group__input"
                                              type="text"
                                              placeholder="&nbsp;"
                                              name="Prénom"
                                              id="Prénom"
                                              autoComplete="off"
                                              required
                                            />
                                            <label
                                              className="input-group__label"
                                              htmlFor="Prénom"
                                            >
                                              Prénom*
                                            </label>
                                          </div>
                                        </div>
                                        <div className="cw-form-row">
                                          <div className="input-group">
                                            <input
                                              className="input-group__input"
                                              type="text"
                                              placeholder="&nbsp;"
                                              name="Nom de famille"
                                              id="Nom de famille"
                                              autoComplete="off"
                                              required
                                            />
                                            <label
                                              className="input-group__label"
                                              htmlFor="Nom de famille"
                                            >
                                              Nom de famille*
                                            </label>
                                          </div>
                                        </div>
                                        <div className="cw-form-row">
                                          <div className="input-group">
                                            <input
                                              className="input-group__input"
                                              type="date"
                                              placeholder="&nbsp;"
                                              name="Date de naissance"
                                              id="Date de naissance"
                                              autoComplete="off"
                                              required
                                            />
                                            <label
                                              className="input-group__label"
                                              htmlFor="Date de naissance"
                                            >
                                              Date de naissance*
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                    <section className="cw-form-section cw-form-section--comment">
                                      <h2 className="cw-form-section-title">
                                        Raison de la visite / Renseignements
                                        complémentaires
                                      </h2>
                                      <div className="cw-form-row">
                                        <div className="input-group">
                                          <textarea
                                            className="input-group__input"
                                            type="text"
                                            placeholder="&nbsp;"
                                            name="message"
                                            id="message"
                                            autoComplete="off"
                                            required
                                            style={{ height: "100px" }}
                                          />
                                          <label
                                            className="input-group__label"
                                            htmlFor="message"
                                          >
                                            Transmettre un message au personnel
                                            soignant (optionnel)
                                          </label>
                                        </div>
                                      </div>
                                    </section>

                                    <div className="cw-form-buttons cw-form-buttons-full">
                                      <button
                                        className="mdc-button mdc-button--unelevated mdc-ripple-upgraded"
                                        data-uuid="da6637bf-759c-4f80-83cd-cff0ff15f11d"
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
                              </form>
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
                                  <img
                                    className="od-profile-card-section-icon"
                                    src="src/assets/calendar.png"
                                  />
                                  <span>Vendredi 8 mars 2024 à 08:45</span>
                                </div>
                                <div className="cw-summary-details-appointment-type">
                                  <img
                                    className="od-profile-card-section-icon"
                                    src="src/assets/job.png"
                                  />
                                  <span>Première consultation</span>
                                </div>
                                <div className="cw-summary-details-address">
                                  <img
                                    className="od-profile-card-section-icon"
                                    src="src/assets/location.png"
                                  />
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
                                        <img
                                          className="od-profile-card-section-icon"
                                          src="src/assets/user.png"
                                        />
                                        <span>Znasni morad</span>
                                      </div>
                                      <div className="cw-confirmation-summary-item cw-confirmation-practical-info-item--wrap">
                                        <span className="cw-confirmation-summary-item-group">
                                          <img
                                            className="od-profile-card-section-icon"
                                            src="src/assets/calendar.png"
                                          />
                                          <span>
                                            Vendredi 8 mars 2024 à 08:45
                                          </span>
                                        </span>
                                      </div>
                                      <div className="cw-confirmation-summary-item">
                                        <img
                                          className="od-profile-card-section-icon"
                                          src="src/assets/job.png"
                                        />
                                        <span>Première consultation</span>
                                      </div>
                                    </div>
                                    <h2 className="cw-form-section-title">
                                      Informations pratiques
                                    </h2>
                                    <div className="cw-confirmation-practical-info">
                                      <div className="cw-confirmation-practical-info-item">
                                        <img
                                          className="od-profile-card-section-icon"
                                          src="src/assets/location.png"
                                        />
                                        <a
                                          href="https://www.google.ch/maps/place/La Voie-Creuse 16, 1202 Genève"
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
                                        <img
                                          className="od-profile-card-section-icon"
                                          src="src/assets/phone.png"
                                        />
                                        <a href="tel:+213664189325">
                                          <span>0664189325</span>
                                        </a>
                                      </div>
                                    </div>
                                  </section>

                                  <div className="cw-form-buttons cw-form-buttons-wrap">
                                    <button
                                      className="mdc-button mdc-button--unelevated mdc-ripple-upgraded"
                                      data-uuid="87ecc01b-06c0-41f9-a41e-ff46828298b3"
                                      type="button"
                                    >
                                      <span className="mdc-button__label">
                                        Voir mes rendez-vous
                                      </span>
                                    </button>
                                    <button
                                      className="mdc-button mdc-button--unelevated mdc-ripple-upgraded"
                                      data-uuid="2fc7993b-12be-44f2-9870-25615b094dab"
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
    </>
  );
}
export default Rdv;
