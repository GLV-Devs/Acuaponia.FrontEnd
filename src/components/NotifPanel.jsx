import { BellOutlined, UserOutlined, CloseOutlined } from '@ant-design/icons'
import { Button, notification, Skeleton } from 'antd'
import { aproveSubServerSession } from '../client/ClientePrueba'
import { useContext, useEffect, useState } from 'react'
import { appContext } from '../context/appContext'

const NotifPanel = ({close}) => {

    const iconStyle = {
        color: '#6f8fc2',
        fontSize: '25px'
    }
    const {notifications} = useContext(appContext)
    const [showList, setShowList] = useState(notifications)
    const [selectedPriority, setSelectedPriority] = useState(4)
    const [notifMessage, setNotifMessage] = useState(false)
    console.log(notifications)

    const filterLowPriotity = () => {
        if(selectedPriority == 0){
            setSelectedPriority(4)
            setShowList(notifications)
            setNotifMessage(false)
        }else{
            setSelectedPriority(0)
            let list = notifications.filter(item => item.importance == 0)
            setShowList(list)
            if(list.length == 0){
                setNotifMessage('No hay notificaciones con prioridad baja')
            }else{
                setNotifMessage(false)
            }
        }
    }

    const filterMediumPriotity = () => {
        if(selectedPriority == 1){
            setSelectedPriority(4)
            setShowList(notifications)
            setNotifMessage(false)
        }else{
            setSelectedPriority(1)
            let list = notifications.filter(item => item.importance == 1)
            setShowList(list)
            if(list.length == 0){
                setNotifMessage('No hay notificaciones con prioridad media')
            }else{
                setNotifMessage(false)
            }
        }
    }

    const filterHighPriotity = () => {
        if(selectedPriority == 2){
            setSelectedPriority(4)
            setShowList(notifications)
            setNotifMessage(false)
        }else{
            setSelectedPriority(2)
            let list = notifications.filter(item => item.importance == 2)
            setShowList(list)
            if(list.length == 0){
                setNotifMessage('No hay notificaciones con prioridad alta')
            }else{
                setNotifMessage(false)
            }
        }
    }

    const filterCriticPriotity = () => {
        if(selectedPriority == 3){
            setSelectedPriority(4)
            setShowList(notifications)
            setNotifMessage(false)
        }else{
            setSelectedPriority(3)
            let list = notifications.filter(item => item.importance == 3)
            setShowList(list)
            if(list.length == 0){
                setNotifMessage('No hay notificaciones con prioridad critica')
            }else{
                setNotifMessage(false)
            }
        }
    }

    return(
        <div className="NotifPanel">
            <div className="InsidePanel">
                <div className='bar'>
                    <div>
                        <BellOutlined style={iconStyle}/>
                        <h3>Notificaciones</h3>
                    </div>
                    <CloseOutlined style={iconStyle} onClick={close} className='closeButton'/>
                </div>

                <div className='filters'>
                    <Button type='text' onClick={filterCriticPriotity}>Critico<div className='badge1'/></Button>
                    <Button type='text' onClick={filterHighPriotity}>Alta<div className='badge2'/></Button>
                    <Button type='text' onClick={filterMediumPriotity}>Media <div className='badge3'/></Button>
                    <Button type='text' onClick={filterLowPriotity}>Baja <div className='badge4'/></Button>
                </div>


                {notifications == null ? (
                    <>
                        <Skeleton active/>
                        <Skeleton active/>
                    </>
                ):(<div className='list'>
                    {showList.map((item) => (
                        <div className='listElement' key={item.id}>
                            <UserOutlined style={{color: '#6f8fc2', fontSize: '40px'}}/>
                            <div className='info'>
                                <h3 className='normalInfo'>{item.categoryName} {item.typeName}</h3> 
                                <p className='normalInfo'>Subservidor: {item.subServerId}</p>
                                {item.content == null ? null : <h5 className='normalInfo'>{item.content}</h5>}
                                <div className='dateTime'>
                                    <p className='date'>
                                        {new Date(item.notificationDate).getDate()}/{new Date(item.notificationDate).getMonth()}/{new Date(item.notificationDate).getFullYear()}
                                    </p>
                                    <p className='time'>{new Date(item.notificationDate).getHours()}:{new Date(item.notificationDate).getMinutes()}</p>
                                </div>
                            </div>
                        </div>)
                    )}
                    {notifMessage && <h3 style={{color: '#6f8fc2', textAlign: 'center'}}>{notifMessage}</h3>}
                </div>)}
            </div>
        </div>    
    )
}

export default NotifPanel