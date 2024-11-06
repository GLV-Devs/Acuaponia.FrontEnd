import { useContext, useEffect, useState } from 'react'
import { createNewPeripheral, getPinActionTypesList, getSubServerDevices } from '../client/ClientePrueba'
import { Select, Input, Form, Button } from 'antd'
import { appContext } from '../context/appContext'
import axios from 'axios'

const PeriphericCreation = () => {

    const { reportValueKind, subServers } = useContext(appContext)

    // Manejadores de los datos recolectados
    const [selectedActiontype, setSelectedActiontype] = useState(0)
    const [selectedReportValueKind, setSelectedReportValueKind] = useState(0)
    const [selectedSubServer, setSelectedSubServer] = useState(0)
    const [selectedDevice, setSelectedDevice] = useState(0)

    // Declaracion y asignacion de las listas de los select
    let i = 0
    const [actionTypeList, setActiontypes] = useState([])
    const [reportValueKindList, setReportValueKindList] = useState(reportValueKind.map(item => {
        let current = {value: i, label: item}
        i++
        return current
    }))
    const [aviableDevices, setAviableDevices] = useState([])
    const [aviableSubServers, setAviableSubServers] = useState(subServers.map(item => ({
        value: item.id,
        label: item.name
    })))

    // Funciones
    const submitPeripheral = () => {
        const name = document.getElementById('name').value

        const data = {
            subServerDeviceId: selectedDevice,
            name: name,
            actionType: selectedActiontype,
            reportValuekind: selectedReportValueKind
        }
        console.log(data)
    }

    async function getData() {
        let resActionTypes = await getPinActionTypesList()
        setActiontypes(resActionTypes.data.data.map(item => ({
            value: item.value,
            label: item.key
        })))
    }

    useEffect(() => {
        getData()
    }, [])

    async function getDevices(e) {
        let res = await getSubServerDevices(e)
        setAviableDevices(res.data.data.map(item => ({
            value: item.id,
            label: item.name
        })))
    }

    return(
        <div className="periphericCreation">
            <Form>
                <Form.Item name='name'>
                    <Input placeholder='Nombre'/>
                </Form.Item>
                <Form.Item label='Sub servidor'>
                    <Select
                        onChange={(e) => getDevices(e)}
                        options={aviableSubServers}
                    />
                </Form.Item>
                <Form.Item label='Dispositivo'>
                    <Select
                        onChange={(e) => setSelectedDevice(e)}
                        options={aviableDevices}
                    />
                </Form.Item>
                <Form.Item label='Action type'>
                    <Select
                        onChange={(e) => setSelectedActiontype(e)}
                        options={actionTypeList}
                    />
                </Form.Item>
                <Form.Item label='Report value kind'>
                    <Select
                        onChange={(e) => setSelectedReportValueKind(e)}
                        options={reportValueKindList}
                    />
                </Form.Item>
                <Button onClick={submitPeripheral}>Crear</Button>
            </Form>
        </div>
    )
}

export default PeriphericCreation