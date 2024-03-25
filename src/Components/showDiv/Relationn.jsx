import { useState, useRef, useEffect } from "react";

function Relationn() {
  /// set les ville sur input
  const [inputValueVille, setInputValueVille] = useState("");
  const ButtonClickVille = (value) => {
    setInputValueVille(value);
    setShowDiv2(false);
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
  return (
    <>
      <input
        className="bg-liquide outline-clear w-full text-base sm:text-sm lg:text-sm"
        placeholder="Votre Relation relative ?"
        onClick={handleInputClick2}
        ref={inputRef2}
        value={inputValueVille}
        onChange={(e) => setInputValueVille(e.target.value)}
      />
      {showDiv2 && (
        <div
          ref={divRef2}
          className=" sm:top-13 w-full  bg-white border border-1 shadow-lg h-auto min-mobile:max-w-[max-content] min-mobile:min-w-[360px]  rounded-2xl z-50 py-4 transform transition-opacity"
          style={{ top: "9.8rem", position: "absolute" }}
        >
          <div className="max-h-80 overflow-y-auto px-3 flex flex-col min-h-[max-content] ">
            <button
              onClick={() => ButtonClickVille("Grand-pere")}
              className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
            >
              <div></div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Grand-pere
              </div>
              <svg
                data-name="go to arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 rtl:transform rtl:rotate-180"
              >
                <circle cx="12" cy="12" r="12" fill="#f2f2f2"></circle>
                <path
                  d="M10.75 16.3a.74.74 0 01-.53-.22.75.75 0 010-1.06l3-3-3-3a.75.75 0 010-1.06.74.74 0 011.06 0L15.36 12l-4.08 4.08a.73.73 0 01-.53.22z"
                  fill="#444"
                ></path>
              </svg>
            </button>
            <button
              onClick={() => ButtonClickVille("Grande-mere")}
              className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
            >
              <div></div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Grande-mere
              </div>
              <svg
                data-name="go to arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 rtl:transform rtl:rotate-180"
              >
                <circle cx="12" cy="12" r="12" fill="#f2f2f2"></circle>
                <path
                  d="M10.75 16.3a.74.74 0 01-.53-.22.75.75 0 010-1.06l3-3-3-3a.75.75 0 010-1.06.74.74 0 011.06 0L15.36 12l-4.08 4.08a.73.73 0 01-.53.22z"
                  fill="#444"
                ></path>
              </svg>
            </button>
            <button
              onClick={() => ButtonClickVille("Pere")}
              className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
            >
              <div></div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Pere
              </div>
              <svg
                data-name="go to arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 rtl:transform rtl:rotate-180"
              >
                <circle cx="12" cy="12" r="12" fill="#f2f2f2"></circle>
                <path
                  d="M10.75 16.3a.74.74 0 01-.53-.22.75.75 0 010-1.06l3-3-3-3a.75.75 0 010-1.06.74.74 0 011.06 0L15.36 12l-4.08 4.08a.73.73 0 01-.53.22z"
                  fill="#444"
                ></path>
              </svg>
            </button>
            <button
              onClick={() => ButtonClickVille("Mere")}
              className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
            >
              <div></div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Mere
              </div>
              <svg
                data-name="go to arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 rtl:transform rtl:rotate-180"
              >
                <circle cx="12" cy="12" r="12" fill="#f2f2f2"></circle>
                <path
                  d="M10.75 16.3a.74.74 0 01-.53-.22.75.75 0 010-1.06l3-3-3-3a.75.75 0 010-1.06.74.74 0 011.06 0L15.36 12l-4.08 4.08a.73.73 0 01-.53.22z"
                  fill="#444"
                ></path>
              </svg>
            </button>
            <button
              onClick={() => ButtonClickVille("epouse")}
              className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
            >
              <div></div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                epouse
              </div>
              <svg
                data-name="go to arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 rtl:transform rtl:rotate-180"
              >
                <circle cx="12" cy="12" r="12" fill="#f2f2f2"></circle>
                <path
                  d="M10.75 16.3a.74.74 0 01-.53-.22.75.75 0 010-1.06l3-3-3-3a.75.75 0 010-1.06.74.74 0 011.06 0L15.36 12l-4.08 4.08a.73.73 0 01-.53.22z"
                  fill="#444"
                ></path>
              </svg>
            </button>
            <button
              onClick={() => ButtonClickVille("epoux")}
              className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
            >
              <div></div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                epoux
              </div>
              <svg
                data-name="go to arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 rtl:transform rtl:rotate-180"
              >
                <circle cx="12" cy="12" r="12" fill="#f2f2f2"></circle>
                <path
                  d="M10.75 16.3a.74.74 0 01-.53-.22.75.75 0 010-1.06l3-3-3-3a.75.75 0 010-1.06.74.74 0 011.06 0L15.36 12l-4.08 4.08a.73.73 0 01-.53.22z"
                  fill="#444"
                ></path>
              </svg>
            </button>
            <button
              onClick={() => ButtonClickVille("Fils")}
              className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
            >
              <div></div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Fils
              </div>
              <svg
                data-name="go to arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 rtl:transform rtl:rotate-180"
              >
                <circle cx="12" cy="12" r="12" fill="#f2f2f2"></circle>
                <path
                  d="M10.75 16.3a.74.74 0 01-.53-.22.75.75 0 010-1.06l3-3-3-3a.75.75 0 010-1.06.74.74 0 011.06 0L15.36 12l-4.08 4.08a.73.73 0 01-.53.22z"
                  fill="#444"
                ></path>
              </svg>
            </button>
            <button
              onClick={() => ButtonClickVille("Fille")}
              className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
            >
              <div></div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Fille
              </div>
              <svg
                data-name="go to arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 rtl:transform rtl:rotate-180"
              >
                <circle cx="12" cy="12" r="12" fill="#f2f2f2"></circle>
                <path
                  d="M10.75 16.3a.74.74 0 01-.53-.22.75.75 0 010-1.06l3-3-3-3a.75.75 0 010-1.06.74.74 0 011.06 0L15.36 12l-4.08 4.08a.73.73 0 01-.53.22z"
                  fill="#444"
                ></path>
              </svg>
            </button>
            <button
              onClick={() => ButtonClickVille("Frere")}
              className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
            >
              <div></div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Frere
              </div>
              <svg
                data-name="go to arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 rtl:transform rtl:rotate-180"
              >
                <circle cx="12" cy="12" r="12" fill="#f2f2f2"></circle>
                <path
                  d="M10.75 16.3a.74.74 0 01-.53-.22.75.75 0 010-1.06l3-3-3-3a.75.75 0 010-1.06.74.74 0 011.06 0L15.36 12l-4.08 4.08a.73.73 0 01-.53.22z"
                  fill="#444"
                ></path>
              </svg>
            </button>
            <button
              onClick={() => ButtonClickVille("Soeur")}
              className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
            >
              <div></div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Soeur
              </div>
              <svg
                data-name="go to arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 rtl:transform rtl:rotate-180"
              >
                <circle cx="12" cy="12" r="12" fill="#f2f2f2"></circle>
                <path
                  d="M10.75 16.3a.74.74 0 01-.53-.22.75.75 0 010-1.06l3-3-3-3a.75.75 0 010-1.06.74.74 0 011.06 0L15.36 12l-4.08 4.08a.73.73 0 01-.53.22z"
                  fill="#444"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default Relationn;
