"use client"
import React, { useState } from "react";
import axios from "axios";
import style from "./protıd.css";
import Results from "@/components/results/results";
import UniProtChart from "../charts/UniProtChart";

const Protid = ({ click }) => {
  const sampleData = {
    uniprotID: "P12345",
    lysine: "K200",
  };
  const [uniProtID, setUniProtID] = useState("");
  const [lysine, setLysine] = useState("");
  const [predictionsData, setPredictionsData] = useState(null); // State to store predictions

  const handleLoadSample = () => {
    setUniProtID(sampleData.uniprotID);
    setLysine(sampleData.lysine);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (typeof uniProtID !== 'string' || isNaN(parseInt(lysine))) {
      console.error('Invalid input. Please enter a valid UniprotID and lysine position.');
      return;
    }
    const lysinePosition = parseInt(lysine);
  
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/uniprot-prediction/",
        {
          uniprot_id: uniProtID,
          lysine_position: lysinePosition,
        }
      );

      const predictions = response.data;
      setPredictionsData(predictions);
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
      // Handle errors, e.g., display an error message to the user
    }
  };

  const mockPredictionsData = {"predictions":[
    {
      protein_id: "P12345",
      lysine_position: "K200",
      nonsumoylation_class_probs: 0.75,
      sumoylation_class_probs: 0.25,
      predicted_label: "Non-SUMOylated"
    },
    {
      protein_id: "P12345",
      lysine_position: "K250",
      nonsumoylation_class_probs: 0.40,
      sumoylation_class_probs: 0.60,
      predicted_label: "SUMOylated"
    },
    {
      protein_id: "P67890",
      lysine_position: "K100",
      nonsumoylation_class_probs: 0.85,
      sumoylation_class_probs: 0.15,
      predicted_label: "Non-SUMOylated"
    },
    // ... more mock prediction objects
  ]};
  

  
  return (
    <div className="form-container">
    <div className="form-wrapper">
      <div className="form-group headers">
        <h3> Enter UniprotID!</h3>
        <p>Please enter a valid UniprotID and/or a specific Lysine position. If a Lysine position is provided, the model will predict the SUMOylation status of that position. Otherwise, SUMOnet will be provide predictions for all Lysine positions in the sequence.</p>

      </div>
      <div className="form-group">
        <label htmlFor="Lysine">Uniprot ID:</label>
        <input
      type="text"
      id="text"
       value={uniProtID}
      onChange={(e) => setUniProtID(e.target.value)}
/>

      </div>
      <div className="form-group">
        <label htmlFor="message">Lysine:</label>
        <input type="text" id="text" value={lysine} onChange={(e)=> setLysine(e.target.value)} />
      </div>
      <div className="buttons">
        <input type="submit" value="Predict SUMOylation"  onClick={handleSubmit} />
        <input type="submit" value="Load Sample" onClick={handleLoadSample}/>

      </div>
    </div>
    <Results data={predictionsData}/>
    <UniProtChart predictionsData ={predictionsData}/>
  </div>
  
  );
};

export default Protid;