import { LaptopOutlined, closeOutlined } from "@ant-design/icons"

const ReactPanel = () => {
	return(
		<div className='ReactPanel'>
			<div className='bar'>
                <SettingOutlined/>
                <p>Reactores</p>
                <CloseOutlined />
            </div>

            <div className="Buttons">
                <div className="Button">
                    <LaptopOutlined/>
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
                <div className="Button">
                    <LaptopOutlined />
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

export default ReactPanel