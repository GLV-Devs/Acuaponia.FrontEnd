import { UserOutlined, MobileOutlined, BellOutlined, AppstoreAddOutlined, SettingOutlined, CloseOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"

const ConfigPanel = ({close}) => {

    const iconHeaderStyle = {
        color: '#e95cff',
        fontSize: '25px'
    }

    const iconMenuStyle = {
        color: '#6f8fc2',
        fontSize: '40px'
    }

    const navigate = useNavigate()

    return(
        <div className="ConfigPanel ">
            <div className="InsidePanel">
                <div className='bar'>
                    <div>
                        <SettingOutlined style={iconHeaderStyle}/>
                        <h3>Ajustes</h3>
                    </div>
                    <CloseOutlined style={iconHeaderStyle} onClick={close} className='closeButton'/>
                </div>

                <div className="Buttons">
                    <div className="Button" onClick={() => {navigate ('/userCreation'); close()}}>
                        <UserOutlined style={iconMenuStyle}/>
                        <div>
                            <h4>Usuario</h4>
                            <p>Creacion de Usuario</p>
                        </div>
                    </div>
                    <div className="Button" onClick={() => {navigate ('/deviceCreation'); close()}}>
                        <MobileOutlined style={iconMenuStyle}/>
                        <div>
                            <h4>Dispositivo</h4>
                            <p>Creacion de Dispositivo</p>
                        </div>
                    </div>
                    <div className="Button" onClick={() => {navigate ('/reportCreation'); close()}}>
                        <AppstoreAddOutlined style={iconMenuStyle}/>
                        <div>
                            <h4>Reportes</h4>
                            <p>Creacion de reportes</p>
                        </div>
                    </div>
                    <div className="Button">
                        <BellOutlined style={iconMenuStyle}/>
                        <div>
                            <h4>Titulo</h4>
                            <p>subtitulo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfigPanel