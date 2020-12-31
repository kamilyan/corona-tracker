import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, deaths, recovered } }) => {
    const doughnutChart = (
        confirmed
            ? (
                <Doughnut
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            backgroundColor: ['rgba(255, 0, 0,0.6)',
                                'rgba(0,255,0,0.6)',
                                'rgba(128, 0, 128,0.6)'],
                            borderColor: ['rgba(255,0,0, 1)',
                                'rgba(0,255,0, 1)',
                                'rgba(128,0,128, 1)'],
                            borderWidth: 2,
                            data: [confirmed.value, recovered.value, deaths.value]
                        }],
                    }}
                />
            ) : null
    )

    return (
        <div className={styles.container}>
            { doughnutChart}
        </div>
    )
}

export default Chart;