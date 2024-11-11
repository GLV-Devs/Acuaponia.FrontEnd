import { Input, Button, Skeleton } from "antd"
import { useContext, useEffect, useState } from "react"
import { DoubleRightOutlined, AppstoreAddOutlined, SlidersOutlined, ExportOutlined, SwapRightOutlined } from "@ant-design/icons"
import { getSubServers } from '../client/ClientePrueba'
import { appContext } from '../context/appContext'
import { useNavigate } from "react-router-dom"

const SubServerSearch = () => {

    const {subServers, setCurrentSubServer} = useContext(appContext)
    const [showList, setShowList] = useState(subServers)
    const navigate = useNavigate()

    // console.log(subServers)
    const slideStyle = {
        color: '#587099',
        fontSize: '20px',
    }
    const exportStyle = {
        color: '#ffb700',
        fontSize: '25px',
        
    }

    const handleSearch = (e) => {
        setShowList(subServers.filter(item => (item.givenName && item.givenName.toLowerCase().includes(e.toLowerCase())) || (item.reportedName && item.reportedName.toLowerCase().includes(e.toLowerCase()))))
        console.log(subServers.filter(item => (item.givenName && item.givenName.toLowerCase().includes(e.toLowerCase())) || (item.reportedName && item.reportedName.toLowerCase().includes(e.toLowerCase()))))
    }

    return(
        <div className='SubServerSearch'>
            <h1 className='title'>Sub Servidores</h1>
            {subServers == null ? (
                <>    
                    <Skeleton active/>
                    <Skeleton active/>
                </>
            ):(
                <>
                    <div className="searchBar">
                        <Input className='inputSearchBar' variant='filled' placeholder="Buscar..." onChange={(e) => handleSearch(e.target.value)}/>
                        <SlidersOutlined style={slideStyle}/>
                        <Button className='buttonExport' type="text"> <ExportOutlined style={exportStyle}/> </Button>
                    </div>

                    <div className="content">
                        <div className="LatPanel">
                            { subServers.map((item) => (
                                <div key={item.id} className="ListItem" onClick={() => {setCurrentSubServer(item.id); navigate('/SubServer')}}>
                                    <div className="left">
                                        <SwapRightOutlined/>
                                        <p>{ item.givenName ? (item.givenName):(item.reportedName) }</p>
                                    </div>
                                    <div className='badge'></div>
                                </div>
                            ))}
                        </div>
                        <div className="BlockList">
                            { showList.map((item) => (
                                <div key={item.id} className="ListItem" onClick={() => {setCurrentSubServer(item.id); navigate('/SubServer')}}>
                                    <div className="banner">
                                        <div className="subServerIcon"><AppstoreAddOutlined style={{color:'#e95cff', fontSize:'45px'}}/></div>
                                        <div><DoubleRightOutlined rotate={315}/></div>
                                    </div>
                                    <div className='Info'>
                                        <h3>{ item.givenName ? (item.givenName):(item.reportedName) }</h3>
                                        <h5>Last heart beat: {Date(item.lastHeartbeat)}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>      
                </>
            )}
        </div>
    )
}

export default SubServerSearch