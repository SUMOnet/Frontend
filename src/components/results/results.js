import React from 'react'
import style from './results.css'
function Results({data}) {
    if (!data.predictions || data.predictions.length === 0) {
        return <p>No predictions available.</p>;
    }
  return (

    <div className="predictions-table">
        <table>
            <thead>
            <tr>
                <th>Protein ID</th>
                <th>Lysine Position</th>
                <th>Non-SUMOylation Probability</th>
                <th>SUMOylation Probability</th>
                <th>Predicted Label</th>
            </tr>
            </thead>
            <tbody>
            {data.predictions.map((prediction, index) => (
                <tr key={index}>
                <td>{prediction.protein_id}</td>
                <td>{prediction.lysine_position}</td>
                <td>{prediction.nonsumoylation_class_probs.toFixed(2)}</td>
                <td>{prediction.sumoylation_class_probs.toFixed(2)}</td>
                <td>{prediction.predicted_label}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
          
  );
}

export default Results