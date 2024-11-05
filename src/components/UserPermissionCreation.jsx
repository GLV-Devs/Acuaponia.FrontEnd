import { backButtonStyle, saveStyle } from '../AntDIconStyles'
import { LeftOutlined, SaveOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Switch, Select, message } from 'antd'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { appContext } from '../context/appContext'
import { postSubServerPermissions, getUsersAccesses } from '../client/ClientePrueba'

const UserPermissionCreation = () => {

    const navigate = useNavigate()
    const { subServers, selectedUser } = useContext(appContext)
    const [selectedSubServer, setSelectedSubServer] = useState('')
    const [loading, setLoading] = useState(false)
    const [viewUsersWithAccessSwitch, setViewUsersWithAccessSwitch] = useState(false)
    const [manageSubServerSwitch, setManageSubserverSwitch] = useState(false)
    let subServersSelect

    subServers.forEach(item => {
        if(subServersSelect == undefined){
            subServersSelect = [{value: item.id, label: item.name }]
        }else{
            subServersSelect = [...subServersSelect, {value: item.id, label: item.name }]
        }
    });

    const onSubmit = async () => {
        setLoading(true)

        let permissionData  = [
            viewUsersWithAccessSwitch,
            manageSubServerSwitch,
        ]
        
        let Permissions = permissionData.map(item => item ? 1 : 0).join("")
        let decimalPermissions = parseInt(Permissions, 2)

        let data = {
            userId: selectedUser,
            subServerId: selectedSubServer,
            basePermissions: decimalPermissions
        }

        let res = await postSubServerPermissions(data)
        if(res.status == 200){
            message.success('Permisos de Sub Servidor creados exitosamente')
            navigate('/Dashboard')
        }else if(res.status == 403){
            setLoading(false)
            message.error('El usuario ya tiene permisos en este sub servidor')
        }else{
            setLoading(false)
            message.error('Error del servidor')
        }    

        
        console.log(selectedSubServer)
        console.log(decimalPermissions)
        console.log(res)
    }

    return(
        <div>
            <Form className='creationForm'
                variant='filled'
                size='small'
                layout='Horizontal'
                disabled={loading}
            >
                <div className='upperBar'>
                    <LeftOutlined style={backButtonStyle} onClick={() => {navigate (-1)}}/>
                    <h1>Permisos de Sub Servidor</h1>
                </div>
                <div className='permissions'>
                    <Form.Item
                        className='item'
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
                            onChange={(e) => setSelectedSubServer(e)}
                            options={subServersSelect}
                        />
                    </Form.Item>
                    <Form.Item
                        name='viewUsers'
                    >
                        <div className='item'>
                            <p className='switchLabel'>Ver todos los usuarios con acceso al Sub Servidor</p>
                            <Switch onChange={(e) => setViewUsersWithAccessSwitch(e)}/>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name='manageSubServer'
                    >
                        <div className='item'>
                            <p className='switchLabel'>Administrar Sub Servidor</p>
                            <Switch onChange={(e) => setManageSubserverSwitch(e)}/>
                        </div>
                    </Form.Item>
                    <Form.Item>
                    <Button onClick={onSubmit}>{loading ? 'Cargando...' : 'Crear'}</Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
}

export default UserPermissionCreation