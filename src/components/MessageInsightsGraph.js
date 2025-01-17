import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const MessageInsightsGraph = () => {
    // Data for the graph
    const data = {
        labels: ["u", "loved", "like", "haha", "good", "😭", "💤", "☀", "😌"],
        datasets: [
            {
                label: "Frequency Count",
                data: [2002, 1916, 1286, 1267, 1245, 383, 282, 231, 230], // Top words/emoji counts
                backgroundColor: "#aa7dfc",
                borderColor: "#D6CFF7",
                borderWidth: 1,
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    color: "white",
                },
            },
            tooltip: {
                enabled: true,
                titleColor: "white",
                bodyColor: "white"
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    color: "white",
                },
                title: {
                    display: true,
                    text: "Words and Emojis",
                    color: "white",
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 500,
                    color: "white",
                },
                title: {
                    display: true,
                    text: "Frequency",
                    color: "white",
                },
            },
        },
    };

    return (
        <div style={{ margin: "20px", padding: "20px", backgroundColor: "#282c34", borderRadius: "10px" }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default MessageInsightsGraph;