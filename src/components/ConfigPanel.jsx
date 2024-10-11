import { UserOutlined, MobileOutlined, BellOutlined, AppstoreAddOutlined, SettingOutlined, CloseOutlined } from "@ant-design/icons"

const ConfigPanel = ({close}) => {

    const iconHeaderStyle = {
        color: '#6f8fc2',
        fontSize: '25px'
    }

    const iconMenuStyle = {
        color: '#6f8fc2',
        fontSize: '40px'
    }

    return(
        <div className="ConfigPanel ">
            <div className='bar'>
                <div>
                    <SettingOutlined style={iconHeaderStyle}/>
                    <h3>Ajustes</h3>
                </div>
                <CloseOutlined style={iconHeaderStyle} onClick={close} className='closeButton'/>
            </div>

            <div className="Buttons">
                <div className="Button">
                    <UserOutlined style={iconMenuStyle}/>
                    <div>
                        <h4>Titulo</h4>
                        <p>subtitulo</p>
                    </div>
                </div>
                <div className="Button">
                    <MobileOutlined style={iconMenuStyle}/>
                    <div>
                        <h4>Titulo</h4>
                        <p>subtitulo</p>
                    </div>
                </div>
                <div className="Button">
                    <AppstoreAddOutlined style={iconMenuStyle}/>
                    <div>
                        <h4>Titulo</h4>
                        <p>subtitulo</p>
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
    )
}

export default ConfigPanel