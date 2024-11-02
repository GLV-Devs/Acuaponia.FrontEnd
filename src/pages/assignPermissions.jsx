import { Tabs } from 'antd';
import AssignGlobalPermission from '../components/GlobalPermissions';
import AssignSubServerPermission from '../components/SubServerPermissions';


const AssignPermissions = () => {

    const onChange = (key) => {
        console.log(key);
    }

    const items = [
        {
            key: '1',
            label: 'Permisos Globales',
            children: <AssignGlobalPermission/>,
        },
        {
            key: '2',
            label: 'Permisos de Subservidor',
            children: <AssignSubServerPermission/>,
        },
    ];
    
    
    return (
        <div className='modulePermissions'>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange}/>
        </div>
    )
}

export default AssignPermissions