import { LaptopOutlined, MobileOutlined, CloseOutlined, SettingOutlined } from "@ant-design/icons"
import { useContext } from "react"
import { appContext } from "../context/appContext"
import { useNavigate } from "react-router"
import { Skeleton } from "antd"

const DispPanel = ({close}) => {

    const {subServerDevices, setCurrentDevice} = useContext(appContext)
    const navigate = useNavigate()

    console.log(subServerDevices)
    
	return(
		<div className='DispPanel'>
			<div className='bar'>
                <SettingOutlined/>
                <p>Dispositivos</p>
                <CloseOutlined onClick={close}/>
            </div>

            {subServerDevices == null ? (
                    <>
                        <Skeleton active/>
                        <Skeleton active/>
                    </>
                ):(<div className="Buttons">
                    {subServerDevices.map((item) => (
                        <div className="Button" key={item.id} onClick={() => {setCurrentDevice(item.id); navigate('/individualDevice')}}>
                            <MobileOutlined/>
                            <div>
                                <h4>{item.name}</h4>
                                <p className="hex">{item.uniqueIdHexSHA512}</p>
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

export default DispPanel