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
                <div className="Button" onClick={ () => {navigate ('/adminPanel'); close()}}>
                    <SettingOutlined style={buttonPanelIconStyle}/>
                        <div>
                            <h4>Administracion</h4>
                            <p>Panel de administracion</p>
                        </div>
                    </div>
                    <div className="Button" onClick={() => {navigate ('/userCreation'); close()}}>
                        <UserOutlined style={buttonPanelIconStyle}/>
                        <div>
                            <h4>Usuario</h4>
                            <p>Creacion de Usuario</p>
                        </div>
                    </div>
                    <div className="Button" onClick={() => {navigate ('/periphericCreation'); close()}}>
                        <MobileOutlined style={buttonPanelIconStyle}/>
                        <div>
                            <h4>Perifericos</h4>
                            <p>Creacion de Perifericos</p>
                        </div>
                    </div>
                    <div className="Button" onClick={() => {navigate ('/reportCreation'); close()}}>
                        <AppstoreAddOutlined style={buttonPanelIconStyle}/>
                        <div>
                            <h4>Reportes</h4>
                            <p>Creacion de reportes</p>
                        </div>
                    </div>
                    <div className="Button" onClick={() => {navigate ('/SubServerSessions'); close()}}>
                        <AppstoreAddOutlined style={buttonPanelIconStyle}/>
                        <div>
                            <h4>SubServidores</h4>
                            <p>Sesiones de sub servidores</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfigPanel