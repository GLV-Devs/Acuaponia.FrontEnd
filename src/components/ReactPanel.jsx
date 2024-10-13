import { LaptopOutlined, CloseOutlined, SettingOutlined } from "@ant-design/icons"

const ReactPanel = ({close}) => {
	return(
		<div className='ReactPanel'>
			<div className='bar'>
                <SettingOutlined/>
                <p>Reactores</p>
                <CloseOutlined onClick={close}/>
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