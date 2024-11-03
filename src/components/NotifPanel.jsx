import { BellOutlined, UserOutlined, CloseOutlined } from '@ant-design/icons'
import { Button, notification, Skeleton } from 'antd'
import { getAllNotifications } from '../client/ClientePrueba'
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
    console.log(notifications)

    const filterLowPriotity = () => {
        if(selectedPriority == 0){
            setSelectedPriority(4)
            setShowList(notifications)
        }else{
            setSelectedPriority(0)
            let list = notifications.filter(item => item.importance == 0)
            setShowList(list)
        }
    }

    const filterMediumPriotity = () => {
        if(selectedPriority == 1){
            setSelectedPriority(4)
            setShowList(notifications)
        }else{
            setSelectedPriority(1)
            let list = notifications.filter(item => item.importance == 1)
            setShowList(list)
        }
    }

    const filterHighPriotity = () => {
        if(selectedPriority == 2){
            setSelectedPriority(4)
            setShowList(notifications)
        }else{
            setSelectedPriority(2)
            let list = notifications.filter(item => item.importance == 2)
            setShowList(list)
        }
    }

    const filterCriticPriotity = () => {
        if(selectedPriority == 3){
            setSelectedPriority(4)
            setShowList(notifications)
        }else{
            setSelectedPriority(3)
            let list = notifications.filter(item => item.importance == 3)
            setShowList(list)
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
                                <h3 className='normalInfo'>Titulo de la notif (Category+Type)</h3> 
                                <p className='normalInfo'>Subservidor: {item.subServerId}</p>
                                <h5 className='normalInfo'>contenido de la notif lorem ipsum dolor lorem ipsum dolor lorem ipsum </h5>
                                <div className='dateTime'>
                                    <p className='date'>
                                        {new Date(item.notificationDate).getDate()}/{new Date(item.notificationDate).getMonth()}/{new Date(item.notificationDate).getFullYear()}
                                    </p>
                                    <p className='time'>{new Date(item.notificationDate).getHours()}:{new Date(item.notificationDate).getMinutes()}</p>
                                </div>
                            </div>
                        </div>)
                    )}
                </div>)}
            </div>
        </div>    
    )
}

export default NotifPanel