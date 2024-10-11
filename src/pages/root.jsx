import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useContext } from "react"
import NavBar from "../components/NavBar"
import { appContext } from "../context/appContext"

const Root = () => {

    const {logged} = useContext(appContext)

    const navigate = useNavigate()
    useEffect(() => {
        navigate('/Login')
    }, [])

    return(
        <div className="root">
            {logged && <NavBar/>}
            <Outlet/>
        </div>
    )
}

export default Root