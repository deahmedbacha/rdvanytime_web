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
  const [showDiv1, setShowDiv1] = useState(false);
  const inputRef1 = useRef(null);
  const divRef1 = useRef(null);

  // Définir les spécialités avec leurs noms et animations
  const specialities = [
    { name: "Acupuncteur", animation: Acupuncteur },
    { name: "Allergologue", animation: allergist },
    { name: "Anatomopathologiste", animation: Anatomopathologiste },
    { name: "Anesthésiste-réanimateur", animation: anesthesiologist },
    { name: "Angiologue", animation: angiologist },
    { name: "Audioprothésiste", animation: audioprosthetist },

    { name: "Cardiologue", animation: cardiologist },
    { name: "Centre de soins", animation: doctor },
    { name: "Chirurgien cardio-vasculaire", animation: digestive },
    { name: "Chirurgien générale", animation: cardiovascular },
    { name: "Chirurgien maxillo-facial", animation: doctor },
    {
      name: "Chirurgien orthopédiste et traumatologue",
      animation: orthopedic,
    },
    {
      name: "Chirurgien plasticien et esthétique",
      animation: plasticien,
    },
    { name: "Chirurgien pédiatre", animation: pediatric },
    { name: "Chirurgien urologue", animation: urologist },
    { name: "Dentiste", animation: Dentiste },
    { name: "Dermatologue", animation: Dermatologue },
    { name: "Diabétologue et endocrinologue", animation: doctor },
    { name: "Endocrinologue", animation: endocrinologist },
    { name: "Gastro-entérologue", animation: gastroenterologist },
    { name: "Gynécologue Obstétricien", animation: Obstétricien },
    {
      name: "Gynécologue spécialisé en infertilité",
      animation: gynecologist,
    },
    { name: "Hématologue", animation: hematologist },
    { name: "Kinésithérapeute", animation: kini },
    { name: " Laboratoire danalyses médicales", animation: biologist },
    { name: "Medecin généraliste", animation: general },
    { name: "Médecin Interniste", animation: internist },
    { name: "Médecin esthétique", animation: doctor },
    { name: "Médecine physique et réadaptation", animation: doctor },
    { name: "Neurochirurgie", animation: doctor },
    { name: "Neurochirurgien", animation: neurologist },
    { name: "Neurologue", animation: neurologist },
    { name: "Nutritionniste", animation: nutritionist },
    { name: "Néphrologue", animation: nephrologist },
    { name: "ORL", animation: orl },
    { name: "Ophtalmologue", animation: ophtalmo },
    { name: "Orthodontiste", animation: dentist },
    { name: "Orthophoniste", animation: speech },
    { name: "Pneumologue", animation: pulmonary },
    { name: "Psychiatre", animation: psychiatrist },
    { name: "Psychologue", animation: psychologist },
    { name: "Psychologue clinicien", animation: doctor },
    { name: "Pédiatre", animation: pediatric },
    { name: "Pédopsychiatrie", animation: doctor },
    { name: "Radiologue", animation: radiologist },
    { name: "Rhumatologue", animation: rheumatologist },

    // Ajoutez les autres spécialités ici
  ];

  // Filtrer les spécialités en fonction de la valeur de l'entrée
  const filteredSpecialities = specialities.filter((speciality) =>
    speciality.name.toLowerCase().includes(inputValueSpes.toLowerCase())
  );

  const handleInputClick1 = () => {
    setShowDiv1(true);
  };

  const ButtonClickSpes = (value) => {
    setInputValueSpes(value);
    setShowDiv1(false);
    console.log(value);
    localStorage.setItem("type", value);
  };

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

  return (
    <>
      <input
        className="bg-liquide outline-none w-full text-base sm:text-sm lg:text-sm outline-clear"
        placeholder="Rechercher un praticien, une spécialité..."
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
            {filteredSpecialities.map((speciality) => (
              <button
                key={speciality.name}
                onClick={() => ButtonClickSpes(speciality.name)}
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
                    animationData={speciality.animation}
                    loop={true}
                  ></Lottie>
                </div>
                <div className="rtl:text-right ltr:text-left text-sm font-medium group-hover:font-bold rtl:text-base line-clamp-2">
                  {speciality.name}
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
            ))}
          </div>
        </div>
      )}
    </>
  );
}
export default ShoxDiv1;
