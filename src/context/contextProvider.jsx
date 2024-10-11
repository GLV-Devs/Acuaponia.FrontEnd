import { appContext } from './appContext'
import { useState } from 'react'
import { mainServerClient } from '../client/client'

const AppContextProvider = ({children}) => {

    // const client = new mainServerClient(loginData, serverUrl, httpErrorHandler)
    const [logged, setLogged] = useState(false)
    const [userData, setUserData] = useState({})
    const [subServers, setSubServers] = useState([])
    const [notifications, setNotifications] = useState([])

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
        }}>
            {children}
        </appContext.Provider>
    )

}

export default AppContextProvider