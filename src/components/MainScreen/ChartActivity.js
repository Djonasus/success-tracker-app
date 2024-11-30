import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import React from 'react';
import { faker } from '@faker-js/faker';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Активность записей',
      },
    },
  };

const labels = ['Янв', 'Фев', 'Мрт', 'Апр', 'Май', 'Инь', 'Иль', 'Авг', "Сен", "Окт", "Нрь"]
export const data = {
    labels,
    datasets: [
        {
            label: 'Активность',
            data: labels.map(() => faker.number.int({ min: 0, max: 31 })),
        }
    ]
}

const ChartActivity = () => {
    return (
        <div style={{marginBlockStart:"40px"}}>
            <h1>Ваша активность</h1>
            <Bar options={options} data={data} />
            <p style={{textAlign:"center"}}>Продолжайте в том же духе!</p>
        </div>
    )
}

export default ChartActivity