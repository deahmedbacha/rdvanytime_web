import { useState, useRef, useEffect } from "react";
import Lottie from "lottie-react";
import Acupuncteur from "../../assets/icon_Spécialités/Acupuncteur.json";
import allergist from "../../assets/icon_Spécialités/allergist.json";
import Anatomopathologiste from "../../assets/icon_Spécialités/Anatomopathologiste.json";
import anesthesiologist from "../../assets/icon_Spécialités/anesthesiologist.json";
import angiologist from "../../assets/icon_Spécialités/angiologist.json";
import audioprosthetist from "../../assets/icon_Spécialités/audioprosthetist.json";
import cardiologist from "../../assets/icon_Spécialités/cardiologist.json";
import cardiovascular from "../../assets/icon_Spécialités/cardiovascular-surgeon.json";
import digestive from "../../assets/icon_Spécialités/digestive.json";
import orthopedic from "../../assets/icon_Spécialités/orthopedic.json";
import doctor from "../../assets/icon_Spécialités/doctor.json";
import plasticien from "../../assets/icon_Spécialités/plasticien.json";
import pediatric from "../../assets/icon_Spécialités/pediatric.json";
import urologist from "../../assets/icon_Spécialités/urologist.json";
import Dentiste from "../../assets/icon_Spécialités/Dentiste.json";
import Dermatologue from "../../assets/icon_Spécialités/Dermatologue.json";
import endocrinologist from "../../assets/icon_Spécialités/endocrinologist.json";
import gastroenterologist from "../../assets/icon_Spécialités/gastroenterologist.json";
import Obstétricien from "../../assets/icon_Spécialités/Obstétricien.json";
import gynecologist from "../../assets/icon_Spécialités/gynecologist.json";
import hematologist from "../../assets/icon_Spécialités/hematologist.json";
import kini from "../../assets/icon_Spécialités/kini.json";
import biologist from "../../assets/icon_Spécialités/biologist.json";
import general from "../../assets/icon_Spécialités/general.json";
import internist from "../../assets/icon_Spécialités/internist.json";
import neurologist from "../../assets/icon_Spécialités/neurologist.json";
import nutritionist from "../../assets/icon_Spécialités/nutritionist.json";
import nephrologist from "../../assets/icon_Spécialités/nephrologist.json";
import orl from "../../assets/icon_Spécialités/orl.json";
import ophtalmo from "../../assets/icon_Spécialités/ophtalmo.json";
import dentist from "../../assets/icon_Spécialités/dentist.json";
import speech from "../../assets/icon_Spécialités/speech.json";
import pulmonary from "../../assets/icon_Spécialités/pulmonary.json";
import psychiatrist from "../../assets/icon_Spécialités/psychiatrist.json";
import psychologist from "../../assets/icon_Spécialités/psychologist.json";
import radiologist from "../../assets/icon_Spécialités/radiologist.json";
import rheumatologist from "../../assets/icon_Spécialités/rheumatologist.json";
function ShoxDiv1() {

   const [inputValueSpes, setInputValueSpes] = useState("");
   const ButtonClickSpes = (value) => {
     setInputValueSpes(value);
      setShowDiv1(false);
       console.log(value);
       localStorage.setItem("type", value);
   };
   ///
   const [showDiv1, setShowDiv1] = useState(false);
   const inputRef1 = useRef(null);
   const divRef1 = useRef(null);
   const inputRef = useRef(null);
   useEffect(() => {
     const handleClickOutside = (event) => {
       if (
         inputRef1.current &&
         !inputRef1.current.contains(event.target) &&
         divRef1.current &&
         !divRef1.current.contains(event.target)
       ) {
         setShowDiv1(false);
         
       }
       
     };

     document.addEventListener("mousedown", handleClickOutside);
     return () => {
       document.removeEventListener("mousedown", handleClickOutside);
       
     };
   }, []);

   const handleInputClick1 = () => {
     setShowDiv1(true);
   };

  return (
    <>
      <input
        className="bg-liquide outline-none w-full text-base sm:text-sm lg:text-sm outline-clear"
        placeholder="Rechercher un praticien, un établissement, une spécialité..."
        onClick={handleInputClick1}
        ref={inputRef1}
        value={inputValueSpes}
        onChange={(e) => setInputValueSpes(e.target.value)}
      />
      {showDiv1 && (
        <div
          ref={divRef1}
          className="absolute top-14 sm:top-13 w-full start-0 bg-white border border-1 shadow-lg h-auto min-mobile:max-w-[max-content] min-mobile:min-w-[360px]  rounded-2xl z-50 py-4 transform transition-opacity"
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
              >
                <Lottie animationData={Acupuncteur} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={allergist} loop={true}></Lottie>
              </div>
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
              >
                <Lottie
                  animationData={Anatomopathologiste}
                  loop={true}
                ></Lottie>
              </div>
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
              >
                <Lottie animationData={anesthesiologist} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={angiologist} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={audioprosthetist} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={cardiologist} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={doctor} loop={true}></Lottie>
              </div>
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
              onClick={() => ButtonClickSpes(" Chirurgien cardio-vasculaire")}
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
                <Lottie animationData={digestive} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={cardiovascular} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={doctor} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={orthopedic} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={plasticien} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={pediatric} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={urologist} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={Dentiste} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={Dermatologue} loop={true}></Lottie>
              </div>
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
              onClick={() => ButtonClickSpes("Diabétologue et endocrinologue")}
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
                <Lottie animationData={doctor} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={endocrinologist} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={gastroenterologist} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={Obstétricien} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={gynecologist} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={hematologist} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={kini} loop={true}></Lottie>
              </div>
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
              onClick={() => ButtonClickSpes("Laboratoire danalyses médicales")}
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
                <Lottie animationData={biologist} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={general} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={internist} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={doctor} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={doctor} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={doctor} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={neurologist} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={neurologist} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={nutritionist} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={nephrologist} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={orl} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={ophtalmo} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={dentist} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={speech} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={pulmonary} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={psychiatrist} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={psychologist} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={doctor} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={pediatric} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={doctor} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={radiologist} loop={true}></Lottie>
              </div>
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
              >
                <Lottie animationData={rheumatologist} loop={true}></Lottie>
              </div>
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
    </>
  );
}
export default ShoxDiv1;
