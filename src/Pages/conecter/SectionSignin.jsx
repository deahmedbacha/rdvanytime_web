import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Padding } from "@mui/icons-material";
import ReCAPTCHA from "react-google-recaptcha";

function SectionSignin() {
  //email:
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  //password:
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidPassword2, setIsValidPassword2] = useState(false);

  //login
  const [, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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

  const handleSubmit = async (e) => {
    const formData = { email: email, password: password };
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        formData
      );
      console.log("Button clicked!1");
      console.log(response.data); // assuming server responds with a token
      // Store token in local storage or session storage
      localStorage.setItem("token", response.data.token);
      // Redirect to home page
      window.location.href = "http://localhost:5173/";
    } catch (error) {
      console.error("Login failed:", error.response.data); // log the error
      toast.error("Mot de passe ou adresse email incorrecte");
      // Handle error, e.g., show an error message to the user
    }
  };

  //afficher/masqué password :
  const toggleShowPassword = () => {
    setIsValidPassword2(!isValidPassword2);
  };
  //ReCAPTCHA
  const [captchaValue, setCaptchaValue] = useState(null);
  // État pour la section de réinitialisation du mot de passe
  const [resetPasswordSection, setResetPasswordSection] = useState({
    email: "",
    code: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleResetPasswordChange = (e) => {
    const { name, value } = e.target;
    setResetPasswordSection((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleResetPasswordSubmit = (e) => {
    e.preventDefault();
    // Logique pour réinitialiser le mot de passe ici
    console.log(resetPasswordSection);
  };

  const [showResetPasswordSection, setShowResetPasswordSection] =
    useState(false);

  const ResetPasswordSection = () => {
    const { email, code, newPassword, confirmPassword } = resetPasswordSection;
    return (
      <div className="sc-2947b9f1-2 gdibZm">
        <h3 className="sc-2947b9f1-0 cLNYuH">Réinitialiser mon mot de passe</h3>
        <div className="sc-2947b9f1-3 lfDZlU">
          <h4 className="sc-2947b9f1-1 bTEMsK">Mot de passe oublié</h4>
          <div className="sc-2947b9f1-4 iFYeeX">
            <div className="sc-2947b9f1-6 kkAxbm">
              <div className="sc-2947b9f1-7 cyEXKY">1</div>
              <div>Saisir l'adresse mail liée à votre compte.</div>
            </div>
            <div className="sc-2947b9f1-6 kkAxbm">
              <div className="sc-2947b9f1-7 cyEXKY">2</div>
              <div>
                Cliquez sur "Recevez le code". Vous recevrez un code par email.
              </div>
            </div>
            <div className="sc-2947b9f1-6 kkAxbm">
              <div className="sc-2947b9f1-7 cyEXKY">3</div>
              <div>Entrez ce code dans le champ prévu à cet effet.</div>
            </div>
            <div className="sc-2947b9f1-6 kkAxbm">
              <div className="sc-2947b9f1-7 cyEXKY">4</div>
              <div>
                Après la validation de votre nouveau mot de passe, vous pourrez
                vous connecter à nouveau.
              </div>
            </div>
            <form onSubmit={handleResetPasswordSubmit}>
              <div className="ctw-my-3">
                <div className="ds-input">
                  <div className="ctw-flex ctw-flex-row ctw-items-center ctw-justify-items-center ctw-mt-0.5 ctw-border ctw-border-solid ctw-box-border ctw-rounded-md ctw-w-full ctw-h-10 ctw-text[#1e1d1d] ctw-bg-[#f4f7fa] ctw-border-transparent false undefined">
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={handleResetPasswordChange}
                      placeholder=" Adresse mail du compte à réinitialiser"
                      className="ctw-outline-none ctw-bg-transparent ctw-w-full ctw-rounded-md ctw-text-base ctw-border-none ctw-truncate ctw-ml-2 false undefined"
                    />
                  </div>
                </div>
                <div className="ds-input">
                  <div style={{ display: "block ruby" }}>
                    <div
                      className="ctw-flex ctw-flex-row ctw-items-center ctw-justify-items-center ctw-mt-0.5 ctw-border ctw-border-solid ctw-box-border ctw-rounded-md  ctw-h-10 ctw-text[#1e1d1d] ctw-bg-[#f4f7fa] ctw-border-transparent false undefined"
                      style={{ height: "100%", width: "65%" }}
                    >
                      <input
                        type="text"
                        name="code"
                        value={code}
                        onChange={handleResetPasswordChange}
                        placeholder="Entrer le code"
                        className="ctw-outline-none ctw-bg-transparent ctw-w-full ctw-rounded-md ctw-text-base ctw-border-none ctw-truncate ctw-ml-2 false undefined"
                      />
                    </div>
                    <div
                      className="ctw-mt-8"
                      style={{
                        height: "100%",
                        width: "35%",
                        paddingLeft: "3%",
                      }}
                    >
                      <div className="ds-button">
                        <div className="ds-custom-tag">
                          <button
                            type="submit"
                            className="ctw-select-none ctw-flex ctw-box-border ctw-items-center ctw-justify-center ctw-font-bold ctw-underline-offset-4 ctw-min-w-min ctw-w-full ctw-transition-all ctw-duration-300 ctw-outline-none ctw-bg-primary-500 ctw-text-white ctw-border-solid ctw-border-[1.5px] ctw-border-primary-500 hover:ctw-shadow-lg hover:ctw-bg-primary-700 hover:ctw-border-primary-700 focus:ctw-shadow-lg focus:ctw-bg-primary-700 focus:ctw-border-primary-700 ctw-cursor-pointer ctw-h-10 ctw-text-[1rem] ctw-rounded"
                          >
                            <div className="ctw-flex ctw-flex-row">
                              <div className="ctw-flex ctw-items-center ctw-grow ctw-flex-row ctw-justify-center">
                                <div className="ctw-cursor-[inherit] ctw-px-3 ctw-text-center">
                                  Recevez le code
                                </div>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ds-input" style={{ marginTop: "3%" }}>
                  <div className="ctw-flex ctw-flex-row ctw-items-center ctw-justify-items-center ctw-mt-0.5 ctw-border ctw-border-solid ctw-box-border ctw-rounded-md ctw-w-full ctw-h-10 ctw-text[#1e1d1d] ctw-bg-[#f4f7fa] ctw-border-transparent false undefined">
                    <input
                      type="text"
                      name="newPassword"
                      value={newPassword}
                      onChange={handleResetPasswordChange}
                      placeholder="Nouveau mot de passe"
                      className="ctw-outline-none ctw-bg-transparent ctw-w-full ctw-rounded-md ctw-text-base ctw-border-none ctw-truncate ctw-ml-2 false undefined"
                    />
                  </div>
                </div>
                <div className="ds-input" style={{ marginTop: "3%" }}>
                  <div className="ctw-flex ctw-flex-row ctw-items-center ctw-justify-items-center ctw-mt-0.5 ctw-border ctw-border-solid ctw-box-border ctw-rounded-md ctw-w-full ctw-h-10 ctw-text[#1e1d1d] ctw-bg-[#f4f7fa] ctw-border-transparent false undefined">
                    <input
                      type="text"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleResetPasswordChange}
                      placeholder="confirmer le mot de passe"
                      className="ctw-outline-none ctw-bg-transparent ctw-w-full ctw-rounded-md ctw-text-base ctw-border-none ctw-truncate ctw-ml-2 false undefined"
                    />
                  </div>
                </div>
              </div>
              <div className="ctw-mt-8">
                <div className="ds-button">
                  <div
                    className="ds-custom-tag"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <button
                      type="submit"
                      className="ctw-select-none ctw-flex ctw-box-border ctw-items-center ctw-justify-center ctw-font-bold ctw-underline-offset-4 ctw-min-w-min ctw-w-full ctw-transition-all ctw-duration-300 ctw-outline-none ctw-bg-primary-500 ctw-text-white ctw-border-solid ctw-border-[1.5px] ctw-border-primary-500 hover:ctw-shadow-lg hover:ctw-bg-primary-700 hover:ctw-border-primary-700 focus:ctw-shadow-lg focus:ctw-bg-primary-700 focus:ctw-border-primary-700 ctw-cursor-pointer ctw-h-10 ctw-text-[1rem] ctw-rounded"
                    >
                      <div className="ctw-flex ctw-flex-row">
                        <div className="ctw-flex ctw-items-center ctw-grow ctw-flex-row ctw-justify-center">
                          <div className="ctw-cursor-[inherit] ctw-px-3 ctw-text-center">
                            Réinitialiser mon mot de passe
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="sc-2947b9f1-10 kizIBB">
            <div className="ds-button">
              <div
                className="ds-custom-tag"
                style={{ height: "100%", width: "100%" }}
              >
                <button
                  type="button"
                  className="ctw-select-none ctw-flex ctw-box-border ctw-items-center ctw-justify-center ctw-font-bold ctw-underline-offset-4 ctw-min-w-min ctw-w-full ctw-transition-all ctw-duration-300 ctw-outline-none ctw-bg-transparent ctw-text-primary-500 ctw-border-none hover:ctw-text-primary-700 hover:ctw-underline focus:ctw-text-primary-700 focus:ctw-underline ctw-cursor-pointer ctw-h-10 ctw-text-[1rem] ctw-rounded"
                >
                  <div className="ctw-flex ctw-flex-row">
                    <div className="ctw-flex ctw-items-center ctw-grow ctw-flex-row-reverse ctw-justify-center">
                      <div
                        className="ctw-cursor-[inherit] ctw-px-3 ctw-text-left"
                        onClick={() =>
                          setShowResetPasswordSection(!showResetPasswordSection)
                        }
                      >
                        Retour
                      </div>
                      <div className="ctw-shrink-0 ctw-flex ctw-justify-center ctw-cursor-[inherit] ctw-pl-3">
                        <svg
                          className="ds-icon"
                          width="1em"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.1082 3.84275L7.83533 6.9589C7.65672 7.12895 7.46414 7.28368 7.25962 7.42147L7.07795 7.54385C6.75434 7.76186 6.75434 8.23814 7.07795 8.45615L7.25962 8.57853C7.46414 8.71631 7.65673 8.87105 7.83533 9.0411L11.1082 12.1572C11.1848 12.2303 11.2456 12.317 11.2871 12.4124C11.3286 12.5079 11.35 12.6101 11.35 12.7134C11.35 12.8167 11.3286 12.919 11.2871 13.0144C11.2456 13.1099 11.1848 13.1966 11.1081 13.2696C11.0315 13.3427 10.9404 13.4006 10.8403 13.4401C10.7401 13.4797 10.6327 13.5 10.5243 13.5C10.4158 13.5 10.3085 13.4797 10.2083 13.4401C10.1081 13.4006 10.0171 13.3427 9.94039 13.2696L4.99228 8.55618C4.91548 8.48321 4.85455 8.39652 4.81298 8.30108C4.7714 8.20564 4.75 8.10333 4.75 8C4.75 7.89667 4.7714 7.79435 4.81298 7.69892C4.85455 7.60348 4.91548 7.51679 4.99228 7.44381L9.9404 2.73038C10.0171 2.65734 10.1081 2.5994 10.2083 2.55987C10.3085 2.52034 10.4158 2.5 10.5243 2.5C10.6327 2.5 10.7401 2.52034 10.8403 2.55987C10.9404 2.5994 11.0315 2.65734 11.1082 2.73038C11.1848 2.80342 11.2456 2.89013 11.2871 2.98556C11.3286 3.08099 11.35 3.18327 11.35 3.28656C11.35 3.38986 11.3286 3.49214 11.2871 3.58757C11.2456 3.683 11.1848 3.76971 11.1082 3.84275Z"
                            fill="#012bb4"
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
      </div>
    );
  };
  return (
    <>
      {showResetPasswordSection ? (
        <ResetPasswordSection />
      ) : (
        <div className="sc-1bc08e0b-5 jyhvPI">
          <div>
            <div className="sc-1bc08e0b-6 cxijwo">
              <div active="true" alone="false" className="sc-1bc08e0b-9 gMbGNQ">
                <div className="sc-1bc08e0b-8 eaIstY">
                  <div className="sc-1bc08e0b-7 cHqDRo">
                    <h4 className="sc-1bc08e0b-1 ewPuPZ">
                      Mot de passe oublié <span>particulier</span>
                    </h4>
                  </div>
                  <div className="sc-5ffdb2e4-9 bSGjar">
                    <div>
                      <form onSubmit={handleSubmit}>
                        <div className="ctw-flex ctw-flex-col ctw-gap-3">
                          <div className="ds-input">
                            <div className="ds-avec-label">
                              <p className="ctw-not-italic ctw-font-medium ctw-my-0 ctw-text-base ctw-hidden stw">
                                X
                              </p>
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
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleChangeemail}
                                placeholder="Adresse e-mail"
                                className="ctw-outline-none ctw-bg-transparent ctw-w-full ctw-rounded-md ctw-text-base ctw-border-none ctw-truncate ctw-ml-2 false undefined"
                              />
                            </div>
                            <div className="ds-avec-label">
                              {/*  <p className="ctw-not-italic ctw-font-medium ctw-my-0 ctw-text-xs stx"></p>  */}
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
                              <p className="ctw-not-italic ctw-font-medium ctw-my-0 ctw-text-base ctw-hidden stw">
                                X
                              </p>
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
                                id="password"
                                name="password"
                                value={password}
                                onChange={handleChangepass}
                                placeholder="Mot de passe"
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
                              {/*  <p className="ctw-not-italic ctw-font-medium ctw-my-0 ctw-text-xs stx"></p>  */}
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
                          <span
                            className="ctw-text-[#979797] ctw-text-sm"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              setShowResetPasswordSection(
                                !showResetPasswordSection
                              )
                            }
                          >
                            Mot de passe oublié ?
                          </span>
                          <ReCAPTCHA
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
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
                                  disabled={!captchaValue}
                                  onClick={handleSubmit}
                                  type="submit"
                                  className="ctw-select-none ctw-flex ctw-box-border ctw-items-center ctw-justify-center ctw-font-bold ctw-underline-offset-4 ctw-min-w-min ctw-w-full ctw-transition-all ctw-duration-300 ctw-outline-none ctw-bg-primary-500 ctw-text-white ctw-border-solid ctw-border-[1.5px] ctw-border-primary-500 hover:ctw-shadow-lg hover:ctw-bg-primary-700 hover:ctw-border-primary-700 focus:ctw-shadow-lg focus:ctw-bg-primary-700 focus:ctw-border-primary-700 ctw-cursor-pointer ctw-h-10 ctw-text-[1rem] ctw-rounded"
                                >
                                  <ToastContainer />
                                  <div className="ctw-flex ctw-flex-row">
                                    <div className="ctw-flex ctw-items-center ctw-grow ctw-flex-row ctw-justify-center">
                                      <div className="ctw-cursor-[inherit] ctw-px-3 ctw-text-center">
                                        Se connecter
                                      </div>
                                    </div>
                                  </div>
                                </button>
                              </div>
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
                                type="submit"
                                style={{
                                  border: "1px solid rgb(30, 29, 29) ",
                                  color: " rgb(30, 29, 29)",
                                }}
                                className="ctw-select-none ctw-flex ctw-box-border ctw-items-center ctw-justify-center ctw-font-bold ctw-underline-offset-4 ctw-min-w-min ctw-w-full ctw-transition-all ctw-duration-300 ctw-outline-none ctw-bg-transparent ctw-text-primary-500 ctw-border-solid ctw-border-[1.5px] ctw-border-primary-200 hover:ctw-shadow-lg hover:ctw-text-primary-700 hover:ctw-border-primary-700 focus:ctw-shadow-lg focus:ctw-text-primary-700 focus:ctw-border-primary-700 ctw-cursor-pointer ctw-h-10 ctw-text-[1rem] ctw-rounded"
                              >
                                <div className="ctw-flex ctw-flex-row">
                                  <div className="ctw-flex ctw-items-center ctw-grow ctw-flex-row-reverse ctw-justify-center">
                                    <div className="ctw-cursor-[inherit] ctw-px-3 ctw-text-left">
                                      Continuer avec Google
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
                        <div>Nouveau sur RDVanytime ?</div>
                        <div className="ctw-text-primary-500 ctw-cursor-pointer">
                          <Link to="/Signup">S&apos;inscrire </Link>
                        </div>
                      </div>
                    </div>
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
export default SectionSignin;
