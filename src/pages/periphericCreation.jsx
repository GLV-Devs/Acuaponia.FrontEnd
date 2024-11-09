import { useContext, useEffect, useState } from 'react'
import { createNewPeripheral, getPinActionTypesList, getSubServerDevices, getPinActionFormData } from '../client/ClientePrueba'
import { Select, Input, Form, Button, InputNumber } from 'antd'
import { appContext } from '../context/appContext'
import DynamicFields from '../components/DynamicFields'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons'
import { backButtonStyle } from '../AntDIconStyles'

const PeriphericCreation = () => {

    const { reportValueKind, subServers, messageApi } = useContext(appContext)
    const navigate = useNavigate()

    // Manejadores de los datos recolectados
    const [selectedActionType, setSelectedActionType] = useState(0)
    const [selectedReportValueKind, setSelectedReportValueKind] = useState(0)
    const [selectedSubServer, setSelectedSubServer] = useState(0)
    const [selectedDevice, setSelectedDevice] = useState(0)
    const [selectedInterruptType, setSelectedInterruptType] = useState(0)
    const [selectedIsAnalog, setSelectedIsAnalog] = useState(0)
    const [selectedPin, setSelectedPin] = useState(0)
    const [selectedSecondsDelay, setSelectedSecondsDelay] = useState(0)
    const [selectedReadType, setSelectedReadType] = useState(0)
    const [selectedReadTypeParameter, setSelectedReadTypeParameter] = useState(0)
    const [selectedInput, setSelectedInput] = useState(0)
    const [selectedSignal, setSelectedSignal] = useState(0)
    const [selectedDelayToActivate, setSelectedDelayToActivate] = useState(0)
    const [selectedDelayTodeActivate, setSelectedDelayToDectivate] = useState(0)
    const [selectedOutput, setSelectedOutput] = useState(0)
    const [selectedInterval, setSelectedInterval] = useState(0)
    const [selectedEcho, setSelectedEcho] = useState(0)
    const [selectedTrigger, setSelectedTrigger] = useState(0)

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
    const [fullFieldsList, setFullFieldsList] = useState([])
    const [fieldList, setFieldList] = useState([])

    // Funciones
    const submitPeripheral = async () => {
        const name = document.getElementById('name').value
        let pins = []

        if(selectedActionType == 0){
            pins = [0]
        }else if(selectedActionType == 1){
            pins = [Number(selectedInput), Number(selectedSecondsDelay), selectedIsAnalog]
        }else if(selectedActionType == 2){
            pins = [Number(selectedPin), selectedInterruptType, Number(selectedReadType), Number(selectedReadTypeParameter)]
        }else if(selectedActionType == 3 || selectedActionType == 4){
            pins = [Number(selectedOutput), selectedDelayToActivate, selectedDelayTodeActivate]
        }else if(selectedActionType == 5 || selectedActionType == 6){
            pins = [Number(selectedOutput), selectedSignal, selectedInterruptType]
        }else if(selectedActionType == 3){
            pins = [Number(selectedEcho), Number(selectedTrigger), Number(selectedInterval)]
        }

        const data = {
            subServerDeviceId: selectedDevice,
            name: name,
            actionType: selectedActionType,
            reportValuekind: selectedReportValueKind,
            pins: pins
        }

        console.log(data)

        let res = await createNewPeripheral(data)
        if (res.status == 200){
            messageApi.open({
                type: 'success',
                content: 'Periferico creado con exito'
            })
            navigate(-1)
        }else{
            messageApi.open({
                type: 'error',
                content: 'Ah ocurrido un error'
            })
        }
    }

    async function getData() {
        let resActionTypes = await getPinActionTypesList()
        setActiontypes(resActionTypes.data.data.map(item => ({
            value: item.value,
            label: item.key
        })))

        let resFields = await getPinActionFormData()
        setFullFieldsList(resFields.data.data)
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

    async function getFields(e) {
        setSelectedActionType(e)
        setFieldList(fullFieldsList.find(item => item.actionTypeId == e).fields)
        console.log(fullFieldsList.find(item => item.actionTypeId == e).fields)
    }

    return(
        <div className="periphericCreation">
            <Form
                variant='filled'
            >
                <div className='formContainer'>
                    <div className='upperBar2'>
                        <LeftOutlined style={backButtonStyle} onClick={() => {navigate ('/Dashboard')}}/>
                        <h1>Creacion de Periférico</h1>
                    </div>
                    <form className='form'>
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
                            onChange={(e) => getFields(e)}
                            options={actionTypeList}
                        />
                    </Form.Item>

                    <DynamicFields
                        selectedActionType={selectedActionType}
                        setSelectedInput={setSelectedInput}
                        setSelectedSecondsDelay={setSelectedSecondsDelay}
                        setSelectedIsAnalog={setSelectedIsAnalog}
                        setSelectedSignal={setSelectedSignal}
                        setSelectedInterruptType={setSelectedInterruptType}
                        setSelectedReadType={setSelectedReadType}
                        setSelectedReadTypeParameter={setSelectedReadTypeParameter}
                        setSelectedDelayToActivate={setSelectedDelayToActivate}
                        setSelectedDelayToDeactivate={setSelectedDelayToDectivate}
                        setSelectedOutput={setSelectedOutput}
                        setSelectedInterval={setSelectedInterval}
                        setSelectedEcho={setSelectedEcho}
                        setSelectedTrigger={setSelectedTrigger}
                    />

                    <Form.Item label='Report value kind'>
                        <Select
                            onChange={(e) => setSelectedReportValueKind(e)}
                            options={reportValueKindList}
                        />
                    </Form.Item>
                    <Button onClick={submitPeripheral}>Crear</Button>
                    </form>
                </div>
            </Form>
        </div>
    )
}

export default PeriphericCreation