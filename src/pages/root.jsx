import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

const Root = () => {

    const navigate = useNavigate()
    useEffect(() => {
        navigate('/Login')
    }, [])

    return(
        <div className="root">
            <Outlet/>
        </div>
    )
}

export default Root