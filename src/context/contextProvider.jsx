import { appContext } from './appContext'
import { useState } from 'react'
import { mainServerClient } from '../client/client'
import { message } from 'antd'

const AppContextProvider = ({children}) => {

    const [messageApi, contextHolder] = message.useMessage()
    // const client = new mainServerClient(loginData, serverUrl, httpErrorHandler)
    const [logged, setLogged] = useState(false)
    const [userData, setUserData] = useState(null)
    const [subServers, setSubServers] = useState(null)
    const [notifications, setNotifications] = useState(null)
    const [subServerReports, setSubServerReports] = useState(null)
    const [currentSubServer, setCurrentSubServer] = useState(null)
    const [subServerDevices, setSubServerDevices] = useState([])
    const [currentDevice, setCurrentDevice] = useState(null)
    const [devicePeripherals, setDevicePeripherals] = useState([])
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
    const [allPeripherals, setAllPeripherals] = useState([])
    const [fieldTypeList, setFieldTypeList] = useState([
        'Pin identifier',
        'Interrupt type',
        'Seconds delay',
        'Boolean'
    ])
    const [interruptTypeList, setinterruptTypeList] = useState([
        'Rising',
        'Falling',
        'High',
        'Low'
    ])
    const [notificationCategoryList] = useState([
        'None',
        'SubServer',
        'SubServerReactors',
        'SubServerSessions',
        'Devices',
        'DeviceSession'
    ])
    const [notificationTypeList] = useState([
        'newEntity',
        'conflict',
        'Approved',
        'Rejected',
        'ConfigurationError'
    ])
    const [notificationContentFormatlist] = useState([
        'NoContent',
        'json'
    ])
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
            setSelectedUser,
            allPeripherals,
            setAllPeripherals,
            fieldTypeList,
            interruptTypeList,
            notificationCategoryList,
            messageApi,
            contextHolder
        }}>
            {children}
        </appContext.Provider>
    )

}

export default AppContextProvider