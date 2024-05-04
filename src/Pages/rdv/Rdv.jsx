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
import { Footer } from "../../Components/Footer/Footer.jsx";
import Head from "../../Components/Head";
import axios from "axios";
function Rdv() {
  const [popupEventSexe, setSexe] = useState(null);

  const token = localStorage.getItem("token");

  fetch("http://localhost:4000/get-user", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      // Access form elements
      const nameInput = document.querySelector('input[name="Prénom"]');
      const surnameInput = document.querySelector(
        'input[name="Nom de famille"]'
      );
      const dateOfBirthInput = document.querySelector(
        'input[name="Date de naissance"]'
      );
      const paysInput = document.querySelector('input[name="Pays"]');
      const rueInput = document.querySelector('input[name="Rue"]');
      const rueNumeroInput = document.querySelector('input[name="rueNumero"]');
      const villeInput = document.querySelector('input[name="ville"]');
      const codePostaleInput = document.querySelector(
        'input[name="codePostale"]'
      );
      const sexeInput = document.querySelector('input[name="Homme"]');
      codePostaleInput.value = response.data.codePostale;
      villeInput.value = response.data.ville;
      nameInput.value = response.data.firstName;
      surnameInput.value = response.data.lastName;

      if (response.data.sexe === true) {
        handleGenderChange("Homme");
      } else {
        handleGenderChange("Femme");
      }

      {
        /*
    const sexeInput = document.querySelector('input[name="Homme"]');
    const sexeInput2 = document.querySelector('input[name="Femme"]');
    if (response.data.sexe === 'true') {
      sexeInput.checked = true;
      sexeInput2.checked = false;
    }else {
      sexeInput.checked = false;
      sexeInput2.checked = true;
    }*/
      }
      paysInput.value = response.data.pays;
      rueInput.value = response.data.rue;
      rueNumeroInput.value = response.data.rueNumero;
      // Set the selected gender radio button
      dateOfBirthInput.value = formatDateForInput(response.data.dateNaissance);
      console.log(formatDateForInput(dateOfBirthInput.value));
      const userData = {};

      nameInput.addEventListener("input", () => {
        userData.firstName = nameInput.value;
      });

      surnameInput.addEventListener("input", () => {
        userData.lastName = surnameInput.value;
      });

      dateOfBirthInput.addEventListener("input", () => {
        const formattedDate = formatDateForServer(dateOfBirthInput.value);
        if (isValidDate(formattedDate)) {
          userData.dateNaissance = formattedDate;
        } else {
          dateOfBirthInput.value = formatDateForInput(userData.dateNaissance);
        }
      });

      paysInput.addEventListener("input", () => {
        userData.pays = paysInput.value;
      });

      rueInput.addEventListener("input", () => {
        userData.rue = rueInput.value;
      });

      rueNumeroInput.addEventListener("input", () => {
        userData.rueNumero = rueNumeroInput.value;
      });

      villeInput.addEventListener("input", () => {
        userData.ville = villeInput.value;
      });

      codePostaleInput.addEventListener("input", () => {
        userData.codePostale = codePostaleInput.value;
      });

      const submitButton = document.querySelector('button[type="submit"]');
      submitButton.addEventListener("click", () => {
        const hommeInput = document.querySelector('input[value="Homme"]');
        if (hommeInput) {
          // Check if hommeInput is not null
          userData.sexe = hommeInput.checked ? true : false;
        } else {
          console.error("Homme input element not found.");
        }
        // Send the updated user data to the server
        fetch("http://localhost:4000/update-user", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(userData),
        })
          .then((response) => {
            if (response.ok) {
            } else {
              console.error("Error updating user data");
            }
          })
          .catch((error) => {
            console.error("Error updating user data:", error);
          });
      });
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });

  function formatDateForInput(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  function formatDateForServer(inputDateString) {
    const [day, month, year] = inputDateString.split("-");
    const dateString = `${year}-${month}-${day}T00:00:00.000+00:00`;
    return dateString;
  }

  const handleSubmitRdv = async () => {
    try {
      const doctorId = localStorage.getItem("doc_id");
      const patientId = localStorage.getItem("client_id");
      const datee = localStorage.getItem("clicked_time");
      const dateTime = datee;
      const notes = document.getElementById("notes_take").value;
      const response = await fetch("http://localhost:4000/add-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ doctorId, patientId, dateTime, notes }),
      });

      const data = await response.json();
    } catch (error) {
      console.error("Error adding appointment:", error);
    }
  };

  const handleGenderChange = (newValue) => {
    const hommeInput = document.querySelector('input[value="Homme"]');
    const femmeInput = document.querySelector('input[value="Femme"]');

    if (newValue === "Homme") {
      hommeInput.checked = true;
      femmeInput.checked = false;
    } else {
      hommeInput.checked = false;
      femmeInput.checked = true;
    }
  };

  const [showFirstContent, setShowFirstContent] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const rdvTime = localStorage.getItem("clicked_time");
  const date = new Date(rdvTime.replace("Z", "")); // Remove 'Z' at the end to prevent timezone adjustment
  const [tokenExists, setTokenExists] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setTokenExists(true);
    }
  }, []);
  // Define options for formatting the date and time
  const options = {
    weekday: "long", // Display the full name of the day of the week (e.g., "Samedi")
    day: "numeric", // Display the day of the month (e.g., "4")
    month: "long", // Display the full name of the month (e.g., "Mai")
    year: "numeric", // Display the year (e.g., "2024")
    hour: "numeric", // Display the hour (e.g., "08")
    minute: "numeric", // Display the minute (e.g., "00")
    hour12: false, // Use 24-hour format
  };

  // Format the date and time
  const formattedDate = new Intl.DateTimeFormat("fr-FR", options).format(date);
  const capitalizedDay =
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

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
  const [doctorData, setDoctorData] = useState({});

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const docId = localStorage.getItem("doc_id");
        if (docId) {
          const response = await axios.post(
            "http://localhost:4000/doctorbyid",
            { docId }
          );
          setDoctorData({ ...response.data });
        } else {
          setError("Doctor ID not found in local storage");
        }
      } catch (err) {
        setError("Error fetching doctor data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctorData();
  }, []);
// const handleAddToGoogleCalendar = () => {
  // // Get start time from localStorage
  //  const startDate = new Date(localStorage.getItem("clicked_time")); 
  // // Format start date
  // const startDateString = startDate
  //   .toISOString()
  //   .replace(/[-:]/g, "")
  //   .replace(/\.\d+/, "");

  // // Calculate end time (start time + 30 minutes)
  // const endDate = new Date(startDate.getTime() + 30 * 60 * 1000);

  // // Format end date
  // const endDateString = endDate
  //   .toISOString()
  //   .replace(/[-:]/g, "")
  //   .replace(/\.\d+/, "");

  // const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
  //   `Dr. ${doctorData.firstName} ${doctorData.lastName}`
  // )}&dates=${encodeURIComponent(startDateString)}/${encodeURIComponent(
  //   endDateString
  // )}/${encodeURIComponent()}&details=${encodeURIComponent(
  //   `Première consultation <br/> ${doctorData.phoneNumber}`
  // )}&location=${encodeURIComponent(doctorData.map)}`;

  // window.open(googleCalendarUrl);
  const handleAddToGoogleCalendar = () => {
    const startDate2 = new Date(
      localStorage.getItem("clicked_time"));
    const startDate = new Date(startDate2.getTime() - 60 * 60 * 1000); 
    const endDate = new Date(startDate.getTime() + 30 * 60 * 1000);

    const formattedStartDate =
      startDate
        .toISOString()
        .replace(/[-:]/g, "")
        .replace(/\.\d\d\d/, "") + "";
    const formattedEndDate =
      endDate
        .toISOString()
        .replace(/[-:]/g, "")
        .replace(/\.\d\d\d/, "") + "";

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      `Dr. ${doctorData.firstName} ${doctorData.lastName}`
    )}&dates=${encodeURIComponent(formattedStartDate)}/${encodeURIComponent(
      formattedEndDate
    )}&details=${encodeURIComponent(
      `Première consultation <br/> ${doctorData.phoneNumber}`
    )}&location=${encodeURIComponent(doctorData.map)}`;
    window.open(googleCalendarUrl);
  };

  return (
    <>
      <div className="Main">
        {/**Header */}
        <Head></Head>
        <br />
        <br />
        <br />
        <br />
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
                                        Dr. {doctorData.lastName}{" "}
                                        {doctorData.firstName}
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
                                        Je suis déjà suivi(e) par Dr.{" "}
                                        {doctorData.lastName}{" "}
                                        {doctorData.firstName}
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
                                                  `${doctorData.type}`
                                                )
                                              }
                                              className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                                            >
                                              <div></div>
                                              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                                                {doctorData.type}
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
                                      {capitalizedDay}
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
                        <div className="cw-warning">
                          Votre RDV n&apos;est pas encore confirmé Merci de vous
                          identifier pour confirmer votre rendez-vous.
                        </div>
                        <div
                          className="od-book-content"
                          style={{ paddingTop: "30px" }}
                        >
                          {tokenExists ? (
                            <div>
                              {/* Skip the sign-up and sign-in sections if token exists */}
                              <p>You are already signed in.</p>
                              <button
                                className="mdc-button"
                                onClick={handleNextClick(3)}
                              >
                                Continue
                              </button>
                            </div>
                          ) : (
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
                          )}
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
                                  Dr {doctorData.lastName}{" "}
                                  {doctorData.firstName}
                                </div>
                                <div className="cw-summary-resource-secondary-info">
                                  {doctorData.type}
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
                                  <span>{capitalizedDay}</span>
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
                                    {doctorData.Numerorue} {doctorData.rue}{" "}
                                    {doctorData.ville}
                                    <br />
                                    {doctorData.codePostale} {doctorData.pays}
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
                                                name="gender1"
                                                value="Homme"
                                                required=""
                                                onChange={() => {
                                                  handleGenderChange("Homme");
                                                }} // Call handleGenderChange function with 'Homme' value when this radio button is clicked
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
                                                name="gender2"
                                                value="Femme"
                                                required=""
                                                onChange={() => {
                                                  handleGenderChange("Femme");
                                                }} // Call handleGenderChange function with 'Femme' value when this radio button is clicked
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
                                  <div className="user-address">
                                    <h3
                                      style={{
                                        marginBottom: "3%",
                                      }}
                                    >
                                      Votre adresse (domicile)
                                    </h3>
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
                                                  name="Rue"
                                                  className="outline-none h-12 border-none w-full bg-transparent px-0 z-10 relative !font-main htmlForm-control"
                                                  style={{
                                                    unicodeBidi: "plaintext",
                                                    direction: "ltr",
                                                    backgroundColor:
                                                      "transparent",
                                                  }}
                                                  placeholder="Rue*"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            style={{
                                              width: "100%",
                                              paddingLeft: "50%",
                                            }}
                                          >
                                            <div className="rounded-full px-5 py-1 bg-p-night w-full flex flex-row gap-2 flex-nowrap items-center">
                                              <input
                                                type="text"
                                                name="rueNumero"
                                                placeholder="N°"
                                                className="text-base font-normal h-12 bg-p-night outline-none border-none w-full !font-main shadow-none focus:ring-transparent"
                                                style={{
                                                  boxShadow: "none !important",
                                                  backgroundColor:
                                                    "transparent",
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
                                                  name="codePostale"
                                                  className="outline-none h-12 border-none w-full bg-transparent px-0 z-10 relative !font-main htmlForm-control"
                                                  style={{
                                                    unicodeBidi: "plaintext",
                                                    direction: "ltr",
                                                    backgroundColor:
                                                      "transparent",
                                                  }}
                                                  placeholder="Code postal*"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div style={{ width: "100%" }}>
                                            <div className="rounded-full px-5 py-1 bg-p-night w-full flex flex-row gap-2 flex-nowrap items-center">
                                              <input
                                                type="text"
                                                name="ville"
                                                placeholder="Ville*"
                                                className="text-base font-normal h-12 bg-p-night outline-none border-none w-full !font-main shadow-none focus:ring-transparent"
                                                style={{
                                                  boxShadow: "none !important",
                                                  backgroundColor:
                                                    "transparent",
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
                                      id="notes_take"
                                      name="notes_take"
                                      placeholder=" Transmettre un message au personnel soignant (optionnel)"
                                      className="text-base font-normal h-12 bg-p-night outline-none border-none w-full shadow-none focus:ring-transparent"
                                      style={{
                                        boxShadow: "none !important",
                                        backgroundColor: "transparent",
                                        height: "100px",
                                      }}
                                    />
                                  </div>
                                </section>
                                <div className="cw-form-buttons cw-form-buttons-full">
                                  <button
                                    name="submit"
                                    className="mdc-button mdc-button--unelevated mdc-ripple-upgraded"
                                    type="submit"
                                    onClick={() => {
                                      handleSubmitRdv();
                                      handleNextClick(4);
                                    }}
                                  >
                                    <span className="mdc-button__label">
                                      Confirmer rendez-vous
                                    </span>
                                  </button>
                                </div>
                              </div>
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
                                  Dr {doctorData.firstName}{" "}
                                  {doctorData.lastName}
                                </div>
                                <div className="cw-summary-resource-secondary-info">
                                  {doctorData.type}
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
                                  <span>{capitalizedDay}</span>
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
                                    {doctorData.rueNumero} {doctorData.rue}
                                    <br />
                                    {doctorData.codePostale} {doctorData.ville},{" "}
                                    {doctorData.pays}
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
                                        <span>
                                          Dr {doctorData.firstName}{" "}
                                          {doctorData.lastName}
                                        </span>
                                      </div>
                                      <div className="cw-confirmation-summary-item cw-confirmation-practical-info-item--wrap">
                                        <span className="cw-confirmation-summary-item-group">
                                          <EventIcon
                                            style={{ marginRight: "8px" }}
                                          ></EventIcon>
                                          <span>{capitalizedDay}</span>
                                        </span>
                                        {/*  */}
                                        <span
                                          style={{
                                            padding: "4px 8px",
                                          }}
                                        >
                                          <div
                                            style={{
                                              textAlign: "center",
                                            }}
                                          >
                                            <button
                                              onClick={
                                                handleAddToGoogleCalendar
                                              }
                                              type="button"
                                              style={{
                                                width: " 100%",
                                                height: "auto",
                                                fontWeight: "500",
                                                letterSpacing: "1px",
                                                borderColor: "#02AE96",
                                                color: "#02AE96",
                                                backgroundColor: "transparent",
                                                borderStyle: "solid",
                                                padding: "0 15px",
                                                borderWidth: "1px",
                                                borderRadius: "4px",
                                              }}
                                            >
                                              <span className="mdc-button__label">
                                                Ajouter au calendrier
                                              </span>
                                            </button>
                                          </div>
                                        </span>
                                        {/*  */}
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
                                            {doctorData.rueNumero}{" "}
                                            {doctorData.rue}
                                            <br />
                                            {doctorData.codePostale}{" "}
                                            {doctorData.ville},{" "}
                                            {doctorData.pays}
                                          </span>
                                        </a>
                                      </div>
                                      <div className="cw-confirmation-practical-info-item">
                                        <PhoneIcon
                                          style={{ marginRight: "8px" }}
                                        ></PhoneIcon>
                                        <a href="tel:+213664189325">
                                          <span>{doctorData.phoneNumber}</span>
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
                                src={doctorData.map}
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
      <Footer />
    </>
  );
}
export default Rdv;
