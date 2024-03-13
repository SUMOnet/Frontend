import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const UniProtChart = ({ predictionsData }) => {
  if (!predictionsData || !predictionsData.data || !Array.isArray(predictionsData.data)) {
    return <p>No valid predictions data available for the chart.</p>;
  }

  const { data } = predictionsData;

  if (data.length === 0) {
    return <p>No predictions available for the chart.</p>;
  }

  const datasets = data.map(prediction => ({
    label: `${prediction.protein_id} - ${prediction.lysine_position}`,
    data: [{
      x: prediction.sumoylation_class_probs,
      y: prediction.nonsumoylation_class_probs,
    }],
    backgroundColor: prediction.predicted_labels === 1 ? 'green' : 'red',
    radius: 8,
    hoverRadius: 12,
  }));

  const chartData = { datasets };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        min: 0,
        max: 1,
        title: {
          display: true,
          text: 'Probability of being SUMOylated',
        },
      },
      y: {
        min: 0,
        max: 1,
        title: {
          display: true,
          text: 'Probability of being Non-SUMOylated',
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
    },
  };

  return <Scatter data={chartData} options={options} />;
};

export default UniProtChart;
