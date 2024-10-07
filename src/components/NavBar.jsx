import { UserOutlined, SettingOutlined, BellOutlined, BarsOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import NotifPanel from './NotifPanel'

const NavBar = () => {

    const navigate = useNavigate()
    const iconStyle = {
        color: '#e95cff'
    }

    const [notifOpen, setNotifOpen] = useState(false)

    return(
        <>
            <div className="NavBar">
                <UserOutlined onClick={() => navigate('/')}/>
                <div>
                    <SettingOutlined onClick={() => navigate('/')} style={iconStyle}/>
                    <BellOutlined onClick={() => navigate('/')} style={iconStyle}/>
                    <BarsOutlined onClick={() => navigate('/')} style={iconStyle}/>
                </div>
            </div>

            { notifOpen && <NotifPanel close={() => setNotifOpen(false)}/> }
        </>
    )
}