import React from 'react';
import {Line} from 'react-chartjs-2';



const ChartComponent = (props) => {

    const data = {
        labels: [0].concat(Object.keys(props.dataset)),
        datasets: [
          {
            label: 'Graficos de Gastos por ' + props.label,
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(54,64,81,0.4)',
            borderColor: 'rgba(54,64,81,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(54,64,81,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 5,
            pointHoverRadius: 7,
            pointHoverBackgroundColor: 'rgba(54,64,81,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0].concat(Object.values(props.dataset))
          }
        ]
      };

    return (
    <div className="chart">
        <Line data={data}
        />
    </div>
    );
    }

 


export default ChartComponent;