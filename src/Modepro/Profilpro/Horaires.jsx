import "./Horaires.css";
import { useState } from "react";
import BpCheckbox from "./BpCheckbox";

export const Horaires = () => {
  const [showDivs, setShowDivs] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const handleInputClick2 = (num) => {
    setShowDivs({
      ...showDivs,
      [num]: !showDivs[num],
    });
  };

  return (
    <>
      <div
        className="relative w-full bg-white shadow-sh-112-8 p-11 me-5 mb-3 rounded flex flex-1 first:mt-6 last:mb-10"
        style={{ borderRadius: "1.5rem" }}
      >
        <div className="w-full flex flex-col relative">
          <div className="grid grid-flow-col auto-cols-max items-center gap-4 mb-6">
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
            <div className="font-medium text-gray-600 text-lg flex flex-row items-center select-none">
              Horaires d&apos;ouverture
            </div>
          </div>
          <div id="calendar_wizard_content">
            <form data-form="hours">
              {[1, 2, 3, 4, 5, 6].map((day) => (
                <div
                  className="liner"
                  data-day-in-week={day}
                  data-open="1"
                  data-continue="0"
                  key={day}
                >
                  <label className="day-name_wrap">
                    <BpCheckbox
                      data-name="open"
                      name={`hour[${day}][open]`}
                      onClick={() => handleInputClick2(day)}
                    />

                    <span className="day-name">
                      {getDayName(day)}{" "}
                      {/* Une fonction pour obtenir le nom du jour */}
                    </span>
                  </label>
                  {showDivs[day] && (
                    <>
                      <div
                        className="wizard-hours-wrapper"
                        data-show-if-open="1"
                      >
                        <div className="hour_wrap" data-show-if-open="1">
                          <span>
                            <input
                              className="hour ui-timepicker-input"
                              type="time"
                              value="08:00"
                              placeholder="hh:mm"
                              readOnly
                              title="Heure de début de journée au format hh:mm"
                            />
                          </span>
                          <span style={{ flex: "0.8" }}>
                            <input
                              className="hour ui-timepicker-input"
                              type="time"
                              value="12:00"
                              placeholder="hh:mm"
                              readOnly
                              title="Heure de début de pause au format hh:mm"
                            />
                          </span>
                          <span>
                            <input
                              className="hour ui-timepicker-input"
                              type="time"
                              value="13:30"
                              placeholder="hh:mm"
                              readOnly
                              title="Heure de fin de pause au format hh:mm"
                            />
                          </span>
                          <span>
                            <input
                              className="hour ui-timepicker-input"
                              type="time"
                              readOnly
                              value="17:00"
                              placeholder="hh:mm"
                              title="Heure de fin de journée au format hh:mm"
                            />
                          </span>
                        </div>
                      </div>
                      <label className="continue-link" data-show-if-open="1">
                        <BpCheckbox
                          data-name="continue"
                          name={`hour[${day}][continue]`}
                          value="1"
                        />
                        <span className="day-name">Journée continue</span>
                      </label>
                    </>
                  )}
                </div>
              ))}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

// Fonction pour obtenir le nom du jour en fonction de son numéro
const getDayName = (day) => {
  const daysOfWeek = [
    "Samedi",
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
  ];
  return daysOfWeek[day - 1] || "";
};

export default Horaires;
