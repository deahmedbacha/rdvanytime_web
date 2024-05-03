import { useState, useRef, useEffect } from "react";
import Lottie from "lottie-react";
import iconData from "../../assets/position.json";

function ShoxDiv2() {
  /// set les ville sur input
  const [inputValueVille, setInputValueVille] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const ButtonClickVille = (value) => {
    setInputValueVille(value);
    setShowDiv2(false);
    console.log(value);
    localStorage.setItem("ville", value);
  };

  // List of cities
  const cities = [
    "Adrar",
    "Chlef",
    "Laghouat",
    "Oum El Bouaghi",
    "Batna",
    "Béjaïa",
    "Biskra",
    "Béchar",
    "Blida",
    "Bouira",
    "Tamanrasset",
    "Tébessa",
    "Tlemcen",
    "Tiaret",
    "Tizi-Ouzou",
    "Alger",
    "Djelfa",
    "Jijel",
    "Sétif",
    "Saida",
    "Skikda",
    "Sidi-Bel-Abbès",
    "Annaba",
    "Guelma",
    "Constantine",
    "Médéa",
    "Mostaganem",
    "M'Sila",
    "Mascara",
    "Ouargla",
    "Oran",
    "El-Bayadh",
    "Illizi",
    "Bordj-Bou-Arreridj",
    "Boumerdès",
    "El-Tarf",
    "Tindouf",
    "Tissemsilt",
    "El-Oued",
    "Khenchela",
    "Souk-Ahras",
    "Tipaza",
    "Mila",
    "Aïn-Defla",
    "Naâma",
    "Aïn-Témouchent",
    "Ghardaia",
    "Relizane",
    "Timimoun",
    "Bordj Badji Mokhtar",
    "Ouled Djellal",
    "Béni Abbès",
    "In Salah",
    " In Guezzam",
    "Touggourt",
    "Djanet",
    "El M'Ghair",
    "El Meniaa",

    // Add more cities here...
  ];

  // Filter cities based on input value
  useEffect(() => {
    const filtered = cities.filter((city) =>
      city.toLowerCase().includes(inputValueVille.toLowerCase())
    );
    setFilteredCities(filtered);
  }, [inputValueVille]);

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
            {filteredCities.map((city) => (
              <button
                key={city}
                onClick={() => ButtonClickVille(city)}
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
                  {city}
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

export default ShoxDiv2;
