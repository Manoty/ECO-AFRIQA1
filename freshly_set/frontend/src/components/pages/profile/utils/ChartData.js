// Static data for the chart
  const ChartData = {
    labels: ['','Jan', 'Feb', 'Mar', 'Apr', 'May', ''],
    datasets: [
      {
        label: 'Sales Data',
        data: [ null,10, 34, 50, 50, 38, 60,null],
        fill: false,
        pointRadius: 0,
        borderColor: '#008000',
        tension: 0,
        borderWidth: 4, 
      }
    ]
  };

export default ChartData