
import "../Médecin/Medecin.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Menu2 } from "../../Components/menu/Menu2";
import { useRef, useEffect } from "react";
import React, { useState } from 'react';
import { Footer } from "../../Components/Footer/Footer.jsx";
import { Head } from "../../Components/Head.jsx";
import axios from "axios";
function Medecin() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAllSlots, setShowAllSlots] = useState(false);
  const [slotsToShow, setSlotsToShow] = useState(5); // Ajout de l'état pour suivre le nombre de créneaux à afficher

  //calendrier
  const DoctorCalendar = ({ doctorId }) => {
    const [dates, setDates] = useState([]);
    const [unavailableTimeSlots, setUnavailableTimeSlots] = useState([]);

    useEffect(() => {
      const fetchUnavailableTimeSlots = async () => {
        try {
          const response = await axios.post(
            "http://localhost:5000/doc-calender",
            { doc_id: doctorId }
          );
          console.log(response.data.dateTime);
          setUnavailableTimeSlots(response.data.dateTime);
        } catch (error) {
          console.error("Error fetching unavailable time slots:", error);
        }
      };

      fetchUnavailableTimeSlots();
    }, [doctorId]);

    const generateDates = (start, end) => {
      const dateList = [];
      let currentDate = new Date(start);

      while (currentDate <= end) {
        dateList.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }

      setDates(dateList);
    };

    useEffect(() => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const end = new Date();
      end.setDate(tomorrow.getDate() + 3); // Show dates for the next 4 days starting from tomorrow

      generateDates(tomorrow, end);
    }, []);

    const handleNextWeek = () => {
      const newStartDate = new Date(dates[dates.length - 1]);
      newStartDate.setDate(newStartDate.getDate() + 1); // Move start date to the next 4 days
      const newEndDate = new Date(newStartDate);
      newEndDate.setDate(newEndDate.getDate() + 3); // Move end date to the next 4 days

      generateDates(newStartDate, newEndDate);
    };

    const handlePrevWeek = () => {
      const prevStartDate = new Date(dates[0]);
      prevStartDate.setDate(prevStartDate.getDate() - 4); // Move start date to the previous 4 days

      generateDates(
        prevStartDate,
        new Date(prevStartDate).setDate(prevStartDate.getDate() + 3)
      );
    };

    const formatDate = (date) => {
      const options = { month: "short", day: "numeric" };
      return date.toLocaleDateString("en-US", options);
    };

    const getDayName = (date) => {
      const days = [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
      ];
      return days[date.getDay()];
    };

    const getTimeSlots = (date) => {
      try {
        const timeSlots = [];
        const isFriday = getDayName(date) === "Vendredi";
        const maxSlotsToShow = showAllSlots ? Infinity : slotsToShow; // Utiliser l'état pour déterminer le nombre de créneaux à afficher
        for (let hour = 8; hour < 17; hour++) {
          for (let minute = 0; minute < 60; minute += 30) {
            if (timeSlots.length >= maxSlotsToShow) break; // Limiter le nombre de créneaux affichés
            if (isFriday) {
              const time = `${hour.toString().padStart(2, "0")}:${minute
                .toString()
                .padStart(2, "0")}`;
              timeSlots.push({
                slotClass: "availabilities-empty-slot",
                time: <div className="availabilities-empty-slot-dash"></div>,
                onClick: null,
              });
            } else {
              const roundedMinute = Math.floor(minute / 30) * 30;
              const time = `${hour.toString().padStart(2, "0")}:${roundedMinute
                .toString()
                .padStart(2, "0")}`;
              const dateTimeToCheck = new Date(
                Date.UTC(
                  date.getFullYear(),
                  date.getMonth(),
                  date.getDate(),
                  hour,
                  roundedMinute
                )
              );
              const formattedDateTime = dateTimeToCheck.toISOString();
              const available =
                !unavailableTimeSlots.includes(formattedDateTime);
              const slotClass = `Tappable-inactive availabilities-slot ${
                available
                  ? "availabilities-disponible"
                  : "availabilities-indisponible"
              }`;
              const onClick = available
                ? () => handleTimeSlotClick(doctorId, date, time)
                : null;
              timeSlots.push({ time, slotClass, onClick });
            }
          }
        }
        return timeSlots;
      } catch (error) {
        console.error("Error fetching unavailable time slots:", error);
        return [];
      }
    };
    const handleTimeSlotClick = (docId, date, time) => {
      const [hours, minutes] = time.split(":");

      const dateTime = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hours,
        minutes
      );
      dateTime.setHours(dateTime.getHours() + 1);

      // Check if the date is valid
      if (isNaN(dateTime.getTime())) {
        console.error("Invalid date:", dateTime);
        return;
      }

      // Store the doc_id and clicked time in local storage
      localStorage.setItem("doc_id", docId);
      localStorage.setItem("clicked_time", dateTime.toISOString());
      console.log("Time slot clicked!");
      window.location.href = "http://localhost:5173/Rdv";
    };
