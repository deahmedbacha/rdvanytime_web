import ShoxDiv1 from "../../Components/showDiv/ShoxDiv1.jsx";
import ShoxDiv2 from "../../Components/showDiv/ShowDiv2.jsx";
import ShoxDiv3 from "../../Components/showDiv/ShowDiv3.jsx";
import iconsearch from "../../assets/iconsearch.json";
import Lottie from "lottie-react";
import iconData from "../../assets/position.json";
import calender from "../../assets/calonder.json";
import StarRating from "react-star-ratings";
import "../Recherche/Recherche.css";
import { Link } from "react-router-dom";
import Head from "Components/Head.jsx";
import { Footer } from "../../Components/Footer/Footer.jsx";
import axios from "axios";
import  { useState, useEffect } from "react";
import { timeClockClasses } from "@mui/x-date-pickers";

const DoctorCalendar = ({ doctorId }) => {
  const [dates, setDates] = useState([]);
  const [unavailableTimeSlots, setUnavailableTimeSlots] = useState([]);
  const [showAllSlots, setShowAllSlots] = useState(false);
  const [slotsToShow, setSlotsToShow] = useState(5); // Ajout de l'état pour suivre le nombre de créneaux à afficher

  useEffect(() => {
    const fetchUnavailableTimeSlots = async () => {
      try {
        const response = await axios.post(
          "http://localhost:4000/doc-calender",
          { doc_id: doctorId }
        );

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
    end.setDate(tomorrow.getDate() + 6); // Show dates for the next week starting from tomorrow

    generateDates(tomorrow, end);
  }, []);

  const handleNextWeek = () => {
    const newStartDate = new Date(dates[dates.length - 1]);
    newStartDate.setDate(newStartDate.getDate() + 1); // Move start date to the next week
    const newEndDate = new Date(newStartDate);
    newEndDate.setDate(newEndDate.getDate() + 6); // Move end date to the next week

    generateDates(newStartDate, newEndDate);
  };

  const handlePrevWeek = () => {
    const prevStartDate = new Date(dates[0]);
    prevStartDate.setDate(prevStartDate.getDate() - 7); // Move start date to the previous week

    generateDates(
      prevStartDate,
      new Date(prevStartDate).setDate(prevStartDate.getDate() + 6)
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
            const available = !unavailableTimeSlots.includes(formattedDateTime);
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
  //
  const [showFirstContent, setShowFirstContent] = useState(true);

  return (
    <div className="dl-search-result-calendar">
      <div className="dl-desktop-availabilities-days" style={{ opacity: "1" }}>
        <div className="availabilities-pagination ">
          <button
            onClick={handlePrevWeek}
            disabled={dates[0] <= new Date().setDate(new Date().getDate() + 1)} // Disable back button if start date is tomorrow or earlier
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
              <div className="availabilities-day-name">{getDayName(date)}</div>
              <div className="availabilities-day-date">{formatDate(date)}</div>
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

      <div className="availabilities-substition-description">
        <div className="availabilities-substitution-indicator-disponible"></div>
        <span className="availabilities-substition-name">Disponible</span>

        <div className="availabilities-substitution-indicator-indisponible"></div>
        <span className="availabilities-substition-name">Indisponible</span>
      </div>
    </div>
  );
};

function Recherche() {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const [currentMap, setCurrentMap] = useState("");

  useEffect(() => {
    localStorage.removeItem("clicked_time");
    localStorage.removeItem("doc_id");
    const fetchDoctorsData = async () => {
      try {
        const recherche = localStorage.getItem("recherche");
        const [type, ville] = recherche.split(",");
        console.log(recherche);
        console.log(type);
        console.log(ville);
        const response = await axios.post(
          "http://localhost:4000/search-doctors",
          { type, ville }
        );

        const doctorsWithCalendar = await Promise.all(
          response.data.map(async (doctor) => {
            return { ...doctor };
          })
        );

        setDoctors(doctorsWithCalendar);
      } catch (error) {
        console.error("Error fetching doctors data:", error);
      }
    };

    fetchDoctorsData();
  }, []);

  const handleDoctorSelect = (doctorId) => {
    setSelectedDoctorId(doctorId);
  };

  return (
    <>
      <div
        id="build-overlay"
        className="fixed inset-0 w-full h-screen hidden z-0 transition-all build-overlay"
      ></div>
      <div id="__next" data-reactroot className="mt-20 bg-p-cover h-full pb-10">
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
          <Head brand="fixed h-20 end-0 w-full opacity-100 bg-white top-0 z-[49]" />
          <section id="search-section" className="mt-20 bg-p-cover h-full">
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
                <button className="butt-phone  rounded-full bg-primary hover:bg-primary-bold text-center text-white font-medium md:w-max flex items-center justify-center h-14 py-2 px-5 text-base rtl:text-lg">
                  <div className=" md:flex">Rechercher</div>
                </button>
              </div>
            </div>
            <div className="px-6 max-w-4xl mx-auto mt-10 lg:px-0">
              <div className="grid grid-flow-col auto-cols gap-3 overflow-y-auto scrollbar-hide">
                {/* Place your search filters/buttons here */}
              </div>
            </div>
          </section>
        </section>
        <div className="px-2 md:px-6 mt-5 lg:px-0">
          <div data-place-id="" data-speciality-id="">
            <div className="row-center row-padding-1">
              <div className="js-dl-doctor-results">
                <div className="col-8 col-padding search-results-col-list">
                  {doctors.map((doctor) => (
                    <div
                      key={doctor._id}
                      className="dl-search-result"
                      onMouseEnter={() => setCurrentMap(doctor.map)}
                    >
                      <div className="dl-search-result-presentation">
                        <div className="dl-search-result-title-container">
                          <div className="dl-search-result-avatar">
                            {doctor.avatar ? (
                              <img
                                src={doctor.avatar}
                                alt=""
                                className="dl-image dl-image-rounded"
                              />
                            ) : (
                              <img
                                src="src/assets/avatar_doctor.png"
                                alt="Default Avatar"
                                className="dl-image dl-image-rounded"
                              />
                            )}
                          </div>
                          <div className="dl-search-result-title">
                            <div className="dl-flex-row dl-justify-between dl-align-items-center">
                              <a
                                className="dl-link"
                                onClick={() =>
                                  localStorage.setItem("doc_id", doctor._id)
                                }
                                href="http://localhost:5173/Medecin"
                              >
                                <h3 className="dl-text dl-text-body dl-text-regular dl-text-s dl-text-primary-110">
                                  Dr {doctor.firstName} {doctor.lastName}
                                </h3>
                              </a>{" "}
                            </div>
                            <div className="dl-search-result-subtitle">
                              <div className="text-sm md:text-base font-light text-gray-900 min-w-[max-content]">
                                {doctor.type}
                              </div>
                            </div>
                          </div>
                        </div>
                        <a
                          href={doctor.map}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <div className="ml-96">
                            <span className="dl-text dl-text-body dl-text-regular dl-text-s">
                              {doctor.ville}
                            </span>
                            <div className="dl-text dl-text-body dl-text-regular dl-text-s">
                              {doctor.ville}
                            </div>
                          </div>
                        </a>
                        <div
                          className="dl-text dl-text-body dl-text-regular dl-text-s dl-text-neutral-090 !my-16"
                          style={{ paddingLeft: "30%" }}
                        >
                          <StarRating
                            rating={parseFloat(doctor.rating)} // Convert doctor.rating to a number if it's a string
                            starRatedColor="#02ae96"
                            numberOfStars={5}
                            name={`rating-${doctor._id}`}
                            starDimension="20px"
                          />
                        </div>
                        <div className="flex dl-justify-center my-16">
                          <a
                            onClick={() =>
                              localStorage.setItem("doc_id", doctor._id)
                            }
                            href="http://localhost:5173/Medecin"
                            className="text-sm md:text-base font-semibold rounded-3xl px-7 py-3 bg-primary-ice text-white"
                            rel="noreferrer noopener"
                          >
                            <span className="dl-button-label">
                              Prendre rendez-vous
                            </span>
                          </a>
                        </div>
                      </div>
                      <DoctorCalendar doctorId={doctor._id}></DoctorCalendar>
                    </div>
                  ))}
                </div>
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
                            src={currentMap}
                            width="600"
                            height="450"
                            style={{ border: "0" }}
                            allowFullScreen=""
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
      </div>
      <Footer />
    </>
  );
}

export default Recherche;
