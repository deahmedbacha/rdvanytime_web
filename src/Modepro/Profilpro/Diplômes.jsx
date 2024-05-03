import { useState } from "react";
export const Diplômes = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValues, setInputValues] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddInput = () => {
    if (inputValue.trim() !== "") {
      setInputValues([...inputValues, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveInput = (index) => {
    const values = [...inputValues];
    values.splice(index, 1);
    setInputValues(values);
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
              Diplômes{" "}
            </div>
          </div>
          <div>
            <div className="flex w-full flex-col lg:grid grid-rows-2 gap-2">
              <div
                className="flex flex-col lg:grid grid-cols-2 gap-2 lg:gap-4"
                style={{ display: "grid" }}
              >
                <div style={{ width: "100%" }}>
                  <div className="rounded-full px-5 py-1 bg-p-night w-full flex flex-row gap-2 flex-nowrap items-center">
                    <input
                      className="text-base font-normal h-12 bg-p-night outline-none border-none w-full !font-main shadow-none focus:ring-transparent"
                      style={{
                        boxShadow: "none !important",
                        backgroundColor: "transparent",
                      }}
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                      placeholder="Entrer un ou des Diplômes "
                    />
                  </div>
                </div>
                <button
                  onClick={handleAddInput}
                  className="text-sm md:text-base font-semibold rounded-3xl px-7 py-3 bg-primary-ice text-white"
                  style={{ marginLeft: "5%", width: "120px" }}
                >
                  ajouter
                </button>
              </div>
            </div>
            <div style={{ paddingTop: "4%" }}>
              <ul>
                {inputValues.map((value, index) => (
                  <li
                    key={index}
                    className="od-profile-chip-set"
                    style={{ margin: "0.3%" }}
                  >
                    <div className="od-profile-chip" style={{ width: "40%" }}>
                      {" "}
                      {value}
                    </div>

                    <button
                      onClick={() => handleRemoveInput(index)}
                      className="text-sm md:text-base font-semibold rounded-3xl px-7 py-3 bg-primary-ice text-white"
                      style={{ backgroundColor: "rgb(204, 0, 0)" }}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Diplômes;
