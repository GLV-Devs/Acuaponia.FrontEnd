import { UserOutlined, MobileOutlined, BellOutlined, AppstoreAddOutlined, SettingOutlined, CloseOutlined } from "@ant-design/icons"

const ConfigPanel = ({close}) => {

    const iconStyle = {
        color: '#6f8fc2',
        fontSize: '25px'
    }

    return(
        <div className="ConfigPanel ">
            <div className='bar'>
                <div>
                    <SettingOutlined style={iconStyle}/>
                    <h3>Ajustes</h3>
                </div>
                <CloseOutlined style={iconStyle} onClick={close} className='closeButton'/>
            </div>

            <div className="Buttons">
                <div className="Button">
                    <UserOutlined/>
                    <div>
                        <h4>Titulo</h4>
                        <p>subtitulo</p>
                    </div>
                </div>
                <div className="Button">
                    <MobileOutlined/>
                    <div>
                        <h4>Titulo</h4>
                        <p>subtitulo</p>
                    </div>
                </div>
                <div className="Button">
                    <AppstoreAddOutlined />
                    <div>
                        <h4>Titulo</h4>
                        <p>subtitulo</p>
                    </div>
                </div>
                <div className="Button">
                    <BellOutlined/>
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