import { Input, Button } from "antd"
import { useContext, useEffect, useState } from "react"
import { DoubleRightOutlined, AppstoreAddOutlined, SlidersOutlined, ExportOutlined, SwapRightOutlined } from "@ant-design/icons"
import { getSubServers } from '../client/ClientePrueba'
import { appContext } from '../context/appContext'

const SubServerSearch = () => {

    const {subServers} = useContext(appContext)

    return(
        <div className='SubServerSearch'>
            <div className="searchBar">
                <Input placeholder="Buscar..."/>
                <SlidersOutlined/>
                <Button> <ExportOutlined/> </Button>
            </div>

            <div className="content">
                <div className="LatPanel">
                    { subServers.map((item) => (
                        <div key={item.id} className="ListItem">
                            <SwapRightOutlined/>
                            <p>{item.id}</p>
                            <div className='badge'></div>
                        </div>
                    ))}
                </div>
                <div className="BlockList">
                    { subServers.map((item) => (
                        <div key={item.id} className="ListItem">
                            <div>
                                <div><AppstoreAddOutlined/></div>
                                <DoubleRightOutlined rotate={45}/>
                            </div>
                            <div>
                                <h5>{item.id}</h5>
                                <p>{item.lastHeartBeat}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SubServerSearch