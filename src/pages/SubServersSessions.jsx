import { useEffect, useState, useContext } from 'react'
import { getSubServerSessions, aproveSubServerSession, rejectSubServerSession } from '../client/ClientePrueba'
import { Button } from 'antd'
import { appContext } from '../context/appContext'
import { AppstoreAddOutlined } from '@ant-design/icons'

const SubServerSessions = () => {

    const { messageApi } = useContext(appContext)
    const [sessionsList, setSessionsList] = useState([])

    async function getInfo() {
        let res = await getSubServerSessions()
        console.log(res.data.data)
        setSessionsList(res.data.data)
    }

    useEffect(() => {
        getInfo()
    }, [])

    const aproveSubServer = async (id, ip) => {

        const data = {
            requesterIPAddress: ip
        }

        let res = await aproveSubServerSession(data, id)
        if(res.status == 200){
            getInfo()
            messageApi.open({
                type: 'success',
                content: 'Sesion del sub servidor aprovada'
            })
        }else{
            messageApi.open({
                type: 'error',
                content: 'Ah ocurrido un error'
            })
        }
    }

    const rejectSubServer = async (id, ip) => {

        const data = {
            requesterIPAddress: ip
        }

        let res = await rejectSubServerSession(data, id)
        if(res.status == 200){
            getInfo()
            messageApi.open({
                type: 'success',
                content: 'Sesion del sub servidor rechazada'
            })
        }else{
            messageApi.open({
                type: 'error',
                content: 'Ah ocurrido un error'
            })
        }
    }

    return(
        <div className="SubServerSessions">
            <h1>Sesiones de subServidores</h1>
            { sessionsList.map(item => (
                <div className='listItem' key={item.id}>
                    <div className='left'>
                        <AppstoreAddOutlined style={{color:'#e95cff', fontSize:'60px'}}/>
                    </div>
                    <div className='info'>
                        <h2>{ item.givenName ? (item.givenName):(item.reportedName) }</h2>
                        <h3>Primera conexion: {Date(item.firstRequestedDate).toString()}</h3>
                        <h3>Ultima conexion: {Date(item.lastLoginDate).toString()}</h3>
                        <h3>MAC: {item.requestingClientReportedMACAddress}</h3>
                        { item.isApproved == null && (
                            <>
                                <Button onClick={() => aproveSubServer(item.id, item.requestingClientIP)}>Aprobar</Button>
                                <Button onClick={() => rejectSubServer(item.id, item.requestingClientIP)}>rechazar</Button>
                            </>
                        ) }
                        { item.isApproved == true && <h3 className='approve'>Sub servidor aprovado</h3> }
                        { item.isApproved == false && <h3 className='rejected'>Sub servidor rechazado</h3> }
                    </div>
                </div>
            )) }
        </div>
    )
}

export default SubServerSessions