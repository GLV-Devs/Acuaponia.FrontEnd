import { LeftOutlined, LaptopOutlined, MobileOutlined } from "@ant-design/icons"
import { useContext, useState, useEffect } from 'react'
import { appContext } from '../context/appContext'
import { Skeleton, Input } from 'antd'
import { getSubServerInfo, getSubServerDevices } from '../client/ClientePrueba'
import DispPanel from '../components/DispPanel'
import ReactPanel from '../components/ReactPanel'


const SubServer = () => {

    const {currentSubServer, subServerReports, setSubServerDevices} = useContext(appContext)
    const [info, setInfo] = useState(null)
    const [reports, setReports] = useState([])
    const [dispPanelOpen, setDispPanelOpen] = useState(false)
    const [reactPanelOpen, setReactPanelOpen] = useState(false)

    

    useEffect(() => {
        getInfo(currentSubServer)
        getDevices(currentSubServer)
    }, [])

    async function getInfo(id){
        let resInfo = await getSubServerInfo(id)
        console.log(resInfo.data.data[0])
        setInfo(resInfo.data.data[0])
    }        
    
    const openDispPanel = () => {
        setDispPanelOpen(!dispPanelOpen)
        setReactPanelOpen(false)
    }

    const openReactPanel = () => {
        setReactPanelOpen(!reactPanelOpen)
        setDispPanelOpen(false)
    }

    async function getDevices(id){
        let resDevices = await getSubServerDevices(id)
        console.log(resDevices)
        setSubServerDevices(resDevices.data.data)
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
                            <LeftOutlined style={{color: '#01bc85', fontSize: '40px'}}/>
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
                            { subServerReports.map((item) => (
                                <div className='reportItem' key={item.id}>
                                    <div className='badge'></div>
                                    <h3>{item.deviceId}</h3>
                                    <h3>{new Date(item.dateRecorded).getDate()}/{new Date(item.dateRecorded).getMonth()}/{new Date(item.dateRecorded).getFullYear()}</h3>
                                    <h3>{new Date(item.dateRecorded).getHours()}:{new Date(item.dateRecorded).getMinutes()}</h3>
                                    <h3>Device: {item.deviceIndex}</h3>
                                    <h3>Value: {item.value}</h3>
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