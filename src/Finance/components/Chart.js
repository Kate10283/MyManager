import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './Chart.css'

export const Chart = () => {
    const pieChartData = {
        labels: ["October", "November", "December"],
        datasets: [{
            data: [1, 10, 2],
            label: "Infected People",
            backgroundColor: ["#2FDE00", "#00A6B4", "#ff6600"],
            hoverBackgroundColor: ["#175000", "#003350", "#993d00"]
        }],
        legend: 'sddff'
    };

    return (
        <div className='chart'>
            <Pie
                type="pie"
                style={{ width: '100px', height: '100px' }}
                options={{
                    title: {
                        display: true,
                        text: "COVID-19 Cases of Last 3 Months",
                        fontSize: 15
                    },
                    legend: {
                        display: true, //Is the legend shown?
                        position: "top" //Position of the legend.
                    }
                }}
                data={pieChartData}
            />
        </div>
    );
}