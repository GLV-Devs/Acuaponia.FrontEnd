import { useNavigate } from 'react-router-dom'
import { WarningOutlined } from "@ant-design/icons"

const ErrorPage = () => {

    const navigate = useNavigate()

    return(
        <div className="errorPage">
            <WarningOutlined style={{fontSize: '200px'}}/>
            <h1>Ah ocurrido un error</h1>
            <h3 onClick={() => navigate('/login')}>Presiona aqui para volver</h3>
        </div>
    )
}

export default ErrorPage