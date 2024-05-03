import { useState, useRef, useEffect } from "react";

function ShowSpécialité() {
  const [showDiv2, setShowDiv2] = useState(false);
  const inputRef2 = useRef(null);
  const [inputValueVille, setInputValueVille] = useState("");
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
  const ButtonClickSpes = (value) => {
    setInputValueVille(value);
    setShowDiv2(false);
  };
  return (
    <>
        <div className="rounded-full px-5 py-1 bg-p-night w-full flex flex-row gap-2 flex-nowrap items-center">
          <input
            placeholder="Spécialité"
            className="text-base font-normal h-9 bg-p-night outline-none border-none w-full shadow-none focus:ring-transparent"
            type="text"
            onClick={handleInputClick2}
            ref={inputRef2}
            value={inputValueVille}
            style={{
              backgroundColor: "rgba(245, 245, 245, var(--tw-bg-opacity))",
            }}
            name="Spécialité"
            id="Spécialité"
          />
          {showDiv2 && (
            <div
              ref={divRef2}
              className="absolute top-14 sm:top-13 w-full start-0 bg-white border border-1 shadow-lg h-auto min-mobile:max-w-[max-content] min-mobile:min-w-[360px]  rounded-2xl z-50 py-4 transform transition-opacity"
              style={{
                top: "23.5rem",
                position: "absolute",
              }}
            >
              <div className="max-h-80 overflow-y-auto px-3 flex flex-col min-h-[max-content] ">
                <div className="font-medium text-base text-gray-400 mb-3 px-3 uppercase select-none">
                  Spécialités
                </div>
                <button
                  onClick={() => ButtonClickSpes("Acupuncteur")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Acupuncteur
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
                  onClick={() => ButtonClickSpes("Allergologue")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Allergologue
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
                  onClick={() => ButtonClickSpes("Anatomopathologiste")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Anatomopathologiste
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
                  onClick={() => ButtonClickSpes("Anesthésiste-réanimateur")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Anesthésiste-réanimateur
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
                  onClick={() => ButtonClickSpes("Angiologue")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Angiologue
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
                  onClick={() => ButtonClickSpes("Audioprothésiste")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Audioprothésiste
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
                  onClick={() => ButtonClickSpes("Cardiologue")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Cardiologue
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
                  onClick={() => ButtonClickSpes("Centre de soins")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Centre de soins
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
                  onClick={() =>
                    ButtonClickSpes(" Chirurgien cardio-vasculaire")
                  }
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Chirurgien cardio-vasculaire
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
                  onClick={() => ButtonClickSpes("Chirurgien générale")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Chirurgien générale
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
                  onClick={() => ButtonClickSpes("Chirurgien maxillo-facial")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Chirurgien maxillo-facial
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
                  onClick={() =>
                    ButtonClickSpes("Chirurgien orthopédiste et traumatologue")
                  }
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Chirurgien orthopédiste et traumatologue
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
                  onClick={() =>
                    ButtonClickSpes("Chirurgien plasticien et esthétique")
                  }
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Chirurgien plasticien et esthétique
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
                  onClick={() => ButtonClickSpes("Chirurgien pédiatre")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Chirurgien pédiatre
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
                  onClick={() => ButtonClickSpes("Chirurgien urologue")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Chirurgien urologue
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
                  onClick={() => ButtonClickSpes("Dentiste")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Dentiste
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
                  onClick={() => ButtonClickSpes("Dermatologue")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Dermatologue
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
                  onClick={() =>
                    ButtonClickSpes("Diabétologue et endocrinologue")
                  }
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Diabétologue et endocrinologue
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
                  onClick={() => ButtonClickSpes("Endocrinologue")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Endocrinologue
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
                  onClick={() => ButtonClickSpes("Gastro-entérologue")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Gastro-entérologue
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
                  onClick={() => ButtonClickSpes("Gynécologue Obstétricien")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Gynécologue Obstétricien
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
                  onClick={() =>
                    ButtonClickSpes("Gynécologue spécialisé en infertilité")
                  }
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Gynécologue spécialisé en infertilité{" "}
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
                  onClick={() => ButtonClickSpes("Hématologue")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Hématologue
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
                  onClick={() => ButtonClickSpes("Kinésithérapeute")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Kinésithérapeute
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
                  onClick={() =>
                    ButtonClickSpes("Laboratoire danalyses médicales")
                  }
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Laboratoire danalyses médicales
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
                  onClick={() => ButtonClickSpes("Medecin généraliste")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Medecin généraliste
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
                  onClick={() => ButtonClickSpes("Médecin Interniste")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Médecin Interniste
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
                  onClick={() => ButtonClickSpes("Médecin esthétique")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Médecin esthétique
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
                  onClick={() =>
                    ButtonClickSpes("Médecine physique et réadaptation")
                  }
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Médecine physique et réadaptation
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
                  onClick={() => ButtonClickSpes("Neurochirurgie")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Neurochirurgie
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
                  onClick={() => ButtonClickSpes("Neurochirurgien")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Neurochirurgien
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
                  onClick={() => ButtonClickSpes("Neurologue")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Neurologue
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
                  onClick={() => ButtonClickSpes("Nutritionniste")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Nutritionniste
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
                  onClick={() => ButtonClickSpes("Néphrologue")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Néphrologue
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
                  onClick={() => ButtonClickSpes("ORL")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    ORL
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
                  onClick={() => ButtonClickSpes("Ophtalmologue")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Ophtalmologue
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
                  onClick={() => ButtonClickSpes("Orthodontiste")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Orthodontiste
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
                  onClick={() => ButtonClickSpes("Orthophoniste")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Orthophoniste
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
                  onClick={() => ButtonClickSpes("Pneumologue")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Pneumologue
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
                  onClick={() => ButtonClickSpes("Psychiatre")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Psychiatre
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
                  onClick={() => ButtonClickSpes("Psychologue")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Psychologue
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
                  onClick={() => ButtonClickSpes("Psychologue clinicien")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Psychologue clinicien
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
                  onClick={() => ButtonClickSpes("Pédiatre")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Pédiatre
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
                  onClick={() => ButtonClickSpes("Pédopsychiatrie")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Pédopsychiatrie
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
                  onClick={() => ButtonClickSpes("Radiologue")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Radiologue
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
                  onClick={() => ButtonClickSpes("Rhumatologue")}
                  className="grid grid-cols-speciality-item gap-2 items-center justify-between w-full rounded-lg py-5 px-4 cursor-pointer hover:bg-primary-ice group"
                >
                  <div
                    className="min-w-[26px] min-h-[26px]"
                    style={{
                      loading: "eager",
                      width: "26",
                      height: "26",
                      alt: "pin",
                    }}
                  ></div>
                  <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                    Rhumatologue
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
    </>
  );
}

export default ShowSpécialité;
