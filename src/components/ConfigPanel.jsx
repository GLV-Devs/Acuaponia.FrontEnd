import { UserOutlined, MobileOutlined, BellOutlined, AppstoreAddOutlined, SettingOutlined, CloseOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { barPanelIconStyles, buttonPanelIconStyle } from '../AntDIconStyles'

const ConfigPanel = ({close}) => {

    const navigate = useNavigate()

    return(
        <div className="ConfigPanel ">
            <div className="InsidePanel">
                <div className='bar'>
                    <div>
                        <SettingOutlined style={barPanelIconStyles}/>
                        <h3>Ajustes</h3>
                    </div>
                    <CloseOutlined style={barPanelIconStyles} onClick={close} className='closeButton'/>
                </div>

                <div className="Buttons">
                    <div className="Button" onClick={() => {navigate ('/userCreation'); close()}}>
                        <UserOutlined style={buttonPanelIconStyle}/>
                        <div>
                            <h4>Usuario</h4>
                            <p>Creacion de Usuario</p>
                        </div>
                    </div>
                    <div className="Button" onClick={() => {navigate ('/deviceCreation'); close()}}>
                        <MobileOutlined style={buttonPanelIconStyle}/>
                        <div>
                            <h4>Dispositivo</h4>
                            <p>Creacion de Dispositivo</p>
                        </div>
                    </div>
                    <div className="Button" onClick={() => {navigate ('/reportCreation'); close()}}>
                        <AppstoreAddOutlined style={buttonPanelIconStyle}/>
                        <div>
                            <h4>Reportes</h4>
                            <p>Creacion de reportes</p>
                        </div>
                    </div>
                    <div className="Button">
                        <BellOutlined style={buttonPanelIconStyle}/>
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