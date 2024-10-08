import { Form, Input, Button } from 'antd'

const Login = () => {

    const onSubmit = () => {
        let usuario = document.getElementById('Usuario').value
        let contraseña = document.getElementById('Password').value
    }

    return(
        <div className='LoginPage'>
            <Form className="loginForm"
                variant= 'filled'
                componentsize= 'large'
            >
                <h1>Iniciar sesion</h1>
                <Form.Item
                    name='Usuario'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese un correo electronico valido',
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
                    <Input.Password className='centeredPlaceholder' placeholder='Su contraseña aquí...'/>
                </Form.Item>

                <Form.Item>
                    <Button htmlType="submit" type="primary">
                        Iniciar
                    </Button>
                </Form.Item>
            </Form>
        
        </div>
    )
}

export default Login