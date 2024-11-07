import { LeftOutlined, UserOutlined, DoubleRightOutlined } from "@ant-design/icons"
import { backButtonStyle } from '../AntDIconStyles'
import { useNavigate } from 'react-router-dom'
import { Button, Modal, Popconfirm } from 'antd'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { appContext } from '../context/appContext'
import { getAccountsAll, deleteRequestDelete, deleteUserAccount, getUsersAccesses } from '../client/ClientePrueba'

const AdminPanel = () => {
    const navigate = useNavigate()
    const [isExpanded, setIsExpanded] = useState(false)
    const { allUsers, setAllUsers, setSelectedUser, selectedUser } = useContext(appContext)
    const [open, setOpen] = useState(false)
    const [secondOpen, setSecondOpen] = useState(false)
    let userAcceses=[]
    let deleteToken 

    const showModal = () => {
        setOpen(true)
    }

    const showSecondModal = () => {
        setSecondOpen(true)
    }

    const handleCancel = () => {
        setOpen(false)
    }


    const toggleExpand = () => {
            setIsExpanded(!isExpanded);
        }

    async function getUsers(){
        let res = await getAccountsAll()
        setAllUsers(res.data.data)        
    }

    async function deleteUserRequest(selectedUser){
        let res = await deleteRequestDelete(selectedUser)
        deleteToken = res.data.data[0]
        console.log(deleteToken)
    }

    async function deleteUser(token){
        let res = await deleteUserAccount(token)
        console.log(res)
    }

    async function userAccesses(selectedUser){
        let res = await getUsersAccesses(selectedUser)
        userAcceses = res.data.data
        console.log(userAcceses)
    }

    useEffect(() => {
        getUsers()
        
    }, [])

    console.log(allUsers)
    //console.log(secondOpen)    

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
                                        <div key={item.id} className="ListItem" onClick={() => {setSelectedUser(item.id); showModal();}}>
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
                                    title="¿Qué desea hacer?"
                                    className="custom-modal"
                                    footer={
                                        [
                                            <Button key="subServers" onClick={() => userAccesses(selectedUser)}>
                                                Sub servidores
                                            </Button>,
                                            <Button key="info" onClick={() => navigate ('/editUser') }>
                                                Editar información
                                            </Button>,
                                                
                                            <Button key="permissions" onClick={() =>navigate ('/assignPermissions')}>
                                                Editar permisos
                                            </Button>,
                                            <Popconfirm
                                                title="¿Está seguro de que desea eliminar este usuario?"
                                                onConfirm={() => deleteUser(deleteToken)}
                                                okText="Sí"
                                                cancelText="No"
                                            >
                                                <Button key="delete" onClick={() => {deleteUserRequest(selectedUser); showSecondModal()}} >
                                                Eliminar usuario
                                                </Button>
                                            </Popconfirm>
                                            
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