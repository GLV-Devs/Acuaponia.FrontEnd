import { UserOutlined, SettingOutlined, BellOutlined, BarsOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import NotifPanel from './NotifPanel'
import { useState } from 'react'
import ConfigPanel from './ConfigPanel'

const NavBar = () => {

    const [configPanelOpen, setConfigPanelOpen] = useState(false)
    const [notifPanelOpen, setNotifPanelOpen] = useState(false)
    const navigate = useNavigate()
    const iconStyle = {
        color: '#e95cff',
        fontSize: '35px'
    }

    const openNotif = () => {
        setConfigPanelOpen(false)
        setNotifPanelOpen(!notifPanelOpen)
    }

    const openConfig = () => {
        setConfigPanelOpen(!configPanelOpen)
        setNotifPanelOpen(false)
    }

    return(
        <>
            <div className="NavBar">
                <UserOutlined onClick={() => navigate('/Profile')} style={iconStyle}/>
                <div>
                    <SettingOutlined onClick={openConfig} style={iconStyle}/>
                    <BellOutlined onClick={openNotif} style={iconStyle}/>
                    <BarsOutlined onClick={() => navigate('/SubServerSearch')} style={iconStyle}/>
                </div>
            </div>

            { notifPanelOpen && <NotifPanel close={() => setNotifPanelOpen(false)}/> }
            { configPanelOpen && <ConfigPanel close={() => setConfigPanelOpen(false)}/> }
        </>
    )
}

export default NavBar