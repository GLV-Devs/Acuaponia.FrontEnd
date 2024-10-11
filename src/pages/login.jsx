import { Form, Input, Button, message } from 'antd'
import { encrypt } from '../functions/hash'
import { appContext } from '../context/appContext'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../client/ClientePrueba'
import { Spin } from 'antd'

const Login = () => {

    const [messageApi, contextHandler] = message.useMessage()
    const navigate = useNavigate()
    const { setLogged, setUserData } = useContext(appContext)
    const [error, setError] = useState('')
    const [errorDisplay, setErrorDisplay] = useState(false)
    const [loading, setLoading] = useState(false)
    

    const onSubmit = async () => {
        setLoading(true)
        let user = document.getElementById('User').value
        let password = document.getElementById('Password').value

        const data = {
            identifier: user,
            passwordSHA256: (await encrypt(password)).toUpperCase(),
        }
        console.log(data)
        let res = await login(data)
        console.log(res)
        if(res.status == 200){
            setLogged(true)
            setUserData(res.data)
            navigate('/Dashboard')
        }else if(res.status == 403){
            setLoading(false)
            messageApi.open({
                type: "error",
                content: 'Credenciales invalidas'
            })
        }else if(res.status == 401){
            setLoading(false)
            messageApi.open({
                type: "error",
                content: 'Contraseña invalida'
            })
        }else if(res.status == 500){
            setLoading(false)
            messageApi.open({
                type: "error",
                content: 'Error del servidor'
            })
        }else{
            setLoading(false)
            messageApi.open({
                type: 'error',
                content: 'Se volvio a apagar la base de datos ._.'
            })
        }
    }

    return(
        <div className='LoginPage'>
            {contextHandler}
            <Spin spinning={loading}>
            <Form className="loginForm"
                variant= 'filled'
                componentsize= 'large'
            >
                <h1>INICIAR SESIÓN</h1>
                <Form.Item
                    name='User'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese su usuario',
                        },
                    ]}
                >
                    <Input className='centeredPlaceholder' placeholder="Usuario..."disabled={loading}/>
                </Form.Item>
                
                <Form.Item
                    name='Password'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese su contraseña',
                        },
                    ]}
                >
                    <Input.Password className='customPassword' placeholder='      Su contraseña aquí...' disabled={loading}/>
                </Form.Item>

                { errorDisplay && <h2 style={{color: "tomato"}}>{error}</h2> }

                <Form.Item>
                    <Button className='logInButton' htmlType="submit" type="primary" onClick={onSubmit} disabled={loading}>
                        {loading ? (<Spin/>):(<>INICIAR</>)}
                    </Button>
                </Form.Item>
            </Form>
            </Spin>
        </div>
    )
}

export default Login