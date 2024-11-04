import { Button, message, Steps, theme } from 'antd';
import { useNavigate } from 'react-router-dom'
import UserInfoCreation from '../components/UserInfoCreation'
import UserPermissionCreation from '../components/UserPermissionCreation'
import React, { useState } from 'react';

const steps = [
    {
        title: 'Informacion de Usuario',
        content: <UserInfoCreation/>,
    },
    {
        title: 'Permisos',
        content: <UserPermissionCreation/>,
    },
];

const UserCreation = () => {
    const navigate = useNavigate()    

    const [current, setCurrent] = useState(0);
    

    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

        return(
        <div className='moduleCreation'>
            <div className='steps'>
            <Steps current={current} items={items} />
                <div>{steps[current].content}</div>
                <div
                    style={{
                    marginTop: 10,
                    justifySelf: 'center',
                    }}
                >
                    {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Siguiente
                    </Button>
                    )}
                    {current > 0 && (
                    <Button
                        style={{
                        margin: '0 8px',
                        }}
                        onClick={() => prev()}
                    >
                        Anterior
                    </Button>
                    )}
                    {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Crear
                    </Button>
                    )}
                </div>
            </div>        
        </div>
    )
}

export default UserCreation