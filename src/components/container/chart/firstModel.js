import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const label = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

const data = {
    labels: label,
    datasets: [
        {
            label: 'My Balance',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(53, 162, 235, 0.3)',
            borderColor: '#38B2AC',
            borderCapStyle: 'butt',
            borderDashOffset: 0.0,
            pointBackgroundColor: 'rgb(38,90,136)',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgb(38,90,136)',
            pointHoverBorderColor: 'rgb(38,90,136)',
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 10,
            data: label.map((x) => Math.random(1)),
        },
    ],
};

const options = {
    maintainAspectRatio: true,

    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            grid: {
                borderDash: [3, 3],
            },
            // beginAtZero: true, // this works
        },
    },
    plugins: {
        legend: {
            display: false,
        },
    },
};

const FirstModel = () => <Line data={data} options={options} />;

export default FirstModel;