const handleButtonClick = () => {
  setShowAllSlots(!showAllSlots);
  if (!showAllSlots) {
    // Si on passe à l'affichage de tous les créneaux, on met à jour l'état pour afficher tous les créneaux
    setSlotsToShow(Infinity);
  } else {
    // Si on passe à l'affichage de moins d'horaires, on réinitialise l'état pour n'afficher que 5 créneaux
    setSlotsToShow(5);
  }
};

    return (
      <div className="dl-search-result-calendar">
        <div
          className="dl-desktop-availabilities-days"
          style={{ opacity: "1" }}
        >
          <div className="availabilities-pagination">
            <button
              onClick={handlePrevWeek}
              disabled={
                dates[0] <= new Date().setDate(new Date().getDate() + 1)
              } // Disable back button if start date is tomorrow or earlier
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
          {dates.map((date, index) => (
            <div key={index} className="availabilities-day">
              <div className="availabilities-day-title">
                <div className="availabilities-day-name">
                  {getDayName(date)}
                </div>
                <div className="availabilities-day-date">
                  {formatDate(date)}
                </div>
              </div>
              <div className="availabilities-slots">
                {getTimeSlots(date).map((slot, index) => (
                  <div
                    key={index}
                    className={slot.slotClass}
                    style={{
                      tapHighlightColor: "rgba(0, 0, 0, 0)",
                      userSelect: "none",
                      cursor: slot.onClick ? "pointer" : "not-allowed", // Change cursor to "not-allowed" for unavailable slots
                    }}
                    onClick={slot.onClick}
                  >
                    {slot.time}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="availabilities-pagination">
            <button
              onClick={handleNextWeek}
              disabled={
                dates[dates.length - 1] >=
                new Date().setDate(new Date().getDate() + 30)
              } // Disable next button if end date is 30 days from today
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
        <button
          onClick={handleButtonClick}
          className="Tappable-inactive dl-button-tertiary-primary dl-button dl-button-block dl-button-size-medium"
          type="button"
          data-design-system="oxygen"
          data-design-system-component="Button"
          style={{
            webkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            userSelect: "none",
            cursor: "pointer",
          }}
        >
          {showAllSlots ? "Voir moins d'horaires" : "Voir plus d'horaires"}
        </button>

        <div className="availabilities-substition-description" style={{marginTop: "16px",
  paddingLeft: "12%"}}>
          <div className="availabilities-substitution-indicator-disponible"></div>
          <span className="availabilities-substition-name">Disponible</span>

          <div className="availabilities-substitution-indicator-indisponible"></div>
          <span className="availabilities-substition-name">Indisponible</span>
        </div>
      </div>
    );
  };

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

  const [showContent, setShowContent] = useState(true);

  const handleButtonClick = () => {
    setShowContent(!showContent);
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

  const fetchDoctorData = async () => {
    try {
      const docId = localStorage.getItem("doc_id");
      if (docId) {
        const response = await axios.post("http://localhost:5000/doctorbyid", {
          docId,
        });
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
  useEffect(() => {
    fetchDoctorData();
    console.log(doctorData);
  }, []);

  const handleInputClick2 = () => {
    setShowDiv2(true);
  };

  const [doctorData, setDoctorData] = useState({});

  return (
    <>
      <div className="Main">
        {/**Header */}
        <Head brand="Header"/>
        <main>
          <div className="bg-p-cover od-profile od-profile--bookable">
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
                    Dr {doctorData.firstName} {doctorData.lastName}
                  </h1>
                  <h2 className="od-profile-header-description-specialty">
                    {doctorData.type}
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
                              {doctorData.description}
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
                          <p>Depuis {doctorData.experience}</p>
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
                          <p>{doctorData.phoneNumber}</p>
                          <p>{doctorData.email}</p>
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
                        <div className="wrapperr">
                          <span className="grade">{doctorData.rating * 2}</span>
                        </div>
                        <p className="raters">
                          From {doctorData.reviews} reviews
                        </p>
                      </div>
                      <div className="average-bars">
                        <div className="bar average-bar">
                          <div className="text">
                            Reviews by {doctorData.reviews} patient
                          </div>
                          <div className="line">
                            <div
                              className="line__inner"
                              style={{
                                width: `${doctorData.rating * 2 * 10}%`,
                              }}
                            ></div>
                          </div>
                          <div className="grade">{doctorData.rating * 2}</div>
                        </div>

                        <div className="bar bar--pink">
                          <div className="text">Punctuality</div>
                          <div className="line">
                            <div
                              className="line__inner"
                              style={{
                                width: `${doctorData.punctuality * 10}%`,
                              }}
                            ></div>
                          </div>
                          <div className="grade">{doctorData.punctuality}</div>
                        </div>
                        <div className="bar bar--pink">
                          <div className="text">
                            Cleanliness of the practice
                          </div>
                          <div className="line">
                            <div
                              className="line__inner"
                              style={{ width: `${doctorData.cabinet * 10}%` }}
                            ></div>
                          </div>
                          <div className="grade">{doctorData.cabinet}</div>
                        </div>
                        <div className="bar bar--pink">
                          <div className="text">
                            Clear information on the pathology
                          </div>
                          <div className="line">
                            <div
                              className="line__inner"
                              style={{
                                width: `${doctorData.pathologie * 10}%`,
                              }}
                            ></div>
                          </div>
                          <div className="grade">{doctorData.pathologie}</div>
                        </div>
                        <div className="bar bar--pink">
                          <div className="text">
                            Clear information on the side effects
                          </div>
                          <div className="line">
                            <div
                              className="line__inner"
                              style={{ width: `${doctorData.effets * 10}%` }}
                            ></div>
                          </div>
                          <div className="grade">{doctorData.effets}</div>
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
                                      {doctorData.lastName}
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
                                      Je suis déjà suivi(e) par{" "}
                                      {doctorData.lastName}
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
                                <div
                                  className="flex flex-col sm:grid grid-cols-2 gap-4"
                                  style={{ display: "flex", paddingTop: "3%" }}
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
                                              data-name="go to arrow"
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
                                    <DoctorCalendar
                                      doctorId={localStorage.getItem("doc_id")}
                                    />
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
      <Footer />
    </>
  );
}
export default Medecin;
