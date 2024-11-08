import { useContext, useState } from 'react'
import { useEffect } from 'react'
import { getSubServerReports, getSubServers, getAccount, getAllNotifications, getSubserverDevicePeripheralModel } from '../client/ClientePrueba'
import { appContext } from '../context/appContext'
import { Skeleton, Input } from 'antd'
import { LastMeasurementsChart } from '../components/Charts'
import { searchFields } from '../functions/lists'

const Dashboard = () => {

    const {
        subServers, 
        setSubServers,
        setUserData,
        setNotifications,
        setSubServerReports,
        setDevicePeripheralsModel,
        setUserInfo,
        notificationCategoryList,
        notificationTypeList
    } = useContext(appContext)

    async function getAllInfo(){
        let subserverRes = await getSubServers()
        let userDataRes = await getAccount()
        let notificationsRes = await getAllNotifications()
        let reportsRes = await getSubServerReports()
        let resDevicePeripheralsModel = await getSubserverDevicePeripheralModel()

        setSubServers(subserverRes.data.data)
        setUserData(userDataRes.data.data[0])
        setNotifications(notificationsRes.data.data.map(item => ({
            ...item,
            categoryName: searchFields(notificationCategoryList, item.category),
            // typeName: searchFields(notificationTypeList, item.type)
        })))
        setSubServerReports(reportsRes.data.data)
        setDevicePeripheralsModel(resDevicePeripheralsModel.data.data)
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
                        {/* <LastMeasurementsChart/> */}
                    </>
                )}
            </div>
        </div>
    )
}

export default Dashboard