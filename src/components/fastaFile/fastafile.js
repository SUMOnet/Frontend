"use client"
import React, { useState } from "react";
import style from './protıd.css';
const Protid = ({click}) => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission logic here
  };

  return (
    <div className="form-container">
    <div className="form-wrapper">

      <div className="form-group">
        <label htmlFor="Lysine">Uniprot ID:</label>
        <input type="text" id="text" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Lysine:</label>
        <input type="text" id="text" />
      </div>
      <div className="form-group">
        <input type="submit" value="Predict SUMOylation" />
        <input type="submit" value="Load Sample" />
      </div>
    </div>
  </div>
  );
};

export default Protid;