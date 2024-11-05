import { Form, Input, Button, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { postCreateAccount } from '../client/ClientePrueba'
import { LeftOutlined } from '@ant-design/icons'
import { backButtonStyle } from '../AntDIconStyles'
import { useState } from 'react'
import { appContext } from '../context/appContext'
import { useContext } from 'react'

const UserInfoCreation = ({submit}) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const { setSelectedUser } = useContext(appContext)

    const onSubmit = async (values) => {
        setLoading(true)
        // let realName = document.getElementById('realName').value
        // let userName = document.getElementById('userName').value
        // let email = document.getElementById('email').value
        // let phoneNumber = document.getElementById('phoneNumber').value
        // let password = document.getElementById('password').value

        const data = {
            realName: values.realName,
            userName: values.userName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            password: values.password,
        }
        console.log(data)
        let res = await postCreateAccount(data)

        console.log(res)
        if(res.status == 200){
            message.success('Usuario creado exitosamente')
            setSelectedUser(res.data.data[0].id)
            submit()
        }else if(res.status == 400){
            
        }else if(res.status == 403){
            message.error('El usuario ya existe')
            setLoading(false)
        }else{
            message.error('Error del servidor')
            setLoading(false)
        }
    }


    return(
        <div>
            <Form className='creationForm'
                variant='filled'
                size='small'
                layout='vertical'
                disabled={loading}
                onFinish= {(values)=>{onSubmit(values)}}
            >
                <div className='upperBar2'>
                    <LeftOutlined style={backButtonStyle} onClick={() => {navigate ('/Dashboard')}}/>
                    <h1>Creacion de Usuario</h1>
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
                        <Button className='formButton' htmlType='submit'  type="primary" >
                            {loading ? 'Cargando...' : 'Crear'}
                        </Button>
                    </Form.Item>

                </div>
            </Form>
        
        </div>
    )
}

export default UserInfoCreation