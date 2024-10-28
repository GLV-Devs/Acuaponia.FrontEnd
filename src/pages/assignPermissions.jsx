import { backButtonStyle, saveStyle } from '../AntDIconStyles'
import { CheckCircleFilled, LeftOutlined, SaveOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Switch } from 'antd'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { appContext } from '../context/appContext'
import { patchAdjustUserPermissions } from '../client/ClientePrueba'


const AssignPermissions = () => {

    const navigate = useNavigate()
    const { selectedUser } = useContext(appContext)

    const [viewUsersSwitch, setViewUsersSwitch] = useState(false)
    const [viewUsersEmailSwitch, setViewUsersEmailSwitch] = useState(false)
    const [viewUsersSubServerAccessSwitch, setViewUsersSubServerAccessSwitch] = useState(false)
    const [editUserPermissionsSwitch, setEditUserPermissionsSwitch] = useState(false)
    const [deleteUsersSwitch, setDeleteUsersSwitch] = useState(false)
    const [deleteUSerSelfSwitch, setDeleteUSerSelfSwitch] = useState(false)
    const [editUsersSwitch, setEditUsersSwitch] = useState(false)
    const [downloadFirmwareBinariesSwitch, setDownloadFirmwareBinariesSwitch] = useState(false)
    const [manageFirmwareSwitch, setManageFirmwareSwitch] = useState(false)
    const [viewAllSubServersSwitch, setViewAllSubServersSwitch] = useState(false)
    const [manageSubServersLoginsSwitch, setManageSubServersLoginsSwitch] = useState(false)
    
    const onSubmit = async () => {
        let data  = [
            manageSubServersLoginsSwitch,
            viewAllSubServersSwitch,
            manageFirmwareSwitch,
            downloadFirmwareBinariesSwitch,
            editUsersSwitch,
            deleteUSerSelfSwitch,
            deleteUsersSwitch,
            editUserPermissionsSwitch,
            viewUsersSubServerAccessSwitch,
            viewUsersEmailSwitch,
            viewUsersSwitch
        ]
        
        let Permissions = data.map(item => item ? 1 : 0).join("")
        let decimalPermissions = parseInt(Permissions, 2)

        let res = await patchAdjustUserPermissions(selectedUser, decimalPermissions)
        
        
        console.log(res)
        console.log(decimalPermissions)
    }



    console.log(selectedUser)
    return (
        <div className='modulePermissions'>
            <Form className='creationForm'
                variant='filled'
                size='small'
                layout='vertical'
            >
                <div className='upperBar'>
                    <LeftOutlined style={backButtonStyle} onClick={() => {navigate (-1)}}/>
                    <h1>Permisos de Usuario</h1>
                    <Button onClick={onSubmit} shape='circle' size='large'><SaveOutlined style={saveStyle}/></Button>
                </div>
                <div className='permissions'>
                    <Form.Item
                        name='viewUsers'
                    >
                        <div className='item'>
                            <p className='switchLabel'>Ver todos los usuarios</p>
                            <Switch onChange={(e) => setViewUsersSwitch(e)}/>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name='viewUsersEmail'
                    >
                        <div className='item'>
                            <p className='switchLabel'>Ver correo de los usuarios</p>
                            <Switch onChange={(e) => setViewUsersEmailSwitch(e)}/>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name='viewUsersSubServerAccess'
                    >
                        <div className='item'>
                            <p className='switchLabel'>Ver Subservidores a los que acceden otros usuarios</p>
                            <Switch onChange={(e) => setViewUsersSubServerAccessSwitch(e)}/>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name='editUserPermissions'
                    >
                        <div className='item'>
                            <p className='switchLabel'>Editar permisos de usuarios</p>
                            <Switch onChange={(e) => setEditUserPermissionsSwitch(e)}/>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name='deleteUsers'
                    >
                        <div className='item'>
                            <p className='switchLabel'>Eliminar usuarios</p>
                            <Switch onChange={(e) => setDeleteUsersSwitch(e)}/>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name='deleteUSerSelf'
                    >
                        <div className='item'>
                            <p className='switchLabel'>Eliminar usuario propio</p>
                            <Switch onChange={(e) => setDeleteUSerSelfSwitch(e)}/>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name='editUsers'
                    >
                        <div className='item'>
                            <p className='switchLabel'>Editar usuarios</p>
                            <Switch onChange={(e) => setEditUsersSwitch(e)}/>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name='downloadFirmwareBinaries'
                    >
                        <div className='item'>
                            <p className='switchLabel'>Descargar binarios de Firmware</p>
                            <Switch onChange={(e) => setDownloadFirmwareBinariesSwitch(e)}/>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name='manageFirmware'
                    >
                        <div className='item'>
                            <p className='switchLabel'>Manipular Firmwares</p>
                            <Switch onChange={(e) => setManageFirmwareSwitch(e)}/>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name='viewAllSubServers'
                    >
                        <div className='item'>
                            <p className='switchLabel'>Ver todos los sub servidores</p>
                            <Switch onChange={(e) => setViewAllSubServersSwitch(e)}/>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name='manageSubServersLogins'
                    >
                        <div className='item'>
                            <p className='switchLabel'>Administrar sesiones de SubServidor</p>
                            <Switch onChange={(e) => setManageSubServersLoginsSwitch(e)}/>
                        </div>
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
}

export default AssignPermissions