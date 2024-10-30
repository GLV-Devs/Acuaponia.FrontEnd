import { Form, Input, Button, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { encrypt } from '../functions/hash'
import { patchChangePassword } from '../client/ClientePrueba'
import { LeftOutlined, SaveOutlined } from '@ant-design/icons'
import { backButtonStyle, saveStyle } from '../AntDIconStyles'
import { useState } from 'react'

const EditPassword = () => {

    const navigate = useNavigate()
    const [ unconfirmedPassword, setUnconfirmedPassword ] = useState('a')
    const [ confirmedPassword, setConfirmedPassword ] = useState('b')
    const [ inputChange, setInputChange ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState(false)

    function showMessage() {
        if(inputChange == true){
            if(unconfirmedPassword != confirmedPassword){
                return false
            }else{
                return true
            }
        } else {
            return true
        }
    }

    const onSubmit = async () => {
        let oldPassword = document.getElementById('oldPassword').value
        let newPassword = document.getElementById('newPassword').value

        const data = {
            oldPasswordSHA256: (await encrypt(oldPassword)).toUpperCase(),
            newPassword: newPassword
        }

        let res = await patchChangePassword(data)
        console.log(res)
        if(res.status == 200){
            message.success('Contraseña se ha modificado exitosamente')
            navigate('/Profile')
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
                    <Button onClick={onSubmit} shape='circle' size='large' disabled = { unconfirmedPassword != confirmedPassword }><SaveOutlined style={saveStyle}/></Button>
                </div>
                
                <div className='form'>
                <Form.Item
                        className='labels'
                        label='Contraseña Actual'
                        name='oldPassword'
                        rules={[
                            {
                                required: true,
                                message: 'Por favor ingrese su contraseña',
                            },
                        ]}
                    >
                        <Input.Password className='password' placeholder='     Contraseña actual...'/> 
                    </Form.Item>
                    <Form.Item
                        className='labels'
                        label='Nueva Contraseña'
                        name='newPassword'
                        rules={[
                            {
                                required: true,
                                message: 'Por favor ingrese su nueva contraseña',
                            },
                        ]}
                    >
                        <Input.Password className='password' placeholder='     Nueva contraseña...' onChange = {(e) => {setUnconfirmedPassword(e.target.value); setInputChange(true) }}  />
                    </Form.Item>
                    <Form.Item
                        className='labels'
                        label='Confirme la Nueva Contraseña'
                        name='ConfirmPassword'
                        rules={[
                            {
                                required: true,
                                message: 'Por favor ingrese su nueva contraseña',
                            },
                        ]}
                    >
                        <Input.Password className='password' placeholder='     Nueva contraseña...' onChange = {(e) => setConfirmedPassword(e.target.value)}/>
                    </Form.Item>
                    { showMessage() ? null : <p style={{color: 'red'}}>Las contraseñas no coinciden</p>}
                </div>
            </Form>
        </div>
    );
}

export default EditPassword;