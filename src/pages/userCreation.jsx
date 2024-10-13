import { Form, Input, Button, message } from 'antd'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postCreateAccount } from '../client/ClientePrueba'
import { LeftOutlined } from '@ant-design/icons'
import { backButtonStyle } from '../AntDIconStyles'

const UserCreation = () => {
    const navigate = useNavigate()

    const onSubmit = async () => {
        let realName = document.getElementById('realName').value
        let userName = document.getElementById('userName').value
        let email = document.getElementById('email').value
        let phoneNumber = document.getElementById('phoneNumber').value
        let password = document.getElementById('password').value

        const data = {
            realName: realName,
            userName: userName,
            email: email,
            phoneNumber: phoneNumber,
            password: password,
        }
        console.log(data)
        let res = await postCreateAccount(data)
        console.log(res)
        if(res.status == 200){
            message.success('Usuario creado exitosamente')
            navigate('/Dashboard')
        }else if(res.status == 403){
            message.error('El usuario ya existe')
        }else{
            message.error('Error del servidor')
        }
    }


    return(
        <div className='moduleCreation'>
            <Form className='creationForm'
                variant='filled'
                size='small'
                layout='vertical'
            >
                <div className='upperBar'>
                    <LeftOutlined style={backButtonStyle} onClick={() => {navigate ('/Dashboard')}}/>
                    <h1>Creacion de Usuario</h1>
                </div>

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

                <Form.Item
                    className='labels'
                    label='Contraseña'
                    name='password'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese su contraseña',
                        },
                    ]}
                >
                    <Input.Password className='password' placeholder='     Contraseña...' />
                </Form.Item>
                <Form.Item>
                    <Button className='formButton' htmlType="submit" type="primary" onClick={onSubmit}>
                        CREAR
                    </Button>
                </Form.Item>
            </Form>
        
        </div>
    )
}

export default UserCreation