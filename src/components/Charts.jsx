import { Chart } from "chart.js/auto"
import { Line } from "react-chartjs-2"
import { useContext } from "react"
import { appContext } from "../context/appContext"

export const LastMeasurementsChart = ({reports}) => {

    // console.log(reports)
    let j = 0
    let dataSetLabels = []
    let dataSets = []
    let colors = [
        '#01bc85',
        '#e4421c',
        '#ffb700',
        '#e95cff',
    ]

    reports.forEach(item => {
        if(!dataSetLabels.includes(item.reportValueKindName)){
            dataSetLabels.push(item.reportValueKindName)
        }
    });

    dataSetLabels.forEach(item => {
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
            borderColor: colors[j]
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