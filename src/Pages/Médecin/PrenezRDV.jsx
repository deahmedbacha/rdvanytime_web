import { useState } from "react";

function PrenezRDV() {
  const [showFirstContent, setShowFirstContent] = useState(false);

  const handleRadioClick = () => {
    // setShowFirstContent(!showFirstContent);
    setShowFirstContent(true);
  };

  const [showNextContent, setShowNextContent] = useState(1);

  const handleNextClick = (numeroPage) => {
    setShowNextContent(numeroPage);
  };
  
    const [showLastContent, setShowLastContent] = useState(false);

    const handleBoxClick = () => {
      setShowLastContent(true);
    };
  return (
    <>
      {showNextContent === 1 && (
        <div>
          <div className="flow-step" style={{ zIndex: "4" }}>
            <div
              className={
                showFirstContent ? "flow-step-line flow-step-line--checked" : ""
              }
            ></div>
            <div className="flow-step-number">
              <div style={{ lineHeight: "28px" }}>1</div>
            </div>

            <div className="flow-step-content">
              <div className="flow-step-label">Première consultation?</div>
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
                        Ceci est ma première consultation avec Dr. Abdelillah
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
              <hr className="flow-step-divider" data-node-id="clientType" />
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
                  <div className="flow-step-label">Spécialité</div>
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
                        <option value="30" onClick={handleBoxClick}>
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
                <div className="flow-step-split-content">
                  <div className="flow-step-content">
                    <div className="flow-step-label">Créneau horaire</div>
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
      )}
      {showNextContent === 2 && (
        <div>
          <h1>hello</h1>
        </div>
      )}
    </>
  );
}

export default PrenezRDV;
