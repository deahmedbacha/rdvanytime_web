import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import Headconectpro from "Modepro/Headconectpro";
import { Footer } from "../../Components/Footer/Footer.jsx";
import "./Agenda.css";
import {
  Eventcalendar,
  formatDate,
  Input,
  Page,
  setOptions,
  localeFr,
  Button,
  CalendarNav,
  CalendarToday,
  Segmented,
  SegmentedGroup,
  Popup,
  Snackbar,
  Textarea,
  Switch,
  Datepicker,
} from "@mobiscroll/react";
import { useCallback, useMemo, useEffect, useRef, useState } from "react";
//
setOptions({
  locale: localeFr,
  theme: "ios",
  themeVariant: "light",
});
//
const today = new Date();
//
function App() {
  const [calEvents, setCalEvents] = useState([]); //Calander
  const [listEvents, setListEvents] = useState([]); //Rechercher un rendez-vous
  const [mySelectedEvent, setSelectedEvent] = useState([]); //Calander
  const [showList, setShowList] = useState(false); //Rechercher un rendez-vous
  const [currentDate, setCurrentDate] = useState(new Date()); //Calander
  const [view, setView] = useState("week"); //Calander
  const timerRef = useRef(null);
  const [isOpen, setOpen] = useState(false); //add rdv
  const [anchor, setAnchor] = useState(null); //add rdv
  const [calView, setCalView] = useState({
    schedule: {
      labels: true,
      startTime: "08:00",
      endTime: "17:00",
      timeCellStep: 30,
      timeLabelStep: 30,
      currentTimeIndicator: true,
    },
  }); //Calander
  const listView = useMemo(() => ({ agenda: { type: "year", size: 5 } }), []); //Rechercher un rendez-vous
  const [isEdit, setEdit] = useState(false); //add rdv
  const [tempEvent, setTempEvent] = useState(null);
  const [undoEvent, setUndoEvent] = useState(null);
  const [isSnackbarOpen, setSnackbarOpen] = useState(false); //Snackbar
  const [popupEventName, setName] = useState(""); //add rdv
  const [popupEventLastName, setLastName] = useState(""); //add rdv
  const [popupEventPhoneNumber, setPhoneNumber] = useState(""); //add rdv
  const [popupEventEmail, setEmail] = useState(""); //add rdv
  const [popupEventDateNaissance, setDateNaissance] = useState(""); //add rdv
  const [popupEventSexe, setSexe] = useState(null); //add rdv
  const [popupEventTaille, setTaille] = useState(""); //add rdv
  const [popupEventPoids, setPoids] = useState(""); //add rdv
  const [popupEventBlood_type, setBlood_type] = useState(""); //add rdv
  const [popupEventFumeur, setFumeur] = useState(false); //add rdv
  const [popupEventAlcool, setAlcool] = useState(false); //add rdv
  const [popupEventMarie, setMarie] = useState(false); //add rdv
  const [popupEventMaladieCronique, setMaladieCronique] = useState([]);
  const [popupEventChirurgie, setChirurgie] = useState([]);
  const [popupEventAllergie, setAllergie] = useState([]);
  const [popupEventmedicament, setmedicament] = useState([]);

  const [popupEventRue, setRue] = useState(""); //add rdv
  const [popupEventRueNumero, setRueNumero] = useState(""); //add rdv
  const [popupEventVille, setVille] = useState(""); //add rdv
  const [popupEventodePostale, setCodePostale] = useState(""); //add rdv
  const [popupEventPays, setPays] = useState(""); //add rdv
  const [popupEventFiles, setFiles] = useState([]); //add rdv

  const [popupEventNotes, setNotes] = useState(""); //add rdv
  const [popupEventAllDay, setAllDay] = useState(true); //add rdv
  const [popupEventDate, setDate] = useState([]); //add rdv
  const [start, startRef] = useState(null); //add rdv
  const [end, endRef] = useState(null); //add rdv
  const [AjouterProche, setShowAjouterProche] = useState(false);
  const AjouterProcheClick = () => {
    setShowAjouterProche(true);
    setOpen(false);
  };

  const DisableProcheClick = () => {
    setShowAjouterProche(false);
  };
  //Rechercher un rendez-vous
  const handleInputChange = useCallback(
    (ev) => {
      const text = ev.target.value;

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        if (text.length > 0) {
          const filteredEvents = calEvents.filter((event) =>
            event.title.toLowerCase().includes(text.toLowerCase())
          );
          setListEvents(filteredEvents);
          setShowList(true);
        } else {
          setShowList(false);
        }
      }, 200);
    },
    [calEvents]
  );
  //Calander
  // const handlePageLoading = useCallback(
  //   (args) => {
  //     const start = formatDate("YYYY-MM-DD", args.viewStart);
  //     const end = formatDate("YYYY-MM-DD", args.viewEnd);

  //     setTimeout(() => {
  //       const filteredEvents = calEvents.filter(
  //         (event) => event.start >= start && event.start <= end
  //       );
  //       setCalEvents(filteredEvents);
  //     });
  //   },
  //   [calEvents]
  // );
  //
  const getFirstDayOfWeek = useCallback((d, prev) => {
    const day = d.getDay();
    const diff = d.getDate() - day + (prev ? -7 : 7);
    return new Date(d.setDate(diff));
  }, []);
  //Calander
  const changeView = useCallback((event) => {
    let calView;

    switch (event.target.value) {
      case "month":
      default:
        calView = {
          calendar: { labels: true },
        };
        break;
      case "week":
        calView = {
          schedule: {
            type: "week",
            startTime: "08:00",
            endTime: "17:00",
            timeCellStep: 30,
            timeLabelStep: 30,
            currentTimeIndicator: true,
          },
        };
        break;
      case "day":
        calView = {
          schedule: {
            type: "day",
            startTime: "08:00",
            endTime: "17:00",
            timeCellStep: 30,
            timeLabelStep: 30,
            currentTimeIndicator: true,
          },
        };
        break;
      case "agenda":
        calView = {
          calendar: { type: "week" },
          agenda: { type: "week" },
        };
        break;
    }

    setView(event.target.value);
    setCalView(calView);
  }, []);
  //Calander
  const navigatePage = useCallback(
    (prev) => {
      if (view == "month") {
        const prevNextPage = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + (prev ? -1 : 1),
          1
        );
        setCurrentDate(prevNextPage);
      } else {
        const prevNextSunday = getFirstDayOfWeek(currentDate, prev);
        setCurrentDate(prevNextSunday);
      }
    },
    [view, currentDate, getFirstDayOfWeek]
  );
  //Calander
  const handleSelectedDateChange = useCallback((event) => {
    setCurrentDate(event.date);
  }, []);
  //Calander
  const customWithNavButtons = useCallback(
    () => (
      <>
        <CalendarNav className="md-custom-header-nav" />
        <div className="google-cal-header-picker">
          <SegmentedGroup value={view} onChange={changeView}>
            <Segmented value="month">Month</Segmented>
            <Segmented value="week">Week</Segmented>
            <Segmented value="day">Day</Segmented>
            <Segmented value="agenda">Agenda</Segmented>
          </SegmentedGroup>
        </div>
        <div className="md-custom-header-controls">
          <Button
            onClick={() => navigatePage(true)}
            icon="material-arrow-back"
            variant="flat"
            className="md-custom-header-button"
          ></Button>
          <CalendarToday className="md-custom-header-today" />
          <Button
            onClick={() => navigatePage(false)}
            icon="material-arrow-forward"
            variant="flat"
            className="md-custom-header-button"
          ></Button>
        </div>
      </>
    ),
    [changeView, navigatePage, view]
  );
  //Rechercher un rendez-vous
  const handleEventClick = useCallback((args) => {
    setCurrentDate(args.event.start);
    setSelectedEvent([args.event]);
  }, []);

  //Calander
  const myInvalid = useMemo(
    () => [
      {
        recurring: {
          repeat: "weekly",
          weekDays: "FR",
        },
      },
      {
        recurring: {
          repeat: "daily",
          until: today,
        },
      },
    ],
    []
  );
  //

  const loadPopupForm = useCallback((event) => {
    setName(event.title);
    setLastName(event.lastName);
    setNotes(event.notes);
    setDate([event.start, event.end]);
    setAllDay(event.allDay || false);
    setPhoneNumber(event.phoneNumber);
    setEmail(event.email);
    setDateNaissance(event.dateNaissance);
    setSexe(event.sexe);
    setTaille(event.taille);
    setPoids(event.poids);
    setBlood_type(event.blood_type);
    setFumeur(event.Fumeur);
    setAlcool(event.Alcool);
    setMarie(event.Marie);
    setMaladieCronique(event.maladieCronique);
    setChirurgie(event.chirurgie);
    setAllergie(event.allergie);
    setmedicament(event.medicament);
    setRue(event.rue);
    setRueNumero(event.rueNumero);
    setVille(event.ville);
    setCodePostale(event.codePostale);
    setPays(event.pays);
    setFiles(event.files);
  }, []);
  //Calander
  const handleEventClick2 = useCallback(
    (args) => {
      setEdit(true);
      setTempEvent({ ...args.event });
      // fill popup form with event data
      loadPopupForm(args.event);
      setAnchor(args.domEvent.target);
      setOpen(true);
    },
    [loadPopupForm]
  );
  //
  const deleteEvent = useCallback(
    (event) => {
      setCalEvents(calEvents.filter((item) => item.id !== event.id));
      setUndoEvent(event);
      setTimeout(() => {
        setSnackbarOpen(true);
      });
    },
    [calEvents]
  );
  //Calander
  const onEventCreated = useCallback(
    (args) => {
      // createNewEvent(args.event, args.target)
      setEdit(false);
      setTempEvent(args.event);
      // fill popup form with event data
      loadPopupForm(args.event);
      setAnchor(args.target);
      // open the popup
      setOpen(true);
    },
    [loadPopupForm]
  );
  //Calander
  const onEventDeleted = useCallback(
    (args) => {
      deleteEvent(args.event);
    },
    [deleteEvent]
  );
  //Snackbar
  const snackbarButton = useMemo(
    () => ({
      action: () => {
        setCalEvents((prevEvents) => [...prevEvents, undoEvent]);
      },
      text: "Undo",
    }),
    [undoEvent]
  );
  //Snackbar
  const handleSnackbarClose = useCallback(() => {
    setSnackbarOpen(false);
  }, []);
  //
  const saveEvent = useCallback(() => {
    const newEvent = {
      id: tempEvent.id,
      title: popupEventName,
      lastName: popupEventLastName,
      notes: popupEventNotes,
      start: popupEventDate[0],
      end: popupEventDate[1],
      allDay: popupEventAllDay,
      color: tempEvent.color,
      phoneNumber: popupEventPhoneNumber,
      email: popupEventEmail,
      taille: popupEventTaille,
      poids: popupEventPoids,
      blood_type: popupEventBlood_type,
      Fumeur: popupEventFumeur,
      Alcool: popupEventAlcool,
      Marie: popupEventMarie,
      maladieCronique: popupEventMaladieCronique,
      chirurgie: popupEventChirurgie,
      allergie: popupEventAllergie,
      medicament: popupEventmedicament,
      dateNaissance: popupEventDateNaissance,
      sexe: popupEventSexe,
      rue: popupEventRue,
      rueNumero: popupEventRueNumero,
      ville: popupEventVille,
      codePostale: popupEventodePostale,
      pays: popupEventPays,
      files: popupEventFiles,

      //color: selectedColor,
    };
    if (isEdit) {
      // update the event in the list
      const index = calEvents.findIndex((x) => x.id === tempEvent.id); //edit rdv
      const newEventList = [...calEvents];

      newEventList.splice(index, 1, newEvent);
      setCalEvents(newEventList);
      // here you can update the event in your storage as well
      // ...
    } else {
      // add the new event to the list
      setCalEvents([...calEvents, newEvent]);
      // here you can add the event to your storage as well
      // ...
    }
    setCurrentDate(popupEventDate[0]);
    // close the popup
    setOpen(false);
  }, [
    isEdit,
    calEvents,
    popupEventAllDay,
    popupEventDate,
    popupEventNotes,
    popupEventName,
    popupEventLastName,
    tempEvent,
    popupEventPhoneNumber,
    popupEventEmail,
    popupEventTaille,
    popupEventPoids,
    popupEventBlood_type,
    popupEventFumeur,
    popupEventAlcool,
    popupEventMarie,
    popupEventMaladieCronique,
    popupEventChirurgie,
    popupEventAllergie,
    popupEventmedicament,
    popupEventDateNaissance,
    popupEventSexe,
    popupEventRue,
    popupEventRueNumero,
    popupEventVille,
    popupEventodePostale,
    popupEventPays,
    popupEventFiles,
  ]);
  //add rdv
  const headerText = useMemo(
    () => (isEdit ? "Edit rendez-vous" : "New rendez-vous"),
    [isEdit]
  );
  //add rdv
  const popupButtons = useMemo(() => {
    if (isEdit) {
      return [
        "cancel",
        {
          handler: () => {
            saveEvent();
          },
          keyCode: "enter",
          text: "Save",
          cssClass: "mbsc-popup-button-primary",
        },
      ];
    } else {
      return [
        "cancel",
        {
          handler: () => {
            saveEvent();
          },
          keyCode: "enter",
          text: "Add",
          cssClass: "mbsc-popup-button-primary",
        },
      ];
    }
  }, [isEdit, saveEvent]);
  //add rdv
  const onClose = useCallback(() => {
    if (!isEdit) {
      // refresh the list, if add popup was canceled, to remove the temporary event
      setCalEvents([...calEvents]);
    }
    setOpen(false);
  }, [isEdit, calEvents]);
  //add rdv
  const popupResponsive = useMemo(
    () => ({
      medium: {
        display: "anchored",
        width: 400,
        fullScreen: false,
        touchUi: false,
      },
    }),
    []
  );
  //add rdv
  const titleChange = useCallback((ev) => {
    setName(ev.target.value);
  }, []);
  //add rdv
  const lastNameChange = useCallback((ev) => {
    setLastName(ev.target.value);
  }, []);
  //add rdv
  const notesChange = useCallback((ev) => {
    setNotes(ev.target.value);
  }, []);
  //add rdv
  const allDayChange = useCallback((ev) => {
    setAllDay(ev.target.checked);
  }, []);
  //add rdv
  const dateChange = useCallback((args) => {
    setDate(args.value);
  }, []);

  //add rdv
  const onDeleteClick = useCallback(() => {
    deleteEvent(tempEvent);
    setOpen(false);
  }, [deleteEvent, tempEvent]);
  //add rdv
  // const onPlusClick = useCallback(() => {
  //   setOpen(false);
  // }, []);
  //add rdv
  const controls = useMemo(
    () => (popupEventAllDay ? ["date"] : ["datetime"]),
    [popupEventAllDay]
  );
  //add rdv
  const datepickerResponsive = useMemo(
    () =>
      popupEventAllDay
        ? {
            medium: {
              controls: ["calendar"],
              touchUi: false,
            },
          }
        : {
            medium: {
              controls: ["calendar", "time"],
              touchUi: false,
            },
          },
    [popupEventAllDay]
  );

  //json
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/Modepro/Agenda/Ajenda.json");
        const data = await response.json();
        // Mettez à jour les heures de fin des événements avant de les stocker dans l'état
        const updatedEvents = updateEndTimes(data);
        setCalEvents(updatedEvents);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données JSON :",
          error
        );
      }
    };

    fetchData();
  }, []);

  //
  const updateEndTimes = (events) => {
    return events.map((event) => {
      let startDate = new Date(event.start);
      let endDate = new Date(startDate.getTime() + 30 * 60000); // 30 minutes en millisecondes
      return { ...event, end: formatDate("YYYY-MM-DDTHH:mm:ss", endDate) };
    });
  };

  //
  return (
    <>
      <body>
        <Headconectpro></Headconectpro>
        <main className="mt-20">
          <Page>
            <div className="md-search-events-sidebar mbsc-flex">
              <div className="md-search-events-cont mbsc-flex-col mbsc-flex-none">
                <Input
                  startIcon="material-search"
                  onChange={handleInputChange}
                  inputStyle="outline"
                  placeholder="Rechercher un rendez-vous"
                />
                {showList && (
                  <Eventcalendar
                    view={listView}
                    data={listEvents}
                    showControls={false}
                    onEventClick={handleEventClick}
                  />
                )}
              </div>
              <div className="md-search-events-calendar mbsc-flex-1-1">
                <Eventcalendar
                  firstDay={0}
                  cssClass="md-custom-header"
                  clickToCreate="double"
                  dragToCreate={false}
                  dragToMove={false}
                  dragToResize={false}
                  selectMultipleEvents={true}
                  showEventTooltip={false}
                  view={calView}
                  data={calEvents}
                  selectedEvents={mySelectedEvent}
                  selectedDate={currentDate}
                  // onPageLoading={handlePageLoading}
                  onSelectedDateChange={handleSelectedDateChange}
                  renderHeader={customWithNavButtons}
                  onEventClick={handleEventClick2}
                  invalid={myInvalid}
                  onEventCreated={onEventCreated}
                  onEventDeleted={onEventDeleted}
                />
                {/* add RDV */}
                <Popup
                  display="bottom"
                  fullScreen={true}
                  contentPadding={false}
                  headerText={headerText}
                  anchor={anchor}
                  buttons={popupButtons}
                  isOpen={isOpen}
                  onClose={onClose}
                  responsive={popupResponsive}
                >
                  <div className="mbsc-form-group">
                    <Input
                      label="Nom"
                      value={popupEventName}
                      onChange={titleChange}
                    />
                    <Input
                      label="LastName"
                      value={popupEventLastName}
                      onChange={lastNameChange}
                    />

                    <Textarea
                      label="Description"
                      value={popupEventNotes}
                      onChange={notesChange}
                    />
                  </div>
                  <div className="mbsc-form-group">
                    <Switch
                      label="All-day"
                      checked={popupEventAllDay}
                      onChange={allDayChange}
                    />
                    <Input ref={startRef} label="Starts" />
                    <Input ref={endRef} label="Ends" />
                    <Datepicker
                      select="range"
                      controls={controls}
                      touchUi={true}
                      startInput={start}
                      endInput={end}
                      showRangeLabels={false}
                      responsive={datepickerResponsive}
                      onChange={dateChange}
                      value={popupEventDate}
                    />
                    <div className="mbsc-button-group">
                      <Button
                        className="mbsc-button-block"
                        variant="outline"
                        // onClick={onPlusClick}
                        onClick={AjouterProcheClick}
                      >
                        Plus d&apos;informations
                      </Button>
                    </div>
                    {isEdit ? (
                      <div className="mbsc-button-group">
                        <Button
                          className="mbsc-button-block"
                          color="danger"
                          variant="outline"
                          onClick={onDeleteClick}
                        >
                          Supprimer le rendez-vous
                        </Button>
                      </div>
                    ) : null}
                  </div>
                </Popup>

                <Snackbar
                  isOpen={isSnackbarOpen}
                  message="Event deleted"
                  button={snackbarButton}
                  onClose={handleSnackbarClose}
                />
              </div>
            </div>
          </Page>
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
                <div
                  className="react-responsive-modal-container react-responsive-modal-containerCenter"
                  data-testid="modal-container"
                >
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
                                      value={popupEventName}
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
                                      value={popupEventLastName}
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
                                      value={popupEventDateNaissance}
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
                                          checked={popupEventSexe === true}
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
                                          checked={popupEventSexe === false}
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
                                <div className="font-normal text-sm">
                                  Contact
                                </div>
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
                                        value={popupEventPhoneNumber}
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
                                      value={popupEventEmail}
                                      placeholder="Email"
                                      className="text-base font-normal h-12 bg-p-night outline-none border-none w-full !font-main shadow-none focus:ring-transparent"
                                      style={{
                                        boxShadow: "none !important",
                                        backgroundColor: "transparent",
                                      }}
                                      name="email"
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
                                <div className="font-normal text-sm">
                                  Adresse
                                </div>
                              </div>
                            </div>
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
                                          className="outline-none h-12 border-none w-full bg-transparent px-0 z-10 relative !font-main htmlForm-control"
                                          style={{
                                            unicodeBidi: "plaintext",
                                            direction: "ltr",
                                            backgroundColor: "transparent",
                                          }}
                                          placeholder="Rue*"
                                          value={popupEventRue}
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
                                        placeholder="N°"
                                        value={popupEventRueNumero}
                                        className="text-base font-normal h-12 bg-p-night outline-none border-none w-full !font-main shadow-none focus:ring-transparent"
                                        style={{
                                          boxShadow: "none !important",
                                          backgroundColor: "transparent",
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
                                          className="outline-none h-12 border-none w-full bg-transparent px-0 z-10 relative !font-main htmlForm-control"
                                          style={{
                                            unicodeBidi: "plaintext",
                                            direction: "ltr",
                                            backgroundColor: "transparent",
                                          }}
                                          placeholder="Code postal*"
                                          value={popupEventodePostale}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div style={{ width: "100%" }}>
                                    <div className="rounded-full px-5 py-1 bg-p-night w-full flex flex-row gap-2 flex-nowrap items-center">
                                      <input
                                        type="text"
                                        placeholder="Ville*"
                                        value={popupEventVille}
                                        className="text-base font-normal h-12 bg-p-night outline-none border-none w-full !font-main shadow-none focus:ring-transparent"
                                        style={{
                                          boxShadow: "none !important",
                                          backgroundColor: "transparent",
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
                                      value={popupEventPays}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="flex flex-col sm:grid gap-4 mb-5 grid-cols-[96px,1fr]"
                            style={{ display: "flex" }}
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
                                    src="src/assets/image_Profil/medical-profile.svg"
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
                                <div className="font-normal text-sm">
                                  Informations de Santé Personnel
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-1 flex-col items-center justify-center h-full">
                              <div className="max-w-xl mx-auto w-full">
                                <div className="flex flex-col items-center justify-center w-full">
                                  <div
                                    id="item-1"
                                    className="grid gap-5 w-full border-b border-solid items-center border-p-night py-4 pl-3"
                                    style={{ gridTemplateColumns: "1fr 120px" }}
                                  >
                                    <div
                                      className="grid gap-3 items-center"
                                      style={{
                                        gridTemplateColumns: "32px 1fr",
                                      }}
                                    >
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
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                          />
                                        </span>
                                        <img
                                          src="src/assets/image_Profil/height.svg"
                                          decoding="async"
                                          data-nimg="intrinsic"
                                          style={{
                                            position: "absolute",
                                            inset: "0px",
                                            boxSizing: "border-box",
                                            padding: "0",
                                            border: "medium",
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
                                      <div>Taille</div>
                                    </div>
                                    <div className="w-full">
                                      <div className="rounded-full px-4 py-2 bg-p-cover flex flex-row flex-nowrap items-center w-full">
                                        <input
                                          className="w-full border-none bg-p-cover rounded-full p-0 text-sm text-center text-gray-400 select-none"
                                          style={{
                                            outline: "none",
                                            boxShadow: "none",
                                          }}
                                          placeholder="-"
                                          value={popupEventTaille}
                                        />
                                        <div className="ml-1 font-bold text-sm text-gray-400">
                                          cm
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    id="item-2"
                                    className="grid items-center gap-5 w-full border-b border-solid border-p-night py-4 pl-3"
                                    style={{ gridTemplateColumns: "1fr 120px" }}
                                  >
                                    <div
                                      className="grid gap-3 items-center"
                                      style={{
                                        gridTemplateColumns: "32px 1fr",
                                      }}
                                    >
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
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                          />
                                        </span>
                                        <img
                                          src="src/assets/image_Profil/weight.svg"
                                          decoding="async"
                                          data-nimg="intrinsic"
                                          style={{
                                            position: "absolute",
                                            inset: "0px",
                                            boxSizing: "border-box",
                                            padding: "0",
                                            border: "medium",
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
                                      <div>Poids</div>
                                    </div>
                                    <div className="w-full">
                                      <div className="rounded-full px-4 py-2 bg-p-cover flex flex-row flex-nowrap items-center w-full">
                                        <input
                                          className="w-full border-none bg-p-cover rounded-full p-0 text-sm text-center text-gray-400 select-none"
                                          style={{
                                            outline: "none",
                                            boxShadow: "none",
                                          }}
                                          placeholder="-"
                                          value={popupEventPoids}
                                        />
                                        <div className="ml-1 font-bold text-sm text-gray-400">
                                          kg
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    id="item-3"
                                    className="grid items-center gap-5 w-full border-b border-solid border-p-night py-4 pl-3"
                                    style={{ gridTemplateColumns: "1fr 120px" }}
                                  >
                                    <div
                                      className="grid items-center gap-3"
                                      style={{
                                        gridTemplateColumns: "32px 1fr",
                                      }}
                                    >
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
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                          />
                                        </span>
                                        <img
                                          src="src/assets/image_Profil/blood-type.svg"
                                          decoding="async"
                                          data-nimg="intrinsic"
                                          style={{
                                            position: "absolute",
                                            inset: "0px",
                                            boxSizing: "border-box",
                                            padding: "0",
                                            border: "medium",
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
                                      <div>Groupe sanguin</div>
                                    </div>
                                    <div className="w-full">
                                      <div className="rounded-full px-4 py-2 bg-p-cover flex flex-row flex-nowrap items-center w-full">
                                        <input
                                          className="w-full border-none bg-p-cover rounded-full p-0 text-sm text-center text-gray-400 select-none"
                                          style={{
                                            outline: "none",
                                            boxShadow: "none",
                                          }}
                                          placeholder="-"
                                          value={popupEventBlood_type}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    id="item-4"
                                    className="grid gap-5 items-center w-full border-b border-solid border-p-night py-4 pl-3"
                                    style={{ gridTemplateColumns: "1fr 120px" }}
                                  >
                                    <div
                                      className="grid items-center gap-3"
                                      style={{
                                        gridTemplateColumns: "32px 1fr",
                                      }}
                                    >
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
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                          />
                                        </span>
                                        <img
                                          src="src/assets/image_Profil/smoking.svg"
                                          decoding="async"
                                          data-nimg="intrinsic"
                                          style={{
                                            position: "absolute",
                                            inset: "0px",
                                            boxSizing: "border-box",
                                            padding: "0",
                                            border: "medium",
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
                                      <div>Fumeur</div>
                                    </div>
                                    <div className="w-full">
                                      <div className="relative rounded-full  flex flex-row flex-nowrap justify-center items-center w-full">
                                        {/* <Switchadd></Switchadd> */}
                                        <label className="switch">
                                          <input
                                            type="checkbox"
                                            checked={popupEventFumeur}
                                          />
                                          <span className="slider round"></span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    id="item-5"
                                    className="grid items-center gap-5 w-full border-b border-solid border-p-night py-4 pl-3"
                                    style={{ gridTemplateColumns: "1fr 120px" }}
                                  >
                                    <div
                                      className="grid items-center gap-3"
                                      style={{
                                        gridTemplateColumns: "32px 1fr",
                                      }}
                                    >
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
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                          />
                                        </span>
                                        <img
                                          src="src/assets/image_Profil/alcohol.svg"
                                          decoding="async"
                                          data-nimg="intrinsic"
                                          style={{
                                            position: "absolute",
                                            inset: "0px",
                                            boxSizing: "border-box",
                                            padding: "0",
                                            border: "medium",
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
                                      <div>Alcool</div>
                                    </div>
                                    <div className="w-full">
                                      <div className="relative rounded-full  flex flex-row flex-nowrap justify-center items-center w-full">
                                        <label className="switch">
                                          <input
                                            type="checkbox"
                                            checked={popupEventAlcool}
                                          />
                                          <span className="slider round"></span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    id="item-6"
                                    className="grid items-center gap-5 w-full py-4 pl-3"
                                    style={{ gridTemplateColumns: "1fr 120px" }}
                                  >
                                    <div
                                      className="grid items-center gap-3"
                                      style={{
                                        gridTemplateColumns: "32px 1fr",
                                      }}
                                    >
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
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                          />
                                        </span>
                                        <img
                                          src="src/assets/image_Profil/married.svg"
                                          decoding="async"
                                          data-nimg="intrinsic"
                                          style={{
                                            position: "absolute",
                                            inset: "0px",
                                            boxSizing: "border-box",
                                            padding: "0",
                                            border: "medium",
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
                                      <div>Marié(e)</div>
                                    </div>
                                    <div className="w-full">
                                      <div className="relative rounded-full  flex flex-row flex-nowrap justify-center items-center w-full">
                                        <label className="switch">
                                          <input
                                            type="checkbox"
                                            checked={popupEventMarie}
                                          />
                                          <span className="slider round"></span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="flex flex-col sm:grid gap-4 mb-5 grid-cols-[96px,1fr]"
                            style={{ display: "flex" }}
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
                                    src="src/assets/image_Profil/chronic.webp"
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
                                <div className="font-normal text-sm">
                                  Maladie chronique
                                </div>
                              </div>
                            </div>
                            <div className="od-profile-card-section-body">
                              <div className="od-profile-chip-set">
                                {popupEventMaladieCronique &&
                                  popupEventMaladieCronique.map(
                                    (expertise, index) => (
                                      <div
                                        key={index}
                                        className="od-profile-chip"
                                      >
                                        {expertise}
                                      </div>
                                    )
                                  )}
                              </div>
                            </div>
                          </div>
                          <div
                            className="flex flex-col sm:grid gap-4 mb-5 grid-cols-[96px,1fr]"
                            style={{ display: "flex" }}
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
                                    src="src/assets/image_Profil/surgeries.webp"
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
                                <div className="font-normal text-sm">
                                  Chirugie
                                </div>
                              </div>
                            </div>
                            <div className="od-profile-card-section-body">
                              <div className="od-profile-chip-set">
                                {popupEventChirurgie &&
                                  popupEventChirurgie.map(
                                    (expertise, index) => (
                                      <div
                                        key={index}
                                        className="od-profile-chip"
                                      >
                                        {expertise}
                                      </div>
                                    )
                                  )}
                              </div>
                            </div>
                          </div>
                          <div
                            className="flex flex-col sm:grid gap-4 mb-5 grid-cols-[96px,1fr]"
                            style={{ display: "flex" }}
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
                                    src="src/assets/image_Profil/allergies.webp"
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
                                <div className="font-normal text-sm">
                                  Allergie
                                </div>
                              </div>
                            </div>
                            <div className="od-profile-card-section-body">
                              <div className="od-profile-chip-set">
                                {popupEventAllergie &&
                                  popupEventAllergie.map((expertise, index) => (
                                    <div
                                      key={index}
                                      className="od-profile-chip"
                                    >
                                      {expertise}
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </div>
                          <div
                            className="flex flex-col sm:grid gap-4 mb-5 grid-cols-[96px,1fr]"
                            style={{ display: "flex" }}
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
                                    src="src/assets/image_Profil/medicines.webp"
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
                                <div className="font-normal text-sm">
                                  Médicament
                                </div>
                              </div>
                            </div>
                            <div className="od-profile-card-section-body">
                              <div className="od-profile-chip-set">
                                {popupEventmedicament &&
                                  popupEventmedicament.map(
                                    (expertise, index) => (
                                      <div
                                        key={index}
                                        className="od-profile-chip"
                                      >
                                        {expertise}
                                      </div>
                                    )
                                  )}
                              </div>
                            </div>
                          </div>
                          <div
                            className="flex flex-col sm:grid gap-4 mb-5 grid-cols-[96px,1fr]"
                            style={{ display: "flex" }}
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
                                    src="src/assets/image_Profil/medical-profile.svg"
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
                                <div className="font-normal text-sm">
                                  Dossiers Médicaux
                                </div>
                              </div>
                            </div>
                            <div className="od-profile-card-section-body">
                              <div>
                                {popupEventFiles &&
                                  popupEventFiles.map((fileInfo, index) => (
                                    <div key={index}>
                                      <p style={styles.fileName}>
                                        Nom du fichier: {fileInfo.name}
                                      </p>
                                      <a
                                        href={fileInfo.path}
                                        target="_blank"
                                        download
                                        style={styles.downloadLink}
                                        rel="noreferrer"
                                      >
                                        {" "}
                                        Voir et télécharger le fichier{" "}
                                      </a>

                                      <hr />
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
        <Footer />
      </body>
    </>
  );
}

const styles = {
  fileName: {
    fontWeight: "bold",
    color: "#333",
    fontSize: "16px",
    marginLeft: "7px",
  },
  downloadLink: {
    display: "block",
    backgroundColor: "#012bb4",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
    textDecoration: "none",
    borderRadius: "20px",
    marginBottom: "10px",
  },
};
export default App;
