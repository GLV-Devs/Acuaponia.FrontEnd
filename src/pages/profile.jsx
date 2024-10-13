import { useContext, useEffect } from "react"
import { appContext } from '../context/appContext'
import { getAccount } from "../client/ClientePrueba"
import { SettingOutlined, UserOutlined } from '@ant-design/icons'
import { Divider } from "antd";
import { barPanelIconStyles, buttonPanelIconStyle } from '../AntDIconStyles'

const Profile = () => {

    const {userData, setUserData, subServers} = useContext(appContext)
    const dividerStyle = {
        borderColor: '#e95cff',
        borderWidth: '2px'
    }

    // const getUserInfo = async () => {
    //     let res = await getAccount()
    //     setUserData(res.data.data[0])
    // }

    // useEffect(() => {
    //     getUserInfo()
    // }, [])

    return(
        <div className='Profile'>
            <div className='bar'>
                <h1 className='titles'>Bienvenido</h1>
                <h1 className='titles'>{userData.realName}</h1>
            </div>
            <div className='card'>
                <div className='settingBar'><SettingOutlined style={buttonPanelIconStyle}/></div>
                <div className='picContainer'>
                    { userData.img == null ? (
                        <UserOutlined style={{fontSize: '225px', color: '#6f8fc2'}}/>
                    ):(
                        <img />
                    )  }
                    
                </div>
                <h2>{userData.realName}</h2>
                <Divider dashed style={dividerStyle}/>
                <h2>Correo</h2>
                <Divider dashed style={dividerStyle}/>
                <h2>Telefono</h2>
            </div>

            <div className='ReportesSection'>

            </div>

            <div className='SubServersSection'>

            </div>
        </div>
    )
}

export default Profile