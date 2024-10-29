import { Form, Input, Button, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { appContext } from '../context/appContext'
import { patchUpdateAccount } from '../client/ClientePrueba'
import { LeftOutlined, SaveOutlined } from '@ant-design/icons'
import { backButtonStyle, saveStyle } from '../AntDIconStyles'

const EditUser = () => {
    const navigate = useNavigate()
    const { selectedUser } = useContext(appContext)
    
    const onSubmit = async () => {
        let realName = document.getElementById('realName').value
        let userName = document.getElementById('userName').value
        let email = document.getElementById('email').value
        let phoneNumber = document.getElementById('phoneNumber').value

        const data = {
            realName: realName,
            userName: userName,
            email: email,
            phoneNumber: phoneNumber,
        }

        
        let res = await patchUpdateAccount(selectedUser, data)
        console.log(res)
        if(res.status == 200){
            message.success('Usuario se ha modificado exitosamente')
            navigate('/Dashboard')
        }else if(res.status == 403){
            message.error('El usuario ya existe')
        }else{
            message.error('Error del servidor')
        }
    }

    return (
        <div className='moduleCreation'>
            <Form className='creationForm'
                variant='filled'
                size='small'
                layout='vertical'
            >
                <div className='upperBar'>
                    <LeftOutlined style={backButtonStyle} onClick={() => {navigate (-1)}}/>
                    <h1>Modificar Usuario</h1>
                    <Button onClick={onSubmit} shape='circle' size='large'><SaveOutlined style={saveStyle}/></Button>
                </div>
                
                <div className='form'>
                    <Form.Item
                        className='labels'
                        label='Nombre'
                        name='realName'
                        rules={[
                            {
                                required: true,
                                message: 'Por favor ingrese su nombre',
                            },
                        ]}
                    >
                        <Input placeholder="Nombre..."/>
                    </Form.Item>

                    <Form.Item
                        className='labels'
                        label='Usuario'
                        name='userName'
                        rules={[
                            {
                                required: true,
                                message: 'Por favor ingrese su usuario',
                            },
                        ]}
                    >
                        <Input placeholder="Usuario..."/>
                    </Form.Item>

                    <Form.Item
                        className='labels'
                        label='Correo'
                        name='email'
                        rules={[
                            {
                                type: 'email',
                                required: true,
                                message: 'Por favor ingrese su correo',
                            },
                        ]}
                    >
                        <Input placeholder="Correo..."/>
                    </Form.Item>

                    <Form.Item
                        className='labels'
                        label='Telefono'
                        name='phoneNumber'
                        rules={[
                            {
                                required: true,
                                message: 'Por favor ingrese su numero de telefono',
                            },
                        ]}
                    >
                        <Input placeholder="Numero de telefono..."/>
                    </Form.Item>
                </div>
            </Form>
        
        </div>
    )  
}

export default EditUser