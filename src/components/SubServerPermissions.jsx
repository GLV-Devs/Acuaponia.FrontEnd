import { backButtonStyle, saveStyle } from '../AntDIconStyles'
import { LeftOutlined, SaveOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Switch, Select } from 'antd'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { appContext } from '../context/appContext'
import { patchEditSubServerAccess, getUsersAccesses } from '../client/ClientePrueba'

const AssignSubServerPermission = () => {

    const navigate = useNavigate()
    const { subServers, selectedUser } = useContext(appContext)
    const [selectedSubServer, setSelectedSubServer] = useState('')
    let subServersSelect
    let usersPermissions
    let currentSubServerAccess
    let currentBasePermissions
    let binaryPermissions
    let permissionsArray
    let currentPermissions
    let currentViewUsersWithAccessSwitch
    let currentManageSubServerSwitch
    
    
    const [viewUsersWithAccessSwitch, setViewUsersWithAccessSwitch] = useState(false)
    const [manageSubServerSwitch, setManageSubserverSwitch] = useState(false)

    function userAccesses(selectedUser){
        getUsersAccesses(selectedUser)
        .then (res => {
            usersPermissions = res.data.data[0]
            console.log(usersPermissions)
            currentBasePermissions = usersPermissions.basePermissions
            currentSubServerAccess = usersPermissions.subServerId
            binaryPermissions = currentBasePermissions.toString(2).padStart(2, '0')
            permissionsArray = binaryPermissions.split('')
            currentPermissions = permissionsArray.map(item => item == 1 ? true : false)
            currentViewUsersWithAccessSwitch = currentPermissions[0]
            currentManageSubServerSwitch = currentPermissions[1]
            
        })
    } 

    userAccesses(selectedUser)
    
    
    

    subServers.forEach(item => {
        if(subServersSelect == undefined){
            subServersSelect = [{value: item.id, label: item.name }]
        }else{
            subServersSelect = [...subServersSelect, {value: item.id, label: item.name }]
        }
    });    



    
    
    const onSubmit = async () => {

        let permissionData  = [
            manageSubServerSwitch,
            viewUsersWithAccessSwitch,
        ]
        
        let Permissions = permissionData.map(item => item ? 1 : 0).join("")
        let decimalPermissions = parseInt(Permissions, 2)

        console.log(selectedSubServer)
        console.log(selectedUser)
        console.log(decimalPermissions)

        let res = await patchEditSubServerAccess(selectedSubServer, selectedUser, decimalPermissions)
        
        
        console.log(res)
    }

    return (
        <div>
            <Form className='creationForm'
                variant='filled'
                size='small'
                layout='Horizontal'
            >
                <div className='upperBar'>
                    <LeftOutlined style={backButtonStyle} onClick={() => {navigate (-1)}}/>
                    <h1>Permisos de Sub Servidor</h1>
                    <Button onClick={onSubmit} shape='circle' size='large'><SaveOutlined style={saveStyle}/></Button>
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
                            defaultValue={currentSubServerAccess}
                        />
                    </Form.Item>
                    <Form.Item
                        name='viewUsers'
                    >
                        <div className='item'>
                            <p className='switchLabel'>Ver todos los usuarios con acceso al Sub Servidor</p>
                            <Switch onChange={(e) => setViewUsersWithAccessSwitch(e)} defaultValue={currentViewUsersWithAccessSwitch}/>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name='manageSubServer'
                    >
                        <div className='item'>
                            <p className='switchLabel'>Administrar Sub Servidor</p>
                            <Switch onChange={(e) => setManageSubserverSwitch(e)} defaultValue={currentManageSubServerSwitch}/>
                        </div>
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
}

export default AssignSubServerPermission