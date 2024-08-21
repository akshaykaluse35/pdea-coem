import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const AnimatedChart = ({ data, options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current?.chartInstance;

    if (chartInstance) {
      const { datasets } = chartInstance.data;

      datasets.forEach((dataset) => {
        dataset.data = new Array(dataset.data.length).fill(0);
      });

      chartInstance.update();

      setTimeout(() => {
        datasets.forEach((dataset, datasetIndex) => {
          dataset.data = data.datasets[datasetIndex].data;
        });

        chartInstance.update();
      }, 500);
    }
  }, [data]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default AnimatedChart;
