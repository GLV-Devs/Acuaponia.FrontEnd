import { BellOutlined, UserOutlined, CloseOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const NotifPanel = ({close}) => {

    const iconStyle = {
        color: '#6f8fc2'
    }

    return(
        <div className="NotifPanel">
            <div className='bar'>
                <div>
                    <BellOutlined style={iconStyle}/>
                    <h4>Notificaciones</h4>
                </div>
                <CloseOutlined style={iconStyle} onClick={close}/>
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