import { useContext, useEffect } from "react"
import { appContext } from "../context/appContext"
import { getSubserverDevicePeripheral, getSubServerReports } from "../client/ClientePrueba"
import { useNavigate } from "react-router-dom"
import { LeftOutlined,DoubleRightOutlined, AppstoreAddOutlined } from '@ant-design/icons'
import { backButtonStyle } from '../AntDIconStyles'
import { Skeleton } from "antd"
import { searchReportValueKind, searchDevicePeripheralsModel } from '../functions/lists'

const IndividualDevice = () => {

    const {subServerDevices, currentDevice, setDevicePeripherals, devicePeripherals, subServerReports, devicePeripheralsModel, reportValueKind} = useContext(appContext)
    const navigate = useNavigate()
    let currentDeviceInfo = []



    useEffect(() => {
        getDevicePeripheral(currentDevice)
    }, [])


    async function getDevicePeripheral(currentDevice){
        let resDevicePeripherals = await getSubserverDevicePeripheral(currentDevice)
        console.log(resDevicePeripherals)
        let originalList = resDevicePeripherals.data.data
        let secondList
        originalList.forEach(item => {
            let i = 0
            if(secondList == undefined){
                secondList = [{
                    ...item,
                    devicePeripheralsModelName: searchDevicePeripheralsModel(devicePeripheralsModel, resDevicePeripherals.data.data[i].actionType),
                    reportValueKindName: searchReportValueKind(reportValueKind, resDevicePeripherals.data.data[i].reportValueKind)
                }]
            }else{
                secondList = [...secondList, {
                    ...item,
                    devicePeripheralsModelName: searchDevicePeripheralsModel(devicePeripheralsModel, resDevicePeripherals.data.data[i].actionType),
                    reportValueKindName: searchReportValueKind(reportValueKind, resDevicePeripherals.data.data[i].reportValueKind)
                }]
            }
            i = i+1 
        });
        setDevicePeripherals(secondList)
    }
    
    
    
    function getCurrentDevice(currentDevice){
        if (currentDevice === null) {
            console.log('No device selected')
        }else{
            const deviceIndex = subServerDevices.findIndex(device => device.id === currentDevice)
            if (deviceIndex !== -1) {
                currentDeviceInfo = subServerDevices[deviceIndex]
                console.log(currentDeviceInfo)
            } else {
                console.log('Device not found')
            }
        }
    }

    getCurrentDevice(currentDevice)
    console.log(subServerReports)
    console.log(devicePeripherals)
    
    

    return(
        <div className="individualDevice">
            <div className="upperBar">
                <div className="backButton"><LeftOutlined style={backButtonStyle} onClick={() => {navigate ('/subServer')}}/></div>
                <h1>Informacion del Dispositivo</h1>
            </div>

            <div className="Section12">
                <div className="Section1">
                    <p className="CardHeader">{currentDeviceInfo.name}</p>  
                    
                    <div className="CardContentHeader">
                        <p className="subTitle">{currentDeviceInfo.uniqueIdHexSHA512}</p>
                        
                        <div className="CardContent">
                            
                            <div className="List">
                                <div className="badge"></div>
                                <h4>LastHeartbeat: </h4>
                                <div className="Date">
                                    <p>{new Date(currentDeviceInfo.lastHeartbeat).getDate()}/{new Date(currentDeviceInfo.lastHeartbeat).getMonth()}/{new Date(currentDeviceInfo.lastHeartbeat).getFullYear()}</p>
                                    <p>{new Date(currentDeviceInfo.lastHeartbeat).getHours()}:{new Date(currentDeviceInfo.lastHeartbeat).getMinutes()}</p>
                                </div> 
                            </div>  
                            <div className="List">
                                <div className="badge"></div>
                                <h4>Notas:</h4>
                                <p>{currentDeviceInfo.notes}</p>
                            </div>
                            <div className="List">
                                <div className="badge"></div>
                                <h4>Hardware Type: </h4>
                                <p>{currentDeviceInfo.hardwareType}</p>
                            </div>
                            <div className="List">
                                <div className="badge"></div>
                                <h4>Hardware Architecture: </h4>
                                <p>{currentDeviceInfo.hardwareArchitecture}</p>
                            </div>
                            <div className="List">
                                <div className="badge"></div>
                                <h4>Hardware Features: </h4>
                                <p>{currentDeviceInfo.hardwareFeatures}</p>
                            </div>
                            <div className="List">
                                <div className="badge"></div>
                                <h4>Hardware Connection Type: </h4>
                                <p>{currentDeviceInfo.connectionType}</p>
                            </div>
                            <div className="List">
                                <div className="badge"></div>
                                <h4>Hardware Connection Slot: </h4>
                                <p>{currentDeviceInfo.connectionSlot}</p>
                            </div>
                            <div className="List">
                                <div className="badge"></div>
                                <h4>Assigned firmware: </h4>
                                <p>{currentDeviceInfo.assignedFirmwareId}</p>
                            </div>
                            <div className="List">
                                <div className="badge"></div>
                                <h4>Owner SubServer: </h4>
                                <p>{currentDeviceInfo.ownerSubServerId}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="Section2">

                </div>
            </div>

            <div className="Section3">
                <div className="BlockList">
                
                    <h2>Perifericos</h2>
                    {devicePeripherals == null ? (
                        <>
                            <Skeleton active/>
                            <Skeleton active/>
                        </>
                        ):(
                            <div className="List">
                                { devicePeripherals.map((item) => (
                                    <div key={item.id} className="ListItem">
                                        <div className="banner">
                                            <div className="subServerIcon"><AppstoreAddOutlined style={{color:'#e95cff', fontSize:'45px'}}/></div>
                                            <div><DoubleRightOutlined rotate={315}/></div>
                                        </div>
                                        <div className='Info'>
                                            <h3>{item.name}</h3>
                                            <h4>{item.devicePeripheralsModelName}</h4>
                                            <h5>{item.reportValueKindName}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                </div>
            </div>

            <div className="Section4">
                <div className="Reports">
                    <h2>Reportes</h2>
                    <div className="List">
                        <div className="info">
                            <h4>ValueKind</h4>
                            <h4>Valor</h4>
                            <h4>Periferico</h4>
                            <h4>Sub servidor</h4>
                            <h4>Fecha</h4>
                        </div>
                        { subServerReports.map((item) => (
                            <div key={item.id} className="ListItem">
                                <div className="badge"></div>
                                <div className="info">
                                    <div className="Portion">
                                        <h4>{item.deviceIndex}</h4>
                                    </div>
                                    <div className="Portion">
                                        <h4>{parseFloat(item.value).toFixed(2)}</h4>
                                    </div>
                                    <div className="Portion">
                                        <h4>{item.devicePeripheral.name}</h4>
                                    </div>
                                    <div className="Portion">
                                        <h4>{item.subServerId}</h4>
                                    </div>
                                    <div className="dateTime">
                                        <h4 className="date">{new Date(item.dateRecorded).getDate()}/{new Date(item.dateRecorded).getMonth() + 1}/{new Date(item.dateRecorded).getFullYear()}</h4>
                                        <h4 className="time">{new Date(item.dateRecorded).getHours()}:{new Date(item.dateRecorded).getMinutes()}</h4>
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        
        </div>
    )
}

export default IndividualDevice