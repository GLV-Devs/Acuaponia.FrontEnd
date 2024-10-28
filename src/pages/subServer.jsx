import { LeftOutlined, LaptopOutlined, MobileOutlined } from "@ant-design/icons"
import { useContext, useState, useEffect } from 'react'
import { appContext } from '../context/appContext'
import { Skeleton, Input } from 'antd'
import { getSubServerInfo, getSubServerDevices, getSubServerReactors, getAllPeripherals } from '../client/ClientePrueba'
import DispPanel from '../components/DispPanel'
import ReactPanel from '../components/ReactPanel'
import { useNavigate } from "react-router-dom"
import { backButtonStyle } from '../AntDIconStyles'
import { searchReportValueKind, searchPeripheral, searchDevice } from "../functions/lists"

const SubServer = () => {

    const {
        currentSubServer,
        subServerReports,
        setSubServerReports,
        setSubServerDevices,
        subServerDevices,
        setSubServerReactor,
        subServerReactor,
        allPeripherals,
        setAllPeripherals,
        reportValueKind
    } = useContext(appContext)

    const [info, setInfo] = useState(null)
    const [dispPanelOpen, setDispPanelOpen] = useState(false)
    const [reactPanelOpen, setReactPanelOpen] = useState(false)
    const [showList, setShowList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        requestInformation()
    }, [])

    const openDispPanel = () => {
        setDispPanelOpen(!dispPanelOpen)
        setReactPanelOpen(false)
    }

    const openReactPanel = () => {
        setReactPanelOpen(!reactPanelOpen)
        setDispPanelOpen(false)
    }

    async function requestInformation() {
        const querys = [
            getSubServerInfo(currentSubServer),
            getSubServerDevices(currentSubServer),
            getAllPeripherals(currentSubServer)
        ]
        try{
            let [resInfo, resDevices, resPeripherals] = await Promise.all(querys)
            setInfo(resInfo.data.data[0])
            setSubServerDevices(resDevices.data.data)
            setAllPeripherals(resPeripherals.data.data)
            buildReportList()

        }catch(err){
            console.log(err)
        }
    }      

    function buildReportList(){
        let list = []
        let currentDeviceIndex
        subServerReports.forEach(item => {
            currentDeviceIndex = item.deviceIndex
            let res = searchPeripheral(allPeripherals, currentDeviceIndex)
            // console.log(item)
            // console.log(searchDevice(subServerDevices, item.deviceId))
            // console.log(searchReportValueKind(reportValueKind, res.reportValueKind))
            list.push({
                ...item,
                reportValueKindName: searchReportValueKind(reportValueKind, res.reportValueKind),
                peripheralName: res.name,
                deviceName: searchDevice(subServerDevices, item.deviceId).name
            })
            // console.log(item)
        });
        setShowList(list)
        setSubServerReports(list)
    }

    return(
        <div className="SubServer">
            { info == null ? (
                <>
                    <Skeleton active/>
                    <Skeleton active/>
                    <Skeleton active/>
                </>
            ):(
                <>
                    <div className="section1">
                        <div className='bar'>
                        <LeftOutlined style={backButtonStyle} onClick={() => {navigate (-1)}}/>
                            <h1>{info.name}</h1>
                        </div>
                        <div className="Buttons">
                            <div className="Button1" onClick={openDispPanel}>
                                <h1>Dispositivos</h1>
                                <MobileOutlined style={{color: '#e95cff', fontSize: '65px'}}/>
                            </div>
                            <div className="Button2">
                                <h2>Sesion del sub servidor</h2>
                            </div>
                            <div className="Button3" onClick={openReactPanel}>
                                <LaptopOutlined style={{color: '#ffb700', fontSize: '65px'}}/>
                                <h1>Reactores</h1>
                            </div>
                        </div>
                    </div>

                    <div className="section2">
                        {/* Inserte codigo de un grafico aqui */}
                        <div>
                            {/* Inserte codigo de un grafico aqui otra vez, pero de otro grafico */}
                            
                        </div>
                    </div>

                    <div className='section3'>

                    </div>

                    <div className="section4">
                        <div className='bar'>
                            <h1>Reportes</h1>
                            <Input variant="filled" placeholder='Buscar...'/>
                        </div>
                        <div className='reportsContainer'>
                            <div className="info">
                                <h4>Fecha</h4>
                                <h4>Hora</h4>
                                <h4>Dispositivo</h4>
                                <h4>Periferico</h4>
                                <h4>Tipo</h4>
                                <h4>Valor</h4>
                            </div>
                            { showList.map((item) => (
                                <div className='reportItem' key={item.id}>
                                    <div className='badge'></div>
                                    <h3>{new Date(item.dateRecorded).getDate()}/{new Date(item.dateRecorded).getMonth()}/{new Date(item.dateRecorded).getFullYear()}</h3>
                                    <h3>{new Date(item.dateRecorded).getHours()}:{new Date(item.dateRecorded).getMinutes()}</h3>
                                    <h3>{item.deviceName}</h3>
                                    <h3>{item.peripheralName}</h3>
                                    <h3>{item.reportValueKindName}</h3>
                                    <h3>{parseFloat(item.value).toFixed(2)}</h3>
                                </div>
                            )) }
                        </div>
                    </div>

                    { dispPanelOpen && <DispPanel close={() => setDispPanelOpen(false)}/> }
                    { reactPanelOpen && <ReactPanel close={() => setReactPanelOpen(false)}/> }      
                </>
            )}
        </div>
    )
}

export default SubServer