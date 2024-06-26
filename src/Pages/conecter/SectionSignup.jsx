import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
function SectionSignup() {
  //number:
  const [phoneNumber, setphoneNumber] = useState("");
  const [isValidnumbre, setIsValidnumbre] = useState(true);
  const [isValidcharacter, setIsValidcharacter] = useState(true);
  //email:
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  //password:
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidPassword2, setIsValidPassword2] = useState(false);

  //login
  const [, setIsLoggedIn] = useState(false);
  //email:
  const handleChangeemail = (event) => {
    const { value } = event.target;
    setEmail(value);
    // Regular expression to check for a valid email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(value);
    setIsValidEmail(isValid);
  };
  //password:
  const handleChangepass = (event) => {
    const { value } = event.target;
    setPassword(value);
    // Check if the password has at least 8 characters
    const isValid = value.length >= 8;
    setIsValidPassword(isValid);
    setPassword(event.target.value);
  };
  //Check if  password et email valide pour conecter
  const handleLogin = () => {
    // Check if both email and password are valid
    if (isValidEmail && isValidPassword) {
      // Perform login logic here
      setIsLoggedIn(true);
    } else {
      // Display error message or handle invalid credentials
      alert("Invalid email or password");
    }
  };
  //afficher/masqué password :
  const toggleShowPassword = () => {
    setIsValidPassword2(!isValidPassword2);
  };
  //
  const handleChangeNumber = (event) => {
    const inputValue = event.target.value;
    const numericRegex = /^[0-9]*$/; // Regex to match only numeric characters
    const phoneNumberRegex = /^\d{10}$/; // Check if the input value contains only numeric characters
    if (numericRegex.test(inputValue) || inputValue === "") {
      setphoneNumber(inputValue);
      setIsValidcharacter(true);
      setphoneNumber(inputValue);
      setIsValidnumbre(phoneNumberRegex.test(inputValue));
    } else {
      setIsValidcharacter(false);
    }
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phoneNumber":
        setphoneNumber(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    console.log("Button clicked!");
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:4000/register",
        formData
      );
      console.log("Button clicked!");
      console.log(response.data); // assuming server responds with a message
      window.location.href = "http://localhost:5173/signin";
      // Handle success, e.g., show a success message to the user
    } catch (error) {
      console.log("Button clicked!2");
      console.error("Registration failed:", error.response.data); // log the error
      // Handle error, e.g., show an error message to the user
    }
  };
  //ReCAPTCHA
  const [captchaValue, setCaptchaValue] = useState(null);
  return (
    <>
      <div className="sc-aaf087d9-6 gpRMrZ">
        <div
          className="ds-card"
          style={{ display: "flex ", flexGrow: "1", placeContent: "center" }}
        >
          <div className="ctw-flex ctw-p-6 ctw-grow ctw-border ctw-border-solid first:ctw-bg-white first:ctw-border-white ctw-rounded-3xl ctw-shadow-[0_0_6px_rgb(0,0,0,0.1),0_0_4px_rgb(0,0,0,0.1)] ctw-shadow-black-500/50 ctw-flex-row ctw-gap-x-4 ctw-justify-center ctw-items-center hietwjj">
            <div className="ctw-hidden"></div>
            <div className="ds-card-content white ctw-w-full">
              <h3 className="sc-aaf087d9-1 dmbiMk">
                Vous souhaitez devenir particulier,
                <span className="sc-ccee3fab-0 goHFPr">créez votre compte</span>
              </h3>
              <div className="ctw-flex md:ctw-p-10 md:ctw-my-5">
                <div className="sc-5ffdb2e4-9 bSGjar">
                  <div>
                    <form onSubmit={handleSubmit}>
                      <div className="sc-5ffdb2e4-25 fznPme">
                        <div className="ds-input">
                          <div className="ds-avec-label"></div>
                          <div className="ctw-flex ctw-flex-row ctw-items-center ctw-justify-items-center ctw-mt-0.5 ctw-border ctw-border-solid ctw-box-border ctw-rounded-md ctw-w-full ctw-h-10 ctw-text[#1e1d1d] ctw-bg-[#f4f7fa] ctw-border-transparent false undefined">
                            <input
                              value={firstName}
                              onChange={handleChange}
                              type="text"
                              label="Prénom"
                              placeholder="Prénom"
                              id="firstName"
                              name="firstName"
                              className="ctw-outline-none ctw-bg-transparent ctw-w-full ctw-rounded-md ctw-text-base ctw-border-none ctw-truncate ctw-ml-2 false undefined"
                              required
                            />
                          </div>
                          <div className="ds-avec-label">
                            <p
                              className="ctw-not-italic ctw-font-medium ctw-my-0 ctw-text-xs"
                              style={{
                                fontFamily: "Red Hat Text",
                                color: "rgb(255, 62, 56)",
                              }}
                            ></p>
                          </div>
                        </div>
                        <div className="ds-input">
                          <div className="ds-avec-label"></div>
                          <div className="ctw-flex ctw-flex-row ctw-items-center ctw-justify-items-center ctw-mt-0.5 ctw-border ctw-border-solid ctw-box-border ctw-rounded-md ctw-w-full ctw-h-10 ctw-text[#1e1d1d] ctw-bg-[#f4f7fa] ctw-border-transparent false undefined">
                            <input
                              type="text"
                              label="Nom"
                              value={lastName}
                              onChange={handleChange}
                              placeholder="Nom"
                              id="lastName"
                              name="lastName"
                              className="ctw-outline-none ctw-bg-transparent ctw-w-full ctw-rounded-md ctw-text-base ctw-border-none ctw-truncate ctw-ml-2 false undefined"
                            />
                          </div>
                          <div className="ds-avec-label">
                            <p
                              className="ctw-not-italic ctw-font-medium ctw-my-0 ctw-text-xs"
                              style={{
                                fontFamily: "Red Hat Text",
                                color: "rgb(255, 62, 56)",
                              }}
                            ></p>
                          </div>
                        </div>
                      </div>

                      <div className="ds-input">
                        <div className="ds-avec-label">
                          <br></br>
                        </div>
                        <div className="ctw-flex ctw-flex-row ctw-items-center ctw-justify-items-center ctw-mt-0.5 ctw-border ctw-border-solid ctw-box-border ctw-rounded-md ctw-w-full ctw-h-10 ctw-text[#1e1d1d] ctw-bg-[#f4f7fa] ctw-border-transparent false undefined">
                          <div
                            className="ctw-ml-2.5 undefined"
                            style={{ marginTop: "5px" }}
                          >
                            <svg
                              width="1em"
                              className="ds-icon"
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill="#012bb4"
                                fillRule="evenodd"
                                clipRule={"evenodd"}
                                d="M3.414 2.383a1.309 1.309 0 0 1 1.958.122l1.346 1.73c.246.317.333.73.236 1.12l-.41 1.643a.509.509 0 0 0 .133.482L8.52 9.323a.508.508 0 0 0 .483.133l1.642-.41a1.308 1.308 0 0 1 1.12.236l1.73 1.346c.621.483.678 1.402.122 1.958l-.776.776c-.555.555-1.384.798-2.157.526a13.975 13.975 0 0 1-5.258-3.315 13.976 13.976 0 0 1-3.315-5.257c-.271-.773-.027-1.603.528-2.158l.775-.775Z"
                              ></path>
                            </svg>
                          </div>
                          <input
                            type="text"
                            label="Téléphone"
                            value={phoneNumber}
                            onChange={
                              handleChangeNumber // Call the second function here
                            }
                            placeholder="Téléphone"
                            id="phoneNumber"
                            name="phoneNumber"
                            className="ctw-outline-none ctw-bg-transparent ctw-w-full ctw-rounded-md ctw-text-base ctw-border-none ctw-truncate ctw-ml-2 false undefined"
                          />
                        </div>
                        <div className="ds-avec-label">
                          <p
                            className="ctw-not-italic ctw-font-medium ctw-my-0 ctw-text-xs"
                            style={{
                              fontFamily: "Red Hat Text",
                              color: "rgb(255, 62, 56)",
                            }}
                          ></p>
                          {!isValidcharacter && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "0.8rem",
                                display: "block",
                              }}
                            >
                              Veuillez saisir uniquement des caractères
                              numériques
                            </p>
                          )}
                          {!isValidnumbre && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "0.8rem",
                                display: "block",
                              }}
                            >
                              Veuillez saisir un numéro de mobile valide{" "}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="ds-input">
                        <div className="ds-avec-label">
                          <br></br>
                        </div>
                        <div className="ctw-flex ctw-flex-row ctw-items-center ctw-justify-items-center ctw-mt-0.5 ctw-border ctw-border-solid ctw-box-border ctw-rounded-md ctw-w-full ctw-h-10 ctw-text[#1e1d1d] ctw-bg-[#f4f7fa] ctw-border-transparent false undefined">
                          <div
                            className="ctw-ml-2.5 undefined"
                            style={{ marginTop: "5px" }}
                          >
                            <svg
                              className="ds-icon"
                              width="1em"
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.04375 4.29583C1.13197 3.9277 1.34882 3.59901 1.65881 3.36359C1.96879 3.12817 2.35352 2.99997 2.75 3H13.25C13.6465 2.99997 14.0312 3.12817 14.3412 3.36359C14.6512 3.59901 14.868 3.9277 14.9563 4.29583L8 8.345L1.04375 4.29583ZM1 5.2475V11.1675L6.07762 8.2025L1 5.2475ZM6.91587 8.69167L1.16713 12.0475C1.30916 12.3327 1.53334 12.5737 1.81356 12.7423C2.09378 12.9109 2.41853 13.0003 2.75 13H13.25C13.5814 13.0001 13.906 12.9105 14.1861 12.7417C14.4662 12.573 14.6902 12.3319 14.832 12.0467L9.08325 8.69083L8 9.32167L6.91587 8.69083V8.69167ZM9.92237 8.20333L15 11.1675V5.2475L9.92237 8.2025V8.20333Z"
                                fill="#012bb4"
                              ></path>
                            </svg>
                          </div>
                          <input
                            type="text"
                            label="Adresse mail"
                            value={email}
                            onChange={handleChangeemail}
                            placeholder="Saisir une adresse mail valide"
                            id="email"
                            name="email"
                            className="ctw-outline-none ctw-bg-transparent ctw-w-full ctw-rounded-md ctw-text-base ctw-border-none ctw-truncate ctw-ml-2 false undefined"
                          />
                        </div>
                        <div className="ds-avec-label">
                          <p
                            className="ctw-not-italic ctw-font-medium ctw-my-0 ctw-text-xs"
                            style={{
                              fontFamily: "Red Hat Text",
                              color: "rgb(255, 62, 56)",
                            }}
                          ></p>
                          {!isValidEmail && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "0.8rem",
                                display: "block",
                              }}
                            >
                              Veuillez saisir une adresse email valide
                            </p>
                          )}{" "}
                        </div>
                      </div>
                      <div className="ds-input">
                        <div className="ds-avec-label">
                          <br></br>
                        </div>
                        <div className="ctw-flex ctw-flex-row ctw-items-center ctw-justify-items-center ctw-mt-0.5 ctw-border ctw-border-solid ctw-box-border ctw-rounded-md ctw-w-full ctw-h-10 ctw-text[#1e1d1d] ctw-bg-[#f4f7fa] ctw-border-transparent false undefined">
                          <div
                            className="ctw-ml-2.5 undefined"
                            style={{ marginTop: "5px" }}
                          >
                            <svg
                              className="ds-icon"
                              width="1em"
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 2C8.53043 2 9.03914 2.21071 9.41421 2.58579C9.78929 2.96086 10 3.46957 10 4V7H6V4C6 3.46957 6.21071 2.96086 6.58579 2.58579C6.96086 2.21071 7.46957 2 8 2ZM11 7V4C11 3.20435 10.6839 2.44129 10.1213 1.87868C9.55871 1.31607 8.79565 1 8 1C7.20435 1 6.44129 1.31607 5.87868 1.87868C5.31607 2.44129 5 3.20435 5 4V7C4.46957 7 3.96086 7.21071 3.58579 7.58579C3.21071 7.96086 3 8.46957 3 9V14C3 14.5304 3.21071 15.0391 3.58579 15.4142C3.96086 15.7893 4.46957 16 5 16H11C11.5304 16 12.0391 15.7893 12.4142 15.4142C12.7893 15.0391 13 14.5304 13 14V9C13 8.46957 12.7893 7.96086 12.4142 7.58579C12.0391 7.21071 11.5304 7 11 7Z"
                                fill="#012bb4"
                              ></path>
                            </svg>
                          </div>
                          <input
                            type={isValidPassword2 ? "text" : "password"}
                            label="Mot de passe"
                            value={password}
                            onChange={handleChangepass}
                            placeholder="Mot de passe"
                            id="password"
                            name="password"
                            className="ctw-outline-none ctw-bg-transparent ctw-w-full ctw-rounded-md ctw-text-base ctw-border-none ctw-truncate ctw-ml-2 false undefined"
                          />
                          <svg
                            onClick={toggleShowPassword}
                            className="ds-icon ctw-mr-3 ctw-cursor-pointer"
                            height="16"
                            width="16"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {isValidPassword2 ? "Hide" : "Show"}
                            <path
                              d="M13.359 11.238C15.06 9.72 16 8 16 8C16 8 13 2.5 7.99999 2.5C7.03958 2.50331 6.09005 2.70342 5.20999 3.088L5.97999 3.859C6.62743 3.62315 7.31094 3.50168 7.99999 3.5C10.12 3.5 11.879 4.668 13.168 5.957C13.7883 6.58069 14.3445 7.26513 14.828 8C14.77 8.087 14.706 8.183 14.633 8.288C14.298 8.768 13.803 9.408 13.168 10.043C13.003 10.208 12.831 10.371 12.651 10.529L13.359 11.238Z"
                              fill="black"
                            ></path>
                            <path
                              d="M11.297 9.176C11.5201 8.55185 11.5615 7.87715 11.4162 7.23042C11.2708 6.5837 10.9449 5.99153 10.4762 5.52282C10.0075 5.05412 9.41529 4.72814 8.76857 4.58283C8.12184 4.43752 7.44715 4.47885 6.82299 4.702L7.64599 5.525C8.0303 5.47 8.42214 5.50525 8.79046 5.62797C9.15878 5.75068 9.49346 5.9575 9.76798 6.23201C10.0425 6.50653 10.2493 6.84121 10.372 7.20953C10.4947 7.57785 10.53 7.96969 10.475 8.354L11.297 9.176ZM8.35399 10.475L9.17599 11.297C8.55183 11.5202 7.87714 11.5615 7.23041 11.4162C6.58368 11.2709 5.99151 10.9449 5.52281 10.4762C5.0541 10.0075 4.72813 9.41531 4.58282 8.76858C4.43751 8.12186 4.47883 7.44716 4.70199 6.823L5.52499 7.646C5.46998 8.03031 5.50523 8.42215 5.62795 8.79047C5.75067 9.1588 5.95748 9.49347 6.232 9.76799C6.50652 10.0425 6.8412 10.2493 7.20952 10.372C7.57784 10.4948 7.96968 10.53 8.35399 10.475Z"
                              fill="black"
                            ></path>
                            <path
                              d="M3.35 5.47C3.17 5.63 2.997 5.792 2.832 5.957C2.21165 6.58069 1.65552 7.26512 1.172 8L1.367 8.288C1.702 8.768 2.197 9.408 2.832 10.043C4.121 11.332 5.881 12.5 8 12.5C8.716 12.5 9.39 12.367 10.02 12.14L10.79 12.912C9.90994 13.2965 8.9604 13.4967 8 13.5C3 13.5 0 8 0 8C0 8 0.939 6.279 2.641 4.762L3.349 5.471L3.35 5.47ZM13.646 14.354L1.646 2.354L2.354 1.646L14.354 13.646L13.646 14.354Z"
                              fill="black"
                            ></path>
                          </svg>
                        </div>
                        <div className="ds-avec-label">
                          <p
                            className="ctw-not-italic ctw-font-medium ctw-my-0 ctw-text-xs"
                            style={{
                              fontFamily: "Red Hat Text",
                              color: "rgb(255, 62, 56)",
                            }}
                          ></p>
                          {!isValidPassword && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "0.8rem",
                                display: "block",
                              }}
                            >
                              Le mot de passe doit comporter au moins 8
                              caractères
                            </p>
                          )}
                        </div>
                      </div>

                      <div
                        color="#979797"
                        className="sc-5ffdb2e4-20 kEHKi ctw-py-6 ctw-text-center"
                      >
                        <p>
                          En cliquant sur Accepter et s’inscrire, vous acceptez
                          les Mentions légales, les
                          <a
                            href="/conditions-generales-usages/mentions-legales"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="#e20080"
                            className="sc-5ffdb2e4-21 ducWSI"
                          >
                            Conditions générales d’utilisation
                          </a>
                          et la
                          <a
                            href="/conditions-generales-usages/infos-donnees-personnelles"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="#e20080"
                            className="sc-5ffdb2e4-21 ducWSI"
                          >
                            Politique de traitement des Données personnelles.
                          </a>
                        </p>
                      </div>
                      <ReCAPTCHA
                        style={{ display: "flex", justifyContent: "center" }}
                        sitekey="6LfkHuEpAAAAAMfrjZGGc7cpf8EQv7jRnLRuvnMt"
                        onChange={(val) => setCaptchaValue(val)}
                      />
                      <div className="ctw-w-full ctw-mt-6">
                        <div className="ds-button">
                          <div
                            className="ds-custom-tag"
                            style={{ height: "100%", width: "100%" }}
                          >
                            <button
                              type="submit"
                              disabled={!captchaValue}
                              onClick={handleSubmit}
                              className="ctw-select-none ctw-flex ctw-box-border ctw-items-center ctw-justify-center ctw-font-bold ctw-underline-offset-4 ctw-min-w-min ctw-w-full ctw-transition-all ctw-duration-300 ctw-outline-none ctw-bg-primary-500 ctw-text-white ctw-border-solid ctw-border-[1.5px] ctw-border-primary-500 hover:ctw-shadow-lg hover:ctw-bg-primary-700 hover:ctw-border-primary-700 focus:ctw-shadow-lg focus:ctw-bg-primary-700 focus:ctw-border-primary-700 ctw-cursor-pointer ctw-h-10 ctw-text-[1rem] ctw-rounded"
                            >
                              <div className="ctw-flex ctw-flex-row">
                                <div className="ctw-flex ctw-items-center ctw-grow ctw-flex-row ctw-justify-center">
                                  <div className="ctw-cursor-[inherit] ctw-px-3 ctw-text-left">
                                    Accepter et s’inscrire
                                  </div>
                                  <div className="ctw-shrink-0 ctw-flex ctw-justify-center ctw-cursor-[inherit] ctw-pr-3">
                                    <svg
                                      className="ds-icon"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 16 16"
                                    >
                                      <path
                                        d="M4.99185 12.1573L8.26467 9.0411C8.44328 8.87105 8.63586 8.71632 8.84038 8.57853L9.02205 8.45615C9.34566 8.23814 9.34566 7.76186 9.02205 7.54385L8.84038 7.42147C8.63586 7.28369 8.44327 7.12895 8.26467 6.9589L4.99185 3.84275C4.91517 3.76971 4.85435 3.683 4.81285 3.58757C4.77136 3.49214 4.75 3.38986 4.75 3.28657C4.75 3.18327 4.77136 3.08099 4.81285 2.98556C4.85435 2.89013 4.91517 2.80342 4.99185 2.73038C5.06853 2.65734 5.15955 2.5994 5.25974 2.55987C5.35992 2.52035 5.46729 2.5 5.57573 2.5C5.68416 2.5 5.79154 2.52035 5.89172 2.55987C5.9919 2.5994 6.08293 2.65734 6.15961 2.73038L11.1077 7.44381C11.1845 7.51679 11.2455 7.60348 11.287 7.69892C11.3286 7.79436 11.35 7.89667 11.35 8C11.35 8.10333 11.3286 8.20564 11.287 8.30108C11.2455 8.39652 11.1845 8.48321 11.1077 8.55619L6.15961 13.2696C6.08293 13.3427 5.9919 13.4006 5.89172 13.4401C5.79154 13.4797 5.68416 13.5 5.57573 13.5C5.46729 13.5 5.35992 13.4797 5.25974 13.4401C5.15955 13.4006 5.06853 13.3427 4.99185 13.2696C4.91517 13.1966 4.85435 13.1099 4.81285 13.0144C4.77136 12.919 4.75 12.8167 4.75 12.7134C4.75 12.6101 4.77136 12.5079 4.81285 12.4124C4.85435 12.317 4.91517 12.2303 4.99185 12.1573Z"
                                        fill="#FFF"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="ctw-flex ctw-flex-col ctw-gap-8 ctw-mt-8">
                      <div className="ctw-flex ctw-w-full ctw-justify-evenly ctw-items-center">
                        <hr className="ctw-w-1/3 ctw-h-0" />
                        <span>Ou</span>
                        <hr className="ctw-w-1/3 ctw-h-0" />
                      </div>
                      <div>
                        <div className="ds-button">
                          <div
                            className="ds-custom-tag"
                            style={{ height: "100%", width: "100%" }}
                          >
                            <button
                              style={{
                                border: "1px solid rgb(30, 29, 29",
                                color: "rgb(30, 29, 29)",
                              }}
                              className="ctw-select-none ctw-flex ctw-box-border ctw-items-center ctw-justify-center ctw-font-bold ctw-underline-offset-4 ctw-min-w-min ctw-w-full ctw-transition-all ctw-duration-300 ctw-outline-none ctw-bg-transparent ctw-text-primary-500 ctw-border-solid ctw-border-[1.5px] ctw-border-primary-200 hover:ctw-shadow-lg hover:ctw-text-primary-700 hover:ctw-border-primary-700 focus:ctw-shadow-lg focus:ctw-text-primary-700 focus:ctw-border-primary-700 ctw-cursor-pointer ctw-h-10 ctw-text-[1rem] ctw-rounded"
                            >
                              <div className="ctw-flex ctw-flex-row">
                                <div className="ctw-flex ctw-items-center ctw-grow ctw-flex-row-reverse ctw-justify-center">
                                  <div className="ctw-cursor-[inherit] ctw-px-3 ctw-text-left">
                                    S&apos;inscrire avec Google
                                  </div>

                                  <div className="ctw-shrink-0 ctw-flex ctw-justify-center ctw-cursor-[inherit] ctw-pl-3">
                                    <svg
                                      className="ds-icon"
                                      height="30px"
                                      width="30px"
                                      viewBox="0 0 16 16"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M5.21621 9.04312L4.86812 10.3426L3.59588 10.3695C3.21566 9.66428 3 8.85742 3 8C3 7.17088 3.20164 6.389 3.55906 5.70055H3.55934L4.69199 5.9082L5.18816 7.03406C5.08432 7.33682 5.02771 7.66182 5.02771 8C5.02775 8.36703 5.09424 8.71869 5.21621 9.04312Z"
                                        fill="#FBBB00"
                                      ></path>
                                      <path
                                        d="M12.9126 7.06593C12.9701 7.36839 13 7.68076 13 8C13 8.35796 12.9624 8.70714 12.8907 9.04396C12.6473 10.1901 12.0113 11.1909 11.1302 11.8992L11.13 11.8989L9.70332 11.8261L9.50141 10.5657C10.086 10.2228 10.5429 9.68627 10.7836 9.04396H8.10992V7.06593H10.8226H12.9126Z"
                                        fill="#518EF8"
                                      ></path>
                                      <path
                                        d="M11.1299 11.8989L11.1302 11.8992C10.2734 12.5879 9.18488 13 8 13C6.09588 13 4.44039 11.9357 3.59588 10.3695L5.21621 9.04315C5.63846 10.1701 6.72555 10.9723 8 10.9723C8.54779 10.9723 9.061 10.8242 9.50137 10.5657L11.1299 11.8989Z"
                                        fill="#28B446"
                                      ></path>
                                      <path
                                        d="M11.1915 4.15109L9.57171 5.47719C9.11595 5.1923 8.5772 5.02773 8.00001 5.02773C6.69671 5.02773 5.58929 5.86674 5.18819 7.03406L3.55934 5.70055H3.55907C4.39122 4.09615 6.06759 3 8.00001 3C9.21319 3 10.3256 3.43215 11.1915 4.15109Z"
                                        fill="#F14336"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sc-bee96ab4-0 XYQTO">
                      <div>Déjà un compte RDVanytime ?</div>
                      <div className="ctw-text-primary-500 ctw-cursor-pointer">
                        <Link to="/Signin"> Se connecter</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ctw-hidden"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SectionSignup;
