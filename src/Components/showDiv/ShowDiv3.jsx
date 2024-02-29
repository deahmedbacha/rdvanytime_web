import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ShoxDiv3() {
  const [showCalendar, setShowCalendar] = useState(false); // État pour contrôler l'affichage du calendrier
  const [selectedDate, setSelectedDate] = useState(null);
 

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false); // Masquer le calendrier une fois une date sélectionnée
  };
  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        onClickOutside={() => setShowCalendar(false)} // Masquer le calendrier lors du clic à l'extérieur
        dateFormat="dd/MM/yyyy"
        placeholderText="Choisir date"
      />
    </>
  );
}
export default ShoxDiv3;
