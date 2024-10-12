import { Form, Input, Button, message } from 'antd'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postSubServerReport } from '../client/ClientePrueba'

const ReportCreation = () => {
    const navigate = useNavigate()

    return(
        <div className='moduleCreation'>
            <Form className='creationForm'
                variant='filled'
                size='large'
            >
                <h1>Creacion de reportes</h1>
            </Form>
        
        </div>
    )
}

export default ReportCreation