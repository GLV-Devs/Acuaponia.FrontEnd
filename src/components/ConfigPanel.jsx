import { UserOutlined, MobileOutlined, BellOutlined, AppstoreAddOutlined, SettingOutlined, CloseOutlined } from "@ant-design/icons"

const ConfigPanel = () => {
    return(
        <div className="ConfigPanel ">
            <div className='bar'>
                <SettingOutlined/>
                <p>Ajustes</p>
                <CloseOutlined />
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