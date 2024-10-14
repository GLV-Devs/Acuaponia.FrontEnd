import { Form, Select, Input, DatePicker, Button, message } from 'antd'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postSubServerReport } from '../client/ClientePrueba'
import { appContext } from '../context/appContext'

const ReportCreation = () => {
    const navigate = useNavigate()
    const { subServers, subServerDevices, devicePeripherals } = useContext(appContext)
    let subServersSelect
    let subServerDevicesSelect
    let devicePeripheralsSelect
    const [selectedDevice, setSelectedDevice] = useState('')
    const [selectedPeripheral, setSelectedPeripheral] = useState('')
    const [selectedDate, setSelectedDate] = useState(null)

    subServers.forEach(item => {
        if(subServersSelect == undefined){
            subServersSelect = [{value: item.id, label: item.name }]
        }else{
            subServersSelect = [...subServersSelect, {value: item.id, label: item.name }]
        }
    });

    subServerDevices.forEach(item => {
        if(subServerDevicesSelect == undefined){
            subServerDevicesSelect = [{value: item.id, label: item.name }]
        }else{
            subServerDevicesSelect = [...subServerDevicesSelect, {value: item.id, label: item.name }]
        }
    });

    devicePeripherals.forEach(item => {
        if(devicePeripheralsSelect == undefined){
            devicePeripheralsSelect = [{value: item.index, label: item.name }]
        }else{
            devicePeripheralsSelect = [...devicePeripheralsSelect, {value: item.index, label: item.name }]
        }
    });

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
                        options={subServersSelect}
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
                        onChange={(e) => setSelectedDevice(e)}
                        options={subServerDevicesSelect}
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
                        options={devicePeripheralsSelect}
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