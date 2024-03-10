import React, { useState } from "react";
import Results from "@/components/results/results";
import style from './uploadfasta.css'; 

const FastaFile = ({ click }) => {
  const [fastaFile, setFastaFile] = useState(null);

  const handleLoadSample = () => {
    // You can provide a sample FASTA file here if needed
    // For example, you can read the contents of a sample file and set it in state
    fetch("/path/to/sample.fasta")
      .then((response) => response.text())
      .then((data) => setFastaFile(data))
      .catch((error) => console.error("Error loading sample file:", error));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target.result;
        setFastaFile(contents);
      };
      reader.readAsText(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for handling the uploaded FASTA file
    // You may want to perform predictions or other actions here
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-group headers">
          <h3>Upload FASTA File!</h3>
          <p>Please upload a FASTA file to test.</p>
        </div>
        <div className="form-group">
          <label htmlFor="fileInput">Upload FASTA File:</label>
          <input
            type="file"
            id="fileInput"
            accept=".fasta, .fa"
            onChange={handleFileChange}
          />
        </div>
        <div className="buttons">
          <input
            type="submit"
            value="Predict FASTA File"
            onClick={handleSubmit}
          />
          <input type="submit" value="Load Sample" onClick={handleLoadSample} />
        </div>
      </div>
    </div>
  );
};

export default FastaFile;
