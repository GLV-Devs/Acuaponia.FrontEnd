import { LaptopOutlined, CloseOutlined, SettingOutlined } from "@ant-design/icons"
import { useContext } from "react"
import { appContext } from "../context/appContext"


const ReactPanel = ({close}) => {
    
    const {subServerReactor} = useContext(appContext)


	return(
		<div className='ReactPanel'>
			<div className='bar'>
                <SettingOutlined/>
                <p>Reactores</p>
                <CloseOutlined onClick={close}/>
            </div>

            {subServerReactor == null ? (
                    <div className="Empty">
                        <p> No hay reactores disponibles por el momento</p>
                    </div>
                ):(<div className="Buttons">
                    {subServerReactor.map((item) => (
                        <div className="Button" key={item.id}>
                            <MobileOutlined/>
                            <div>
                                <h4>{item.name}</h4>
                                <p>{item.uniqueIdHexSHA512}</p>
                                <p className='date'>{new Date(item.lastHeartbeat).getDate()}/{new Date(item.lastHeartbeat).getMonth()}/{new Date(item.lastHeartbeat).getFullYear()}</p>
                                <p className='time'>{new Date(item.lastHeartbeat).getHours()}:{new Date(item.lastHeartbeat).getMinutes()}</p>
                            </div>
                        </div>
                    ))}
                </div>)
            }
		</div>
	)
}

export default ReactPanel