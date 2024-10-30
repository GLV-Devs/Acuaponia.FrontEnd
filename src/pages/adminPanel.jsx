import { LeftOutlined, UserOutlined, DoubleRightOutlined } from "@ant-design/icons"
import { backButtonStyle } from '../AntDIconStyles'
import { useNavigate } from 'react-router-dom'
import { Button, Modal } from 'antd'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { appContext } from '../context/appContext'
import { getAccountsAll, getSubserverDevicePeripheralModel } from '../client/ClientePrueba'

const AdminPanel = () => {
    const navigate = useNavigate()
    const [isExpanded, setIsExpanded] = useState(false)
    const { allUsers, setAllUsers, setSelectedUser, selectedUser } = useContext(appContext)
    const [open, setOpen] = useState(false)

    const showModal = () => {
        setOpen(true)
    }

    const handleCancel = () => {
        setOpen(false)
    }

    const toggleExpand = () => {
            setIsExpanded(!isExpanded);
        }

    async function getUsers(){
        let res = await getAccountsAll()
        let prueba = await getSubserverDevicePeripheralModel()
        console.log(prueba)
        setAllUsers(res.data.data)
        
    }

    useEffect(() => {
        getUsers()
        
    }, [])
    

    return (
        <div className="adminPanel">
            <div className="upperBar">
                <div className="backButton"><LeftOutlined style={backButtonStyle} onClick={() => {navigate (-1)}}/></div>
                <h1>Panel de administración</h1>
            </div>
            <div className="Panel">
                <div className="Section1">
                    <h1>Usuarios</h1>
                    <div className={`BlockList ${isExpanded ? "expanded" : ""}`}>
                        {allUsers == null ? (
                            <>
                                
                            </>
                            ):(
                                <div className="List">
                                    { allUsers.map((item) => (
                                        <div key={item.id} className="ListItem" onClick={() => {setSelectedUser(item.id); showModal()}}>
                                            <div className="banner">
                                            <div className="userIcon"><UserOutlined style={{color:'#e95cff', fontSize:'45px'}}/></div>
                                            <div><DoubleRightOutlined rotate={315}/></div>
                                            </div>
                                            <div className='Info'>
                                                <h3>{item.realName}</h3>
                                                <h4>{item.userName}</h4>
                                                <h5>{item.email}</h5>
                                            </div>
                                        </div>
                                    ))}
                                    <Modal
                                    open={open}
                                    onCancel={handleCancel}
                                    title="¿Qué deseas editar?"
                                    className="custom-modal"
                                    
                                    footer={
                                        [
                                            <Button key="info" onClick={() => navigate ('/editUser') }>
                                                Info
                                            </Button>,
                                                
                                            <Button key="permissions" onClick={() =>navigate ('/assignPermissions')}>
                                                Permisos
                                            </Button>
                                        ]
                                    }
                                    >

                                    </Modal>
                                </div>
                            )}
                    </div>
                    <Button onClick={toggleExpand}>
                        {isExpanded ? "View Less" : "View More"}
                    </Button>
                </div> 
            </div>
        </div>
    )
}

export default AdminPanel