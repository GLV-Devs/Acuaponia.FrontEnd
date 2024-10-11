import { appContext } from './appContext'
import { useState } from 'react'
import { mainServerClient } from '../client/client'

const AppContextProvider = ({children}) => {

    // const client = new mainServerClient(loginData, serverUrl, httpErrorHandler)
    const [logged, setLogged] = useState(false)
    const [userData, setUserData] = useState({})

    return(
        <appContext.Provider value={{
            // mainServerClient
            logged,
            setLogged,
            userData,
            setUserData

        }}>
            {children}
        </appContext.Provider>
    )

}

export default AppContextProvider