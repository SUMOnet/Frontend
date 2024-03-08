import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const UniProtChart = ({ predictionsData  }) => {
  const { predictions } = predictionsData;
  const data = {
    datasets: predictions.map(prediction => ({
      label: `${prediction.protein_id} - ${prediction.lysine_position}`,
      data: [{
        x: prediction.sumoylation_class_probs,
        y: prediction.nonsumoylation_class_probs, // Use a random Y value for illustrative purposes
      }],
      backgroundColor: prediction.predicted_label === 'SUMOylated' ? 'green' : 'red',
      radius:8,
      hoverRadius:12,
      
    })),
  };

  const options = {
  
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        min: 0,
        max: 1,
        title: {
          display: true,
          text: 'Probability of being SUMOylated'
        }
      },
      y: {
        min: 0,
        max: 1,
        title: {
          display: true,
          text: 'Probability of being Non-SUMOylated'
        }
      },

    },
    plugins: {
      legend: {
        position: top,
        display: false,
      }

    }
  };

  return <Scatter  data={data} options={options} />;
};

export default UniProtChart;
