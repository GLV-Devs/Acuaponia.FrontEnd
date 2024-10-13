import { useContext, useEffect } from "react"
import { appContext } from "../context/appContext"
import { getSubserverDevicePeripheral } from "../client/ClientePrueba"
import { useNavigate } from "react-router-dom"
import { LeftOutlined } from '@ant-design/icons'
import { backButtonStyle } from '../AntDIconStyles'

const IndividualDevice = () => {

    const {subServerDevices, currentDevice, setDevicePeripherals, devicePeripherals} = useContext(appContext)
    const navigate = useNavigate()
    let currentDeviceInfo = []



    useEffect(() => {
        getDevicePeripheral(currentDevice)
    }, [])

    async function getDevicePeripheral(currentDevice){
        let resDevicePeripherals = await getSubserverDevicePeripheral(currentDevice)
        setDevicePeripherals(resDevicePeripherals.data.data)
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
    console.log(devicePeripherals)

    return(
        <div className="individualDevice">
            <div className="upperBar">
                <div className="backButton"><LeftOutlined style={backButtonStyle} onClick={() => {navigate ('/subServer')}}/></div>
                <h1>Informacion del Dispositivo</h1>
            </div>

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
    )
}

export default IndividualDevice