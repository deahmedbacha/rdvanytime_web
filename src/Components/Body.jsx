import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import iconData from "../assets/position.json";
import iconsearch from "../assets/iconsearch.json";
import iconappstore from "../assets/App-Store.json";
import iconplaystore from "../assets/Google-Play.json";
import ShoxDiv1 from "../Components/showDiv/ShoxDiv1.jsx";
import ShoxDiv2 from "../Components/showDiv/ShowDiv2.jsx";
import { Link } from "react-router-dom";
 export const Body = () => {
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
                   <div className="w-full mx-3 uppercase text-x text-center text-secondary mb-4">
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
                              <ShoxDiv1></ShoxDiv1>
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
                             <ShoxDiv2></ShoxDiv2>
                               <div className="flex flex-col items-center justify-center">
                                 <img
                                   alt="envoyer"
                                   src="src/assets/envoyer.png"
                                   loading="eager"
                                   width="18"
                                   height="18"
                                   className="min-w-[18px] min-h-[18px]"
                                 />
                               </div>
                             </button>
                           </div>
                           <Link
                             className="rounded-full bg-primary hover:bg-primary-bold text-center text-white font-medium md:w-max flex items-center justify-center h-14 py-2 px-5 text-base rtl:text-lg"
                             to="/Rechercher"
                           >
                             Rechercher
                           </Link>
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
