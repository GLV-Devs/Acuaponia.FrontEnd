import { UserOutlined, SettingOutlined, BellOutlined, BarsOutlined } from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router-dom'
import NotifPanel from './NotifPanel'
import { useState } from 'react'
import ConfigPanel from './ConfigPanel'
import { navBarIconStyle } from '../AntDIconStyles'

const NavBar = () => {

    const [configPanelOpen, setConfigPanelOpen] = useState(false)
    const [notifPanelOpen, setNotifPanelOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const openNotif = () => {
        setConfigPanelOpen(false)
        setNotifPanelOpen(!notifPanelOpen)
    }

    const openConfig = () => {
        setConfigPanelOpen(!configPanelOpen)
        setNotifPanelOpen(false)
    }

    const switchSubServerPages = () => {
        if(location.pathname == '/SubServerSearch'){
            navigate('/Dashboard')
        }else{
            navigate('/SubServerSearch')
        }
    }

    return(
        <>
            <div className="NavBar">
                <UserOutlined onClick={() => navigate('/Profile')} style={navBarIconStyle}/>
                <div>
                    <SettingOutlined onClick={openConfig} style={navBarIconStyle}/>
                    <BellOutlined onClick={openNotif} style={navBarIconStyle}/>
                    <BarsOutlined onClick={() => switchSubServerPages()} style={navBarIconStyle}/>
                </div>
            </div>

            { notifPanelOpen && <NotifPanel close={() => setNotifPanelOpen(false)}/> }
            { configPanelOpen && <ConfigPanel close={() => setConfigPanelOpen(false)}/> }
        </>
    )
}

export default NavBar