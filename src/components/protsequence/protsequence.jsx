// FormB.jsx
import React, { useState } from "react";
import Results from "@/components/results/results";
import style from './protsequence.css'; 

const ProtSequence = ({ click }) => {
  const [proteinSequence, setProteinSequence] = useState("");

  const handleLoadSample = () => {
    setProteinSequence(">sp|O00566|MPP10_HUMAN U3 small nucleolar ribonucleoprotein protein MPP10 OS=Homo sapiens OX=9606 GN=MPHOSPH10 PE=1 SV=2 MAPQVWRRRTLERCLTEVGKATGRPECFLTIQEGLASKFTSLTKVLYDFNKILENGRIHGSPLQKLVIENFDDEQIWQQLELQNEPILQYFQNAVSETINDEDISLLPESEEQEREEDGSEIEADDKEDLEDLEEEEVSDMGNDDPEMGERAENSSKSDLRKSPVFSDEDSDLDFDISKLEQQSKVQNKGQGKPREKSIVDDKFFKLSEMEAYLENIEKEEERKDDNDEEEEDIDFFEDIDSDEDEGGLFGSKKLKSGKSSRNLKYKDFFDPVESDEDITNVHDDELDSNKEDDEIAEEEAEELSISETDEDDDLQENEDNKQHKESLKRVTFALPDDAETEDTGVLNVKKNSDEVKSSFEKRQEKMNEKIASLEKELLEKKPWQLQGEVTAQKRPENSLLEETLHFDHAVRMAPVITEETTLQLEDIIKQRIRDQAWDDVVRKEKPKEDAYEYKKRLTLDHEKSKLSLAEIYEQEYIKLNQQKTAEEENPEHVEIQKMMDSLFLKLDALSNFHFIPKPPVPEIKVVSNLPAITMEEVAPVSVSDAALLAPEEIKEKNKAGDIKTAAEKTATDKKRERRKKKYQKRMKIKEKEKRRKLLEKSSVDQAGKYSKTVASEKLKQLTKTGKASFIKDEGKDKALKSSQAFFSKLQDQVKMQINDAKKTEKKKKKRQDISVHKLKL");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for handling the submitted protein sequence
    // You may want to perform predictions or other actions here
  };
  const mockProtsequenceData = {"predictions":[
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
  ]};
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-group headers">
          <h3>Enter Protein Sequence!</h3>
          <p>Please enter a valid protein sequence to test.</p>
        </div>
        <div className="form-group">
          <label htmlFor="proteinSequence">Protein Sequence:</label>
          <textarea
            id="proteinSequence"
            value={proteinSequence}
            onChange={(e) => setProteinSequence(e.target.value)}
          />
        </div>
        <div className="buttons">
          <input
            type="submit"
            value="Predict SUMOylation"
            onClick={handleSubmit}
          />
          <input type="submit" value="Load Sample" onClick={handleLoadSample} />
        </div>
      </div>
      {<Results data={mockProtsequenceData} />}
    </div>
  );
};

export default ProtSequence;
