import { appContext } from './appContext'
import { useState } from 'react'
import { mainServerClient } from '../client/client'

const AppContextProvider = ({children}) => {

    // const client = new mainServerClient(loginData, serverUrl, httpErrorHandler)
    const [logged, setLogged] = useState(false)
    const [userData, setUserData] = useState(null)
    const [subServers, setSubServers] = useState(null)
    const [notifications, setNotifications] = useState(null)
    const [subServerReports, setSubServerReports] = useState(null)
    const [currentSubServer, setCurrentSubServer] = useState(null)
    const [subServerDevices, setSubServerDevices] = useState(null)
    const [currentDevice, setCurrentDevice] = useState(null)
    const [devicePeripherals, setDevicePeripherals] = useState(null)
    const [currentPeripheral, setCurrentPeripheral] = useState(null)
    const [devicePeripheralsModel, setDevicePeripheralsModel] = useState(null)
    const [reportValueKind, setReportValueKind] = useState([
        'WaterPh',
        'AirHumidity',
        'DissolvedOxygen',
        'Ammonia',
        'WaterFlowLiterPerMinute',
        'WaterLevelPercent',
        'WaterLevelLiters',
        'BiomassKilograms',
        'TemperatureKelvin'
    ])
    const [subServerReactor, setSubServerReactor] = useState(null)
    const [allUsers, setAllUsers] = useState(null)
    const [selectedUser, setSelectedUser] = useState(null)

    return(
        <appContext.Provider value={{
            // mainServerClient
            logged,
            setLogged,
            userData,
            setUserData,
            subServers,
            setSubServers,
            notifications,
            setNotifications,
            subServerReports,
            setSubServerReports,
            currentSubServer,
            setCurrentSubServer,
            subServerDevices,
            setSubServerDevices,
            currentDevice,
            setCurrentDevice,
            devicePeripherals,
            setDevicePeripherals,
            currentPeripheral,
            setCurrentPeripheral,
            devicePeripheralsModel,
            setDevicePeripheralsModel,
            reportValueKind,
            subServerReactor,
            setSubServerReactor,
            allUsers,
            setAllUsers,
            selectedUser,
            setSelectedUser
        }}>
            {children}
        </appContext.Provider>
    )

}

export default AppContextProvider