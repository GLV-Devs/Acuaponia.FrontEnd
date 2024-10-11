import { BellOutlined, UserOutlined, CloseOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { getAllNotifications } from '../client/ClientePrueba'
import { useContext, useEffect, useState } from 'react'
import { appContext } from '../context/appContext'

const NotifPanel = ({close}) => {

    const iconStyle = {
        color: '#6f8fc2',
        fontSize: '25px'
    }
    const {notifications, setNotifications} = useContext(appContext) 

    const getNotif = async () => {
        let res = await getAllNotifications()
        setNotifications(res.data.data)
        console.log(res)
    }

    useEffect(() => {
        getNotif()
    }, [])

    return(
        <div className="NotifPanel">
            <div className='bar'>
                <div>
                    <BellOutlined style={iconStyle}/>
                    <h3>Notificaciones</h3>
                </div>
                <CloseOutlined style={iconStyle} onClick={close} className='closeButton'/>
            </div>

            <div className='filters'>
                <Button>Opcion 1 <div className='badge'/></Button>
                <Button>Opcion 2 <div className='badge'/></Button>
                <Button>Opcion 3 <div className='badge'/></Button>
                <Button>Opcion 4 <div className='badge'/></Button>
            </div>

            <div className='list'>
                {notifications.map((item) => (
                    <div className='listElement' key={item.id}>
                        <UserOutlined style={{color: '#6f8fc2', fontSize: '50px'}}/>
                        <div className='info'>
                            <h3 className='normalInfo'>Titulo de la notif</h3>
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
            </div>
        </div>
    )
}

export default NotifPanel