import { Form, Select, Input, DatePicker, Button, message } from 'antd'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postSubServerReport } from '../client/ClientePrueba'

const ReportCreation = () => {
    const navigate = useNavigate()
    
    const handleChange = (value) => {
        console.log(`selected ${value}`)
    }

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return(
        <div className='moduleCreation'>
            <Form className='creationForm'
                variant='filled'
                size='large'
            >
                <h1>Creacion de reportes</h1>

                <Form.Item
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
                        placeholder='Selecciona un sub servidor'
                        onChange={handleChange}
                    >
                        <Option value='subServer1'>Sub servidor 1</Option>
                        <Option value='subServer2'>Sub servidor 2</Option>
                        <Option value='subServer3'>Sub servidor 3</Option>
                    </Select>
                </Form.Item>
                <Form.Item
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
                        placeholder='Selecciona un dispositivo'
                        onChange={handleChange}
                    >
                        <Option value='device1'>Dispositivo 1</Option>
                        <Option value='device2'>Dispositivo 2</Option>
                        <Option value='device3'>Dispositivo 3</Option>
                    </Select>
                </Form.Item>
                <Form.Item
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
                        placeholder='Selecciona un periferico'
                        onChange={handleChange}
                    >
                        <Option value='peripheral1'>Periferico 1</Option>
                        <Option value='peripheral2'>Periferico 2</Option>
                        <Option value='peripheral3'>Periferico 3</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label='Fecha'
                    name='date'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor seleccione una fecha'
                        }
                    ]}>
                        <DatePicker onChange={onChange}/>
                    </Form.Item>
                <Form.Item
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
            </Form>
        
        </div>
    )
}

export default ReportCreation