import { TypeAnimation } from "react-type-animation";
import { useState, useRef, useEffect } from "react";
import Lottie from "lottie-react";
import iconData from "../assets/position.json";
import iconsearch from "../assets/iconsearch.json";
import iconappstore from "../assets/App-Store.json";
import iconplaystore from "../assets/Google-Play.json";
import Acupuncteur from "../assets/icon_Spécialités/Acupuncteur.json";
import allergist from "../assets/icon_Spécialités/allergist.json";
import Anatomopathologiste from "../assets/icon_Spécialités/Anatomopathologiste.json";
import anesthesiologist from "../assets/icon_Spécialités/anesthesiologist.json";
import angiologist from "../assets/icon_Spécialités/angiologist.json";
import audioprosthetist from "../assets/icon_Spécialités/audioprosthetist.json";
import cardiologist from "../assets/icon_Spécialités/cardiologist.json";
import cardiovascular from "../assets/icon_Spécialités/cardiovascular-surgeon.json";
import digestive from "../assets/icon_Spécialités/digestive.json";
import orthopedic from "../assets/icon_Spécialités/orthopedic.json";
import doctor from "../assets/icon_Spécialités/doctor.json";
import plasticien from "../assets/icon_Spécialités/plasticien.json";
import pediatric from "../assets/icon_Spécialités/pediatric.json";
import urologist from "../assets/icon_Spécialités/urologist.json";
import Dentiste from "../assets/icon_Spécialités/Dentiste.json";
import Dermatologue from "../assets/icon_Spécialités/Dermatologue.json";
import endocrinologist from "../assets/icon_Spécialités/endocrinologist.json";
import gastroenterologist from "../assets/icon_Spécialités/gastroenterologist.json";
import Obstétricien from "../assets/icon_Spécialités/Obstétricien.json";
import gynecologist from "../assets/icon_Spécialités/gynecologist.json";
import hematologist from "../assets/icon_Spécialités/hematologist.json";
import kini from "../assets/icon_Spécialités/kini.json";
import biologist from "../assets/icon_Spécialités/biologist.json";
import general from "../assets/icon_Spécialités/general.json";
import internist from "../assets/icon_Spécialités/internist.json";
import neurologist from "../assets/icon_Spécialités/neurologist.json";
import nutritionist from "../assets/icon_Spécialités/nutritionist.json";
import nephrologist from "../assets/icon_Spécialités/nephrologist.json";
import orl from "../assets/icon_Spécialités/orl.json";
import ophtalmo from "../assets/icon_Spécialités/ophtalmo.json";
import dentist from "../assets/icon_Spécialités/dentist.json";
import speech from "../assets/icon_Spécialités/speech.json";
import pulmonary from "../assets/icon_Spécialités/pulmonary.json";
import psychiatrist from "../assets/icon_Spécialités/psychiatrist.json";
import psychologist from "../assets/icon_Spécialités/psychologist.json";
import radiologist from "../assets/icon_Spécialités/radiologist.json";
import rheumatologist from "../assets/icon_Spécialités/rheumatologist.json";


 export const Body = () => {
   /// set les Spécialités sur input
   const [inputValueSpes, setInputValueSpes] = useState("");
   const ButtonClickSpes = (value) => {
     setInputValueSpes(value);
   };
   /// set les ville sur input
   const [inputValueVille, setInputValueVille] = useState("");
   const ButtonClickVille = (value) => {
     setInputValueVille(value);
   };
   ///
   const [showDiv1, setShowDiv1] = useState(false);
   const [showDiv2, setShowDiv2] = useState(false);
   const inputRef1 = useRef(null);
   const inputRef2 = useRef(null);
   const divRef1 = useRef(null);
   const divRef2 = useRef(null);

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

   const handleInputClick1 = () => {
     setShowDiv1(true);
   };

   const handleInputClick2 = () => {
     setShowDiv2(true);
   };
   //////

   return (
     <>
       <div>
         <div className="w-full imag_back">
           <img
             alt="hydro"
             src="/Aboutus/imgs/hydrogene.webp"
             height="222.2"
             width="265"
             className="absolute -top-2 -left-14 filter blur-[30px] bg-[#cafddc] opacity-50 object-contain z-[-1]"
           />
           <img
             alt="hydro-noon"
             src="/Aboutus/imgs/noon.webp"
             height="482.8"
             width="195.5"
             className="absolute h-[270.8px] w-[195.5px] top-1/2 transform -translate-y-1/2 right-[-5.6rem] filter blur-[50px] bg-primary opacity-80 object-contain hidden md:block z-[-1]"
           />

           <div
             id="how-it-works"
             className="mb-12 mx-auto h-full w-full xl:h-vh-header mt-20 xl:mb-0 "
           >
             <div className="h-full w-full ">
               <div className="flex flex-col w-full mx-auto items-center md:flex-row h-full px-7 md:px-3">
                 <div className="mt-11 flex flex-col items-center justify-center w-full">
                   <div className="w-full mx-3 uppercase text-xs text-center md:text-sm font-bold text-secondary mb-4">
                     Simplement, Rapidement &amp; Gratuitement
                   </div>
                   <div className="flex flex-col items-center justify-center text-center mx-auto">
                     <div className="w-full mx-3 font-bold text-4xl md:text-5xl lg:text-6xl whitespace-pre-wrap lg:rtl:text-7xl lg:rtl:leading-[90px]">
                       Trouvez un rendez-vous avec votre
                     </div>
                     <div className="w-full mx-3 font-bold text-4xl md:text-5xl lg:text-6xl whitespace-pre-wrap lg:rtl:text-7xl lg:rtl:leading-[90px]">
                       <span
                         className="text-primary text-center border-solid border-primary border-e-4 home_writer__YUoPY"
                         id="writer"
                       >
                         <TypeAnimation
                           sequence={[
                             "Dentiste",
                             1000,
                             "Gynécologue",
                             1000,
                             "Gynécologue",
                             1000,
                             "Cardiologue",
                             1000,
                             "Ophtalmologue",
                             1000,
                             "Praticien",
                             1000,
                           ]}
                           speed={50}
                           repeat={Infinity}
                         />
                       </span>
                     </div>
                   </div>
                   <div className="mb-2 mt-9 w-full">
                     <div className="mx-auto !w-full  !z-[100]  ">
                       <div className="md:rounded-full max-w-5xl w-full lg:py-0 lg:px-0 xl:py-0 xl:px-0 mx-auto md:shadow-sh-112-8 border border-liquide rounded-lg">
                         <div className="grid grid-flow-row px-2 md:px-1 py-4 md:py-1 md:flex md:flex-row md:flex-nowrap items-center gap-2 !p-[5px] w-full">
                           <div className="relative rounded-full flex-grow border-liquide border flex items-center md:w-4/6 h-14 py-2 px-2 bg-liquide focus-within:border-primary border-liquide border">
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
                                 <Lottie
                                   animationData={iconsearch}
                                   loop={true}
                                 ></Lottie>
                               </div>

                               <input
                                 className="bg-liquide outline-none w-full text-base sm:text-sm lg:text-sm outline-clear"
                                 placeholder="Rechercher un praticien, un établissement, une spécialité..."
                                 onClick={handleInputClick1}
                                 ref={inputRef1}
                                 value={inputValueSpes}
                                 onChange={(e) =>
                                   setInputValueSpes(e.target.value)
                                 }
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
                                       onClick={() =>
                                         ButtonClickSpes("Acupuncteur")
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
                                         <Lottie
                                           animationData={Acupuncteur}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Allergologue")
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
                                         <Lottie
                                           animationData={allergist}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Anatomopathologiste")
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes(
                                           "Anesthésiste-réanimateur"
                                         )
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
                                         <Lottie
                                           animationData={anesthesiologist}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Angiologue")
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
                                         <Lottie
                                           animationData={angiologist}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Audioprothésiste")
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
                                         <Lottie
                                           animationData={audioprosthetist}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Cardiologue")
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
                                         <Lottie
                                           animationData={cardiologist}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Centre de soins")
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
                                         <Lottie
                                           animationData={doctor}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes(
                                           " Chirurgien cardio-vasculaire"
                                         )
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
                                         <Lottie
                                           animationData={digestive}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Chirurgien générale")
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
                                         <Lottie
                                           animationData={cardiovascular}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes(
                                           "Chirurgien maxillo-facial"
                                         )
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
                                         <Lottie
                                           animationData={doctor}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes(
                                           "Chirurgien orthopédiste et traumatologue"
                                         )
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
                                         <Lottie
                                           animationData={orthopedic}
                                           loop={true}
                                         ></Lottie>
                                       </div>
                                       <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                                         Chirurgien orthopédiste et
                                         traumatologue
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes(
                                           "Chirurgien plasticien et esthétique"
                                         )
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
                                         <Lottie
                                           animationData={plasticien}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Chirurgien pédiatre")
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
                                         <Lottie
                                           animationData={pediatric}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Chirurgien urologue")
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
                                         <Lottie
                                           animationData={urologist}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Dentiste")
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
                                         <Lottie
                                           animationData={Dentiste}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Dermatologue")
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
                                         <Lottie
                                           animationData={Dermatologue}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes(
                                           "Diabétologue et endocrinologue"
                                         )
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
                                         <Lottie
                                           animationData={doctor}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Endocrinologue")
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
                                         <Lottie
                                           animationData={endocrinologist}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Gastro-entérologue")
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
                                         <Lottie
                                           animationData={gastroenterologist}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes(
                                           "Gynécologue Obstétricien"
                                         )
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
                                         <Lottie
                                           animationData={Obstétricien}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes(
                                           "Gynécologue spécialisé en infertilité"
                                         )
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
                                         <Lottie
                                           animationData={gynecologist}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Hématologue")
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
                                         <Lottie
                                           animationData={hematologist}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Kinésithérapeute")
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
                                         <Lottie
                                           animationData={kini}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes(
                                           "Laboratoire danalyses médicales"
                                         )
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
                                         <Lottie
                                           animationData={biologist}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Medecin généraliste")
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
                                         <Lottie
                                           animationData={general}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Médecin Interniste")
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
                                         <Lottie
                                           animationData={internist}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Médecin esthétique")
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
                                         <Lottie
                                           animationData={doctor}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes(
                                           "Médecine physique et réadaptation"
                                         )
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
                                         <Lottie
                                           animationData={doctor}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Neurochirurgie")
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
                                         <Lottie
                                           animationData={doctor}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Neurochirurgien")
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
                                         <Lottie
                                           animationData={neurologist}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Neurologue")
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
                                         <Lottie
                                           animationData={neurologist}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Nutritionniste")
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
                                         <Lottie
                                           animationData={nutritionist}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Néphrologue")
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
                                         <Lottie
                                           animationData={nephrologist}
                                           loop={true}
                                         ></Lottie>
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
                                         <Lottie
                                           animationData={orl}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Ophtalmologue")
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
                                         <Lottie
                                           animationData={ophtalmo}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Orthodontiste")
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
                                         <Lottie
                                           animationData={dentist}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Orthophoniste")
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
                                         <Lottie
                                           animationData={speech}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Pneumologue")
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
                                         <Lottie
                                           animationData={pulmonary}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Psychiatre")
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
                                         <Lottie
                                           animationData={psychiatrist}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Psychologue")
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
                                         <Lottie
                                           animationData={psychologist}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes(
                                           "Psychologue clinicien"
                                         )
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
                                         <Lottie
                                           animationData={doctor}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Pédiatre")
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
                                         <Lottie
                                           animationData={pediatric}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Pédopsychiatrie")
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
                                         <Lottie
                                           animationData={doctor}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Radiologue")
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
                                         <Lottie
                                           animationData={radiologist}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickSpes("Rhumatologue")
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
                                         <Lottie
                                           animationData={rheumatologist}
                                           loop={true}
                                         ></Lottie>
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
                             </div>
                           </div>
                           <div className="relative rounded-full flex-grow border-liquide border md:w-2/6 flex items-center h-14 py-2 px-2 bg-liquide focus-within:border-primary">
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
                                 <Lottie
                                   animationData={iconData}
                                   loop={true}
                                 ></Lottie>
                               </div>

                               <input
                                 className="bg-liquide outline-clear w-full text-base sm:text-sm lg:text-sm"
                                 placeholder="Votre ville ?"
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Laghouat")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Oum El Bouaghi")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Béjaïa")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Biskra")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Béchar")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Bouira")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Tamanrasset")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Tébessa")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Tlemcen")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Tiaret")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Tizi-Ouzou")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Djelfa")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Skikda")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Sidi-Bel-Abbès")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Annaba")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Guelma")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Constantine")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Mostaganem")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille(" M'Sila")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Mascara")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Ouargla")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("El-Bayadh")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Illizi")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Bordj-Bou-Arreridj")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Boumerdès")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("El-Tarf")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Tindouf")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Tissemsilt")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("El-Oued")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Khenchela")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Souk-Ahras")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Tipaza")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Aïn-Defla")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Aïn-Témouchent")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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

                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Ghardaia")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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

                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Relizane")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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

                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Timimoun")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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

                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Bordj Badji Mokhtar")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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

                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Ouled Djellal")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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

                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Béni Abbès")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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

                                     <button
                                       onClick={() =>
                                         ButtonClickVille("In Salah")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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

                                     <button
                                       onClick={() =>
                                         ButtonClickVille("In Guezzam")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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

                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Touggourt")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("Djanet")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("El M'Ghair")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                                     <button
                                       onClick={() =>
                                         ButtonClickVille("El Meniaa")
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
                                         <Lottie
                                           animationData={iconData}
                                           loop={true}
                                         ></Lottie>
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
                           <a
                             className="rounded-full bg-primary hover:bg-primary-bold text-center text-white font-medium md:w-max flex items-center justify-center h-14 py-2 px-5 text-base rtl:text-lg"
                             href=""
                           >
                             Rechercher
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="hidden w-full text-center md:block mb-2 mt-1 ms-4 font-normal text-xs">
                     Le site de prise de rendez-vous avec les professionnels de
                     santé.
                   </div>
                   <div className="hidden w-full mx-auto md:flex md:items-center md:justify-center mt-3 ms-4">
                     <div className="mx-auto xl:mx-0">
                       <div className="grid grid-flow-col auto-cols-max gap-3 z-[-1] relative">
                         <a href="" target="_blank" rel="noopener noreferrer">
                           <Lottie
                             animationData={iconappstore}
                             loop={true}
                             className="icon_store"
                           ></Lottie>
                         </a>
                         <a href="" target="_blank" rel="noopener noreferrer">
                           <Lottie
                             animationData={iconplaystore}
                             loop={true}
                             className="icon_store icon_play"
                           ></Lottie>
                         </a>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </>
   );
 };
export default Body;
