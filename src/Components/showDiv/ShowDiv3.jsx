import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";
function ShoxDiv3() {
  const [startDate, setStartDate] = useState("");
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Choisir date"
        minDate={new Date()}
      />
    </>
  );
}
export default ShoxDiv3;
