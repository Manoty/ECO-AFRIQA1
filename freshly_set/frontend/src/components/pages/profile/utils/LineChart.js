// LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import ChartData from './ChartData';
import ChartOptions from './ChartOptions';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  
  return (
    <div className='w-[100%] h-[350px] '>
      <Line data={ChartData} options={ChartOptions} />
    </div>
  );
};

export default LineChart;
