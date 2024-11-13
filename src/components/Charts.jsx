import { Chart } from "chart.js/auto"
import { Line, Bar } from "react-chartjs-2"
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

export const SubServerResumeChart = ({info}) => {
    const { subServerReports } = useContext(appContext)
    console.log(info)
    console.log(subServerReports.filter(item => item.subServerId == info.id))
    console.log(subServerReports)

    let labels = []
    let list = []
    let values = []
    let currentDeviceIndex
    let reports = subServerReports.filter(item => item.subServerId == info.id)
    if (reports.length > 0) {
        reports.sort((a, b) => new Date(b.dateRecorded) - new Date(a.dateRecorded))
    }
        reports.forEach(item => {
        currentDeviceIndex = item.deviceIndex
        let res = searchPeripheral(allPeripherals, currentDeviceIndex)
        // console.log(res)
        list.push({
            ...item,
            reportValueKindName: searchReportValueKind(reportValueKind, res.reportValueKind),
            peripheralName: res.name,
            deviceName: searchDevice(subServerDevices, item.deviceId).name
        })
        // console.log(item)
    });
    list.forEach(item => {
        if(!labels.includes(item.reportValueKindName)){
            labels.push(item.reportValueKindName)
        }
    })
    labels.forEach(item => {
        let current = list.find(report => report.reportValueKindName == item)
        console.log(`${item}: ${current.value}`)
        values.push(current.value)
    })

    return(
        // <Bar />
        <h1>{info.name}</h1>
    )
}