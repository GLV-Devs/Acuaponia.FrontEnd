import { Chart } from "chart.js/auto"
import { Line } from "react-chartjs-2"
import { useContext } from "react"
import { appContext } from "../context/appContext"

export const LastMeasurementsChart = ({reports}) => {

    // console.log(reports)
    let dataSetLabels = []
    let dataSets = []
    let colors = [
        '#e4421c',
        '#ffb700',
        '#e95cff',
        '#01bc85',
    ]

    reports.forEach(item => {
        if(!dataSetLabels.includes(item.reportValueKindName)){
            dataSetLabels.push(item.reportValueKindName)
        }
    });

    dataSetLabels.forEach(item => {
        let j = 0
        let currentColor = colors[j]
        if(j == 3){
            j = 0
        }else{
            j++
        }

        let filtered = reports.filter(report => report.reportValueKindName == item)
        let values = []
        for(let i=0 ; i < 20 ; i++){
            if(filtered[i] != undefined){
                values.push(filtered[i].value)
            }else{
                values.push(NaN)
            }
        }
        const currentDataSet = {
            label: item,
            data: values,
            fill: true,
            tension: 0.4,
            borderColor: currentColor
        }
        dataSets.push(currentDataSet)
    })

    return(
        <Line
            data={{
                labels: ['', '', '', '', '', '','', '', '', '', '', '', '', '', '', '','', '', '', '', ],
                datasets: dataSets
            }}
        />
    )
}