import { LaptopOutlined, MobileOutlined, CloseOutlined } from "@ant-design/icons"

const DispPanel = () => {
	return(
		<div className='DispPanel'>
			<div className='bar'>
                <SettingOutlined/>
                <p>Dispositivos</p>
                <CloseOutlined />
            </div>

            <div className="Buttons">
                <div className="Button">
                    <MobileOutlined/>
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
                    <MobileOutlined />
                    <div>
                        <h4>Titulo</h4>
                        <p>subtitulo</p>
                    </div>
                </div>
                <div className="Button">
                    <LaptopOutlined/>
                    <div>
                        <h4>Titulo</h4>
                        <p>subtitulo</p>
                    </div>
                </div>
            </div>
		</div>
	)
}

export default DispPanel