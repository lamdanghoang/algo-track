import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
)


ChartJS.defaults.font.size = 16;
ChartJS.defaults.plugins.legend.position = 'right';
ChartJS.defaults.color = '#fff';


export const options = {
    plugins: {
        title: {
            display: false,
            text: 'Chart.js Bar Chart - Stacked',
        },
    },
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
    scales: {
        x: {
            stacked: true,
            border: {
                color: "#fff"
            },

        },
        y: {
            stacked: true,
            border: {
                color: "#fff"
            },

        },
    },
    legend: {
        padding: {
            bot: 50
        }
    }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [100, 120, 120, 120, 120, 120],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            stack: 'Stack 0',
            borderRadius: Number.MAX_VALUE,
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            borderSkipped: false,
        },
        {
            label: 'Dataset 3',
            data: [100, 120, 120, 120, 120, 120],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            stack: 'Stack 1',
            borderRadius: 5,
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 2,
            borderSkipped: false,
        },
    ],
};

export default function BarChart() {
    return (
        <div className=' p-4 rounded-b-lg'>
            <Bar options={options} data={data} />
        </div>
    );
}