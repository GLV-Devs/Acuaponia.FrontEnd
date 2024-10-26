import { backButtonStyle } from '../AntDIconStyles'
import { LeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Switch } from 'antd'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { appContext } from '../context/appContext'


const AssignPermissions = () => {

    const navigate = useNavigate()
    const { selectedUser } = useContext(appContext)
    console.log(selectedUser)
    return (
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
                    className='item'
                    name='viewUsers'
                >
                    <p className='switchLabel'>Ver todos los usuarios</p><Switch/>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AssignPermissions