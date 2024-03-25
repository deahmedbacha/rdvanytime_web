import Select from "react-select";
import "./Groupage.css"; // Import your CSS file for custom styles

const options = [
  { value: "O-", label: "O-" },
  { value: "O+", label: "O+" },
  { value: "B-", label: "B-" },
  { value: "B+", label: "B+" },
  { value: "A-", label: "A-" },
  { value: "A+", label: "A+" },
  { value: "AB-", label: "AB-" },
  { value: "AB+", label: "AB+" },
];
const colourStyles = {
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    console.log({ data, isDisabled, isFocused, isSelected });
    return {
      ...styles,
      backgroundColor: isFocused ? "#02ae96" : null,
      color: "#333333",
    };
  },
};

const Groupage = () => {
  
  return (
    <Select
      className="custom-select" // Add a className to the Select component for custom styling
      options={options}
      placeholder={"-"}
      styles={colourStyles}
    />
  );
};

export default Groupage;
