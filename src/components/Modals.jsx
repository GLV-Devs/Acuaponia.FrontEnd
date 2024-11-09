import { Button, Modal, Skeleton } from "antd"
import { getSubServerSessionInfo } from '../client/ClientePrueba'
import { useState, useContext, useEffect } from 'react'
import { appContext } from '../context/appContext'

export const IndividualPeripheral = ({info, onCancel, open}) => {

    let values = []
    if(info.values != undefined){
        values = info.values
    }

    let configValues = []
    let i = 0

    values.forEach(item => {
        configValues.push({
            value: item,
            name: info.fields[i].name
        })
        console.log(configValues)
        i = i + 1
    })

    const styles = {
        margin: '0px'
    }

    return(
        <Modal
            destroyOnClose
            onCancel={onCancel}
            // title='Informacion de periferico'
            open={open}
            footer={[
                <Button type="primary" onClick={onCancel}>Cerrar</Button>
            ]}
        >
            <h3 style={styles}>Nombre: {info.name}</h3>
            <h3 style={styles}>ActionTypeName: {info.actionTypeName}</h3>
            <h2 style={{margin: '20px 0px 0px 0px'}}>Valores configurados:</h2>
            { configValues.map((item) => (
                <h3 style={styles}>{item.name}: {item.value}</h3>
            )) }
        </Modal>
    )
}

export const SubServerSessionModal = ({subServerId, open, onCancel}) => {

    const [info, setInfo] = useState(null)
    const { messageApi } = useContext(appContext)

    const getInfo = async () => {
        let res = await getSubServerSessionInfo(subServerId)
        if(res.status == 200){
            setInfo(res.data.data[0])
        }else{
            onCancel()
            messageApi.open({
                type: 'error',
                content: 'Ah ocurrido un error'
            })
        }
    }

    useEffect(() => {
        getInfo()
    }, [])

    return(
        <Modal destroyOnClose title="Sesion del Sub servidor" open={open} onCancel={onCancel} footer={[<Button onClick={onCancel}>Cerrar</Button>]}>
            { info ? (
                <>
                    <h3>{ info.givenName ? (info.givenName):(info.reportedName) }</h3>
                    <h4>Primera conexion: {Date(info.firstRequestedDate).toString()}</h4>
                    <h4>Ultima conexion: {Date(info.lastLoginDate).toString()}</h4>
                    <h4>MAC: {info.requestingClientReportedMACAddress}</h4>
                    <h4>Direccion IP: {info.requestingClientIP}</h4>
                </>
            ):(
                <>
                    <Skeleton/>
                </>
            ) }
        </Modal>
    )
}