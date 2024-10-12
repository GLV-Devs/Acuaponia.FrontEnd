import { BellOutlined, UserOutlined, CloseOutlined } from '@ant-design/icons'
import { Button, Skeleton } from 'antd'
import { getAllNotifications } from '../client/ClientePrueba'
import { useContext, useEffect, useState } from 'react'
import { appContext } from '../context/appContext'

const NotifPanel = ({close}) => {

    const iconStyle = {
        color: '#6f8fc2',
        fontSize: '25px'
    }
    const {notifications, setNotifications} = useContext(appContext) 

    // const getNotif = async () => {
    //     let res = await getAllNotifications()
    //     setNotifications(res.data.data)
    // }

    // useEffect(() => {
    //     getNotif()
    // }, [])

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
                    <Button type='text'>Critico<div className='badge1'/></Button>
                    <Button type='text'>Alta<div className='badge2'/></Button>
                    <Button type='text'>Media <div className='badge3'/></Button>
                    <Button type='text'>Baja <div className='badge4'/></Button>
                </div>


                {notifications == null ? (
                    <>
                        <Skeleton active/>
                        <Skeleton active/>
                    </>
                ):(<div className='list'>
                    {notifications.map((item) => (
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