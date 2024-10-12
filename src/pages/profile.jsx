import { useContext, useEffect } from "react"
import { appContext } from '../context/appContext'
import { getAccount } from "../client/ClientePrueba"

const Profile = () => {

    const {userData, setUserData, subServers} = useContext(appContext)

    const getUserInfo = async () => {
        let res = await getAccount()
        setUserData(res.data.data[0])
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return(
        <div className='Profile'>
            <h1>Bienvenido</h1>
            <h1>{userData.realName}</h1>

            <div className='card'>
                <img src="" alt=''/>
            </div>

            <div className='ReportesSection'>

            </div>

            <div className='SubServersSection'>

            </div>
        </div>
    )
}

export default Profile