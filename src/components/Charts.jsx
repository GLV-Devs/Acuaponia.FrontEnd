import { Chart } from "chart.js/auto"
import { Line } from "react-chartjs-2"
import { useContext } from "react"
import { appContext } from "../context/appContext"

export const LastMeasurementsChart = ({reports}) => {

    console.log(reports)
    let labels = []
    reports.forEach(item => {
        
    });

    return(
        <Line
            data={{
                labels: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12', '13', '14', '15', '16','17', '18', '19', '20', ],
                datasets: [{
                    label: 'waterPh',
                    data: [40, 20, 30, 55, 28, 35, 48, 25, 60, 42, 40],
                    fill: true,
                    tension: 0.4,
                    borderColor: 'rgb(75, 192, 192)'
                }]
            }}
        />
    )
}