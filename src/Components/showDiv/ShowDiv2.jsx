import { useState, useRef, useEffect } from "react";
import Lottie from "lottie-react";
import iconData from "../../assets/position.json";

function ShoxDiv2() {
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
        placeholder="Votre ville ?"
        onClick={handleInputClick2}
        ref={inputRef2}
        value={inputValueVille}
        onChange={(e) => setInputValueVille(e.target.value)}
      />
      {showDiv2 && (
        <div
          ref={divRef2}
          className="absolute top-14 sm:top-13 w-full start-0 bg-white border border-1 shadow-lg h-auto min-mobile:max-w-[max-content] min-mobile:min-w-[360px]  rounded-2xl z-50 py-4 transform transition-opacity"
        >
          <div className="max-h-80 overflow-y-auto px-3 flex flex-col min-h-[max-content] ">
            <div className="font-medium text-base text-gray-400 mb-3 px-3 uppercase select-none">
              Villes disponibles
            </div>
            <button
              onClick={() => ButtonClickVille("Adrar")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>

              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Adrar
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
              onClick={() => ButtonClickVille("Chlef")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Chlef
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
              onClick={() => ButtonClickVille("Laghouat")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Laghouat
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
              onClick={() => ButtonClickVille("Oum El Bouaghi")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Oum El Bouaghi
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
              onClick={() => ButtonClickVille("Batna")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Batna
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
              onClick={() => ButtonClickVille("Béjaïa")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Béjaïa
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
              onClick={() => ButtonClickVille("Biskra")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Biskra
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
              onClick={() => ButtonClickVille("Béchar")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Béchar
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
              onClick={() => ButtonClickVille("Blida")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Blida
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
              onClick={() => ButtonClickVille("Bouira")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Bouira
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
              onClick={() => ButtonClickVille("Tamanrasset")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Tamanrasset
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
              onClick={() => ButtonClickVille("Tébessa")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Tébessa
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
              onClick={() => ButtonClickVille("Tlemcen")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Tlemcen
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
              onClick={() => ButtonClickVille("Tiaret")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Tiaret
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
              onClick={() => ButtonClickVille("Tizi-Ouzou")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Tizi-Ouzou
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
              onClick={() => ButtonClickVille("Alger")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Alger
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
              onClick={() => ButtonClickVille("Djelfa")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Djelfa
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
              onClick={() => ButtonClickVille("Jijel")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Jijel
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
              onClick={() => ButtonClickVille("Sétif")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Sétif
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
              onClick={() => ButtonClickVille("Saida")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Saida
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
              onClick={() => ButtonClickVille("Skikda")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Skikda
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
              onClick={() => ButtonClickVille("Sidi-Bel-Abbès")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Sidi-Bel-Abbès
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
              onClick={() => ButtonClickVille("Annaba")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Annaba
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
              onClick={() => ButtonClickVille("Guelma")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Guelma
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
              onClick={() => ButtonClickVille("Constantine")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Constantine
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
              onClick={() => ButtonClickVille("Médéa")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Médéa
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
              onClick={() => ButtonClickVille("Mostaganem")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Mostaganem
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
              onClick={() => ButtonClickVille(" M'Sila")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                M&apos;Sila
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
              onClick={() => ButtonClickVille("Mascara")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Mascara
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
              onClick={() => ButtonClickVille("Ouargla")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Ouargla
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
              onClick={() => ButtonClickVille("Oran")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Oran
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
              onClick={() => ButtonClickVille("El-Bayadh")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                El-Bayadh
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
              onClick={() => ButtonClickVille("Illizi")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Illizi
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
              onClick={() => ButtonClickVille("Bordj-Bou-Arreridj")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Bordj-Bou-Arreridj
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
              onClick={() => ButtonClickVille("Boumerdès")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Boumerdès
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
              onClick={() => ButtonClickVille("El-Tarf")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                El-Tarf
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
              onClick={() => ButtonClickVille("Tindouf")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Tindouf
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
              onClick={() => ButtonClickVille("Tissemsilt")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Tissemsilt
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
              onClick={() => ButtonClickVille("El-Oued")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                El-Oued
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
              onClick={() => ButtonClickVille("Khenchela")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Khenchela
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
              onClick={() => ButtonClickVille("Souk-Ahras")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Souk-Ahras
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
              onClick={() => ButtonClickVille("Tipaza")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Tipaza
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
              onClick={() => ButtonClickVille("Mila")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Mila
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
              onClick={() => ButtonClickVille("Aïn-Defla")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Aïn-Defla
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
              onClick={() => ButtonClickVille("Naâma")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Naâma
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
              onClick={() => ButtonClickVille("Aïn-Témouchent")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Aïn-Témouchent
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
              onClick={() => ButtonClickVille("Ghardaia")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Ghardaia
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
              onClick={() => ButtonClickVille("Relizane")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Relizane
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
              onClick={() => ButtonClickVille("Timimoun")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Timimoun
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
              onClick={() => ButtonClickVille("Bordj Badji Mokhtar")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Bordj Badji Mokhtar
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
              onClick={() => ButtonClickVille("Ouled Djellal")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Ouled Djellal
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
              onClick={() => ButtonClickVille("Béni Abbès")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Béni Abbès
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
              onClick={() => ButtonClickVille("In Salah")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                In Salah
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
              onClick={() => ButtonClickVille("In Guezzam")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                In Guezzam
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
              onClick={() => ButtonClickVille("Touggourt")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Touggourt
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
              onClick={() => ButtonClickVille("Djanet")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                Djanet
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
              onClick={() => ButtonClickVille("El M'Ghair")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                El M&apos;Ghair
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
              onClick={() => ButtonClickVille("El Meniaa")}
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
              >
                <Lottie animationData={iconData} loop={true}></Lottie>
              </div>
              <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                El Meniaa
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
export default ShoxDiv2;
