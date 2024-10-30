import { useContext, useEffect, useState } from "react"
import { appContext } from '../context/appContext'
import { SettingOutlined, UserOutlined } from '@ant-design/icons'
import { Divider, Skeleton } from "antd";
import { buttonPanelIconStyle } from '../AntDIconStyles'
import { useNavigate } from 'react-router-dom'


const Profile = () => {

    const {userData, setUserData, subServers, subServerReports, setCurrentSubServer} = useContext(appContext)
    const navigate = useNavigate()

    const dividerStyle = {
        borderColor: '#e95cff',
        borderWidth: '2px'
    }

    console.log(userData)


    return(
        <div className='Profile'>
            { userData == null && subServerReports == null && subServers == null ? (
                <>
                    <Skeleton active/>
                    <Skeleton active/>
                </>
            ):(
                <>
                    <div className='bar'>
                        <h1 className='titles'>Bienvenido</h1>
                        <h1 className='titles'>{userData.realName}</h1>
                    </div>
                    <div className='card'>
                        <div className='settingBar'><SettingOutlined style={buttonPanelIconStyle} onClick={() => {navigate ('/editPassword')}}/></div>
                        <div className='picContainer'>
                            { userData.img == null ? (
                                <UserOutlined style={{fontSize: '225px', color: '#6f8fc2'}}/>
                            ):(
                                <img />
                            )  }
                            
                        </div>
                        <h2>{userData.realName}</h2>
                        <Divider dashed style={dividerStyle}/>
                        <h2>{userData.email}</h2>
                        <Divider dashed style={dividerStyle}/>
                        
                    </div>

                    {/* <div className='ReportesSection'>
                        <h1 className='title'>Reportes</h1>
                        <div className='reportContainer'>
                            { subServerReports.map((item) => (
                                <div className='itemReport' key={item.id}>
                                    <div className='badge'></div>
                                    <div className='info'>
                                        <h1>{item.devicePeripheral.name}</h1>
                                        <h4>Device: {item.deviceIndex}</h4>
                                        <div className='dateTime'>
                                            <h4 className='date'>{new Date(item.dateRecorded).getDate()}/{new Date(item.dateRecorded).getMonth()}/{new Date(item.dateRecorded).getFullYear()}</h4>
                                            <h4 className='time'>{new Date(item.dateRecorded).getHours()}:{new Date(item.dateRecorded).getMinutes()}</h4>
                                        </div>
                                        <h4 className='yellow'>Value: {parseFloat(item.value).toFixed(2)}</h4>
                                    </div>
                                </div>
                            )) }
                        </div>
                    </div> */}

                    <div className='SubServersSection'>
                        <h1 className='title'>Sub servidores</h1>
                        <div className='subServerContainer'>
                            { subServers.map((item) => (
                                <div className='itemSubServer' key={item.id} onClick={() => {setCurrentSubServer(item.id); navigate('/SubServer')}}>
                                    <h3>{item.name}</h3>
                                    <h4>{item.id}</h4>
                                    <Divider dashed style={{borderColor: '#ffb700'}}/>
                                    <h3>
                                        {new Date(item.lastHeartbeat).getDate()}/{new Date(item.lastHeartbeat).getMonth()}/{new Date(item.lastHeartbeat).getFullYear()} {new Date(item.lastHeartbeat).getHours()}:{new Date(item.lastHeartbeat).getMinutes()}
                                    </h3>
                                </div>
                            )) }
                        </div>
                    </div>
                </>
            ) }
        </div>
    )
}

export default Profile