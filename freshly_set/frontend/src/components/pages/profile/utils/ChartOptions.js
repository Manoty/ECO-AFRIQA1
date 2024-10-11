import { layouts } from "chart.js";

const ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,  // Allows chart to adapt to the container's height
  plugins: {
    legend: {
      display: false,
      position: 'top'
    },
    title: {
      display: false,
      text: 'User Performance'
    }
    },
    layouts:{
        padding: {
            left: 20,  
      }
  },
  scales: {
    x: {
      title: {
        display: false,
        text: 'Months',
        color: '#008000',
            font: {
                family: 'Inter',
                size: 15,
                weight: 'bold'
            
            },
        },
          ticks: {
            display: true,
            maxTicksLimit: 100,
            font: {
                family: 'Inter',
                size: 15,
                weight: 800,
                color: '#00000099',
            }
        },
       
      grid: {
        display: true,
        drawOnChartArea: true,
        color: 'rgba(200, 200, 200, 0.5)',  // Grid line color (semi-transparent grey)
        lineWidth: 1,  // Width of grid lines
        drawTicks: true,  // Show ticks along with grid lines
        borderDash: [5, 5],  // Dashed grid lines [line length, gap length]
          },
          border: {
              color: 'black',
              width: 3
            },
          min: -10, //x-axis should begin at zero
        position: 'bottom'
        
    },
    y: {
      title: {
        display: true,
        text: 'Produce Sales',
        color: '#008000',
            font: {
                family: 'Inter',
                size: 18,
                weight: 'bold'
            
        }
        },
        ticks: {
            display: false,
            maxTicksLimit: 100,
            font: {
                family: 'Inter',
                size: 15,
                weight: 800,
                color: '#00000099',
            }
        },
      grid: {
        display: true,
        drawOnChartArea: true,
        color: 'rgba(200, 200, 200, 0.5)',  // Grid line color
        lineWidth: 1,  // Width of grid lines
        drawTicks: true,  // Show ticks along with grid lines
        borderDash: [5, 5],  // Dashed grid lines
        },
      border: {
              color: 'black',
              width: 3
        },
       min: 0, //x-axis should begin at zero
        position: 'bottom'
        
    }
  }
};

export default ChartOptions;
