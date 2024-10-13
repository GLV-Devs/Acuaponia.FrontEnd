import { useContext, useState } from 'react'
import { useEffect } from 'react'
import { getSubServerReports, getSubServers, getAccount, getAllNotifications } from '../client/ClientePrueba'
import { appContext } from '../context/appContext'
import { Skeleton, Input } from 'antd'

const Dashboard = () => {

    const {subServers, setSubServers, setUserData, setNotifications, setSubServerReports} = useContext(appContext)

    async function getAllInfo(){
        let subserverRes = await getSubServers()
        let userDataRes = await getAccount()
        let notificationsRes = await getAllNotifications()
        let reportsRes = await getSubServerReports()
        setSubServers(subserverRes.data.data)
        setUserData(userDataRes.data.data[0])
        setNotifications(notificationsRes.data.data)
        setSubServerReports(reportsRes.data.data)
        console.log(reportsRes.data.data)
    }

    useEffect(() => {
        getAllInfo()
    }, [])

    return(
        <div className='Dashboard'>
            <h1 className='title'>DashBoard</h1>
            <div className='Container'>
                {subServers == null ? (
                    <>
                        <Skeleton active/>
                        <Skeleton active/>
                    </>    
                ):(
                    <>
                        <Input placeholder='Buscar'/>
                        <h1>Ay, ya se cargo</h1>
                    </>
                )}
            </div>
        </div>
    )
}

export default Dashboard