import { useRef, useState } from "react";
import "./FileInput.css";

const FileInput = () => {
  const inputRef = useRef();

  const [selectedFiles, setSelectedFiles] = useState([]);

  // Handle the change event when files are selected
  const handleOnChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFiles([...selectedFiles, ...event.target.files]);
    }
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  const removeFile = (fileToRemove) => {
    const updatedFiles = selectedFiles.filter((file) => file !== fileToRemove);
    setSelectedFiles(updatedFiles);
  };

  return (
    <div>
      {/* Hidden file input element */}
      <input
        type="file"
        ref={inputRef}
        onChange={handleOnChange}
        style={{ display: "none" }}
        multiple // Allow multiple file selection
      />

      {/* Button to trigger the file input dialog */}
      <button
        className="file-btn container"
        style={{ width: "30%" }}
        onClick={onChooseFile}
      >
        <span className="material-symbols-rounded">upload</span> Télécharger des
        fichiers
      </button>

      {selectedFiles.length > 0 && (
        <div className="selected-files">
          {selectedFiles.map((file, index) => (
            <div key={index} className="selected-file">
              <p>{file.name}</p>

              <button onClick={() => removeFile(file)}>
                <span className="material-symbols-rounded">delete</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileInput;
