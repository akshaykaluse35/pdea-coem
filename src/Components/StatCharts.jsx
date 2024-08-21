import React from 'react';
import AnimatedChart from './AnimatedChart';

const StatCharts = () => {
  const admissionData= [
    { year: '2019', count: 100 },
    { year: '2020', count: 200 },
    { year: '2021', count: 150 },
    { year: '2022', count: 300 },
    { year: '2023', count: 250 },
    { year: '2024', count: 400 },
  ];



  const chartData = {
    labels: admissionData.map(entry => entry.year),
    datasets: [
      {
        label: 'Admission Count',
        data: admissionData.map(entry => entry.count),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeOutCubic',
    },
  };

  return (
    <div className="statscharts">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Admission Count</h1>
      </header>
      <main className=" pt-20">
        <AnimatedChart data={chartData} options={options} />
      </main>
    </div>
  );
};

export default StatCharts;
