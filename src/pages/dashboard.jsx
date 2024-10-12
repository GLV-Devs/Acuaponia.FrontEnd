import { useContext, useState } from 'react'
import { useEffect } from 'react'
import { getSubServerReports, getSubServers, getAccount, getAllNotifications } from '../client/ClientePrueba'
import { appContext } from '../context/appContext'

const Dashboard = () => {

    const {subServers, setSubServers, setUserData, setNotifications} = useContext(appContext)

    async function getAllInfo(){
        let subserverRes = await getSubServers()
        let userDataRes = await getAccount()
        let notificationsRes = await getAllNotifications()
        setSubServers(subserverRes.data.data)
        setUserData(userDataRes.data.data[0])
        setNotifications(notificationsRes.data.data)
    }

    useEffect(() => {
        getAllInfo()
    }, [])

    return(
        <div className='Dashboard'>
        
        </div>
    )
}

export default Dashboard