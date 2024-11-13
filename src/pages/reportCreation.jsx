import { Form, Select, Input, DatePicker, Button, message } from 'antd'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postSubServerReport, getSubServerDevices, getSubserverDevicePeripheral } from '../client/ClientePrueba'
import { appContext } from '../context/appContext'

const ReportCreation = () => {
    const navigate = useNavigate()
    const { subServers, subServerDevices, setSubServerDevices, devicePeripherals, setDevicePeripherals } = useContext(appContext)
    
    // Declaracion y asignacion de las listas para los select
    const [aviablePeripherals, setAviablePeripherals] = useState([])
    const [aviableDevices, setAviableDevices] = useState([])
    const [aviableSubServers, setAviableSubServers] = useState(subServers.map(item => ({value: item.id, label: item.reportedName })))

    // Declaracion de los valores seleccionados
    const [selectedSubServer, setSelectedSubServer] = useState('')
    const [selectedDevice, setSelectedDevice] = useState('')
    const [selectedPeripheral, setSelectedPeripheral] = useState('')
    const [selectedDate, setSelectedDate] = useState(null)

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    const handleSubmit = async () => {
        const valueField = document.getElementById('value').value

        let date
        if(selectedDate == null){
            date = new Date()
        }else{
            date = selectedDate
        }

        const data = {
            deviceId: selectedDevice,
            dateRecorded: date,
            deviceIndex: selectedPeripheral,
            value: valueField,
        }
        let res = await postSubServerReport(data)
        console.log(res)
    }

    async function getAviableDevices(e){
        console.log(e)
        setSelectedSubServer(e)
        let res = await getSubServerDevices(e)
        console.log(res)
        setAviableDevices(res.data.data.map(item => ({
            value: item.id,
            label: item.name
        })))
    }

    async function getAviablePeripherals(e){
        console.log(e)
        setSelectedDevice(e)
        let res = await getSubserverDevicePeripheral(e)
        console.log(res)
        setAviablePeripherals(res.data.data.map(item => ({
            value: item.index,
            label: item.name
        })))
    }

    return(
        <div className='moduleCreation'>
            <Form className='creationForm'
                variant='filled'
                size='large'
            >
                <h1>Creacion de reportes</h1>

                <Form.Item
                    className='FormItem'
                    label='Sub servidor'
                    name='subServer'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor seleccione un sub servidor'
                        }
                    ]}
                >
                    <Select
                        className='Select'
                        placeholder='Selecciona un sub servidor'
                        options={aviableSubServers}
                        onChange={(e) => getAviableDevices(e)}
                    />
                </Form.Item>
                <Form.Item
                    className='FormItem'
                    label='Dispositivo'
                    name='device'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor seleccione un dispositivo'
                        }
                    ]}
                >
                    <Select
                        className='Select'
                        placeholder='Selecciona un dispositivo'
                        onChange={(e) => getAviablePeripherals(e)}
                        options={aviableDevices}
                    />
                </Form.Item>
                <Form.Item
                    className='FormItem'
                    label='Periferico'
                    name='peripheral'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor seleccione un periferico'
                        }
                    ]}
                >
                    <Select
                        className='Select'
                        placeholder='Selecciona un periferico'
                        onChange={(e) => setSelectedPeripheral(e)}
                        options={aviablePeripherals}
                    />
                </Form.Item>
                <Form.Item
                    className='FormItem'
                    label='Fecha'
                    name='date'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor seleccione una fecha'
                        }
                    ]}>
                        <DatePicker onChange={(a, b) => setSelectedDate(b)}/>
                    </Form.Item>
                <Form.Item
                    className='FormItem'
                    label='Valor'
                    name='value'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese un valor'
                        }
                    ]}
                >
                    <Input placeholder='Valor'/>
                </Form.Item>
                <Button onClick={handleSubmit}>Crear</Button>
            </Form>
        
        </div>
    )
}

export default ReportCreation