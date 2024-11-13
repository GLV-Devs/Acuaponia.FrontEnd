import { useContext, useState } from 'react'
import { useEffect } from 'react'
import { getSubServerReports, getSubServers, getAccount, getAllNotifications, getSubserverDevicePeripheralModel } from '../client/ClientePrueba'
import { appContext } from '../context/appContext'
import { Skeleton, Input } from 'antd'
import { SubServerResumeChart } from '../components/Charts'
import { searchFields, searchPeripheral, searchReportValueKind, searchDevice } from '../functions/lists'
import { AppstoreAddOutlined, BarsOutlined } from '@ant-design/icons'

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
        notificationTypeList,
        subServerReports,
        allPeripherals,
        reportValueKind,
        subServerDevices,
    } = useContext(appContext)

    const [chartLabels, setChartLabels] = useState([])
    const [cantidadBucles, setCantidadBucles] = useState(0)

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

    function buildCharts(){
        setCantidadBucles(subServers.length)
        subServers.forEach(item => {
            if(item.givenName){
                if(!chartLabels.includes(item.givenName)){
                    setChartLabels([...chartLabels, {name: item.givenName, id: item.id}])
                }
            }else{
                if(!chartLabels.includes(item.reportedName)){
                    setChartLabels([...chartLabels, {name: item.reportedName, id: item.id}])
                }
            }
        })
    }

    useEffect(() => {
        buildCharts()
    }, [subServers])

    useEffect(() => {
        getAllInfo()
    }, [])

    return(
        <div className='Dashboard'>
            <h1 className='title'>Bienvenido al Panel de control del bucle Acuaponico</h1>
            <div className='Container'>
                {subServers == null ? (
                    <>
                        <Skeleton active/>
                        <Skeleton active/>
                    </>    
                ):(
                    <>
                        <h2>Usted posee {cantidadBucles} bucles disponibles.</h2>
                        <h3>Sus bucles disponibles son:</h3>
                        <div className='info'>
                            {subServers.map(item => (
                                <div className='bucleItem'>
                                    <div className='left'>
                                        <AppstoreAddOutlined style={{color:'#e95cff', fontSize:'45px'}}/>
                                    </div>
                                    <div className='info'>
                                        <h3>{item.givenName ? (item.givenName):(item.reportedName)}</h3>
                                        <h4>con {item.devices.length} dispositivos registrados</h4>
                                        {item.sessionInfo.isActivated && <h5>Sesion Activa</h5>}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='texto'>
                            <h3>Para mas informacionde los bucles dirirse a Busqueda </h3> 
                            <BarsOutlined style={{ fontSize:'20px', color:'#e95cff'}}/>
                        </div>
                        

                    </>
                )}
            </div>
        </div>
    )
}

export default Dashboard