import { LaptopOutlined, MobileOutlined, CloseOutlined, SettingOutlined } from "@ant-design/icons"

const DispPanel = ({close}) => {
    
	return(
		<div className='DispPanel'>
			<div className='bar'>
                <SettingOutlined/>
                <p>Dispositivos</p>
                <CloseOutlined onClick={close}/>
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