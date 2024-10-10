import { Form, Input, Button } from 'antd'
import {encrypt} from '../functions/hash'
import { appContext } from '../context/appContext'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const [messageApi, contextHandler] = message.useMessage()
    const navigate = useNavigate()
    const { client } = useContext(appContext)
    const [error, setError] = useState('')
    const [errorDisplay, setErrorDisplay] = useState(false)

    const onSubmit = async () => {
        let user = document.getElementById('User').value
        let password = document.getElementById('Password').value

        const data = {
            user: user,
            passwordSHA256: await encrypt(password),
        }
        let res = await client.identity.login(data)
        console.log(res)
        if(res.status == 200){
            setLogged(true)
            setUserData(res.data)
            navigate('/Dashboard')
        }else if(res.status == 403){
            messageApi.open({
                type: "error",
                content: 'Usuario no encontrado'
            })
        }else if(res.status == 401){
            messageApi.open({
                type: "error",
                content: 'Contraseña invalida'
            })
        }else if(res.status == 500){
            messageApi.open({
                type: "error",
                content: 'Error del servidor'
            })
        }    
    }

    return(
        <div className='LoginPage'>
            {contextHandler}
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
                    <Input className='centeredPlaceholder' placeholder="Usuario..."/>
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
                    <Input.Password className='customPassword' placeholder='      Su contraseña aquí...'/>
                </Form.Item>

                {/* { errorDisplay && <h2 style={{color: "tomato"}}>{error}</h2> } */}

                <Form.Item>
                    <Button className='logInButton' htmlType="submit" type="primary">
                        INICIAR
                    </Button>
                </Form.Item>
            </Form>
        
        </div>
    )
}

export default Login