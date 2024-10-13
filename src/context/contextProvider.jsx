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
        }}>
            {children}
        </appContext.Provider>
    )

}

export default AppContextProvider