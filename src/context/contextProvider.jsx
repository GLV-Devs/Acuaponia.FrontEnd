import { appContext } from './appContext'
import { useState } from 'react'
import { mainServerClient } from '../client/client'

const AppContextProvider = ({children}) => {

    const mainServerClient = new mainServerClient(loginData, serverUrl, httpErrorHandler)

    return(
        <appContext.Provider value={{
            mainServerClient

        }}>
            {children}
        </appContext.Provider>
    )

}

export default AppContextProvider