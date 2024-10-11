import { BellOutlined, UserOutlined, CloseOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { getAllNotifications } from '../client/ClientePrueba'
import { useEffect } from 'react'

const NotifPanel = ({close}) => {

    const iconStyle = {
        color: '#6f8fc2',
        fontSize: '25px'
    }

    const getNotif = async () => {
        let res = await getAllNotifications()
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
                <div className='listElement'>
                    <UserOutlined />
                    <div className='info'>
                        <h3></h3>
                        <p></p>
                        <h4></h4>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotifPanel