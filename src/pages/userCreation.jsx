import { Button, message, Steps, theme } from 'antd';
import { useNavigate } from 'react-router-dom'
import UserInfoCreation from '../components/UserInfoCreation'
import UserPermissionCreation from '../components/UserPermissionCreation'
import React, { useState } from 'react';


const UserCreation = () => {  

    const navigate = useNavigate()    

    const [current, setCurrent] = useState(0);
    

    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };

    const steps = [
        {
            title: 'Informacion de Usuario',
            content: <UserInfoCreation submit={next}/>,
        },
        {
            title: 'Permisos',
            content: <UserPermissionCreation/>,
        },
    ] 

    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    

        return(
        <div className='moduleCreation'>
            <div className='steps'>
            <Steps current={current} items={items} style={{marginBottom:10}} />
                <div>{steps[current].content}</div>
                <div
                    style={{
                    marginTop: 10,
                    justifySelf: 'center',
                    }}
                >
                    
                </div>
            </div>        
        </div>
    )
}

export default UserCreation