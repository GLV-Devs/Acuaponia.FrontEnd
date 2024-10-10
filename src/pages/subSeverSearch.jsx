import { Input, Button } from "antd"
import { useEffect, useState } from "react"
import { DoubleRightOutlined, AppstoreAddOutlined, SlidersOutlined, ExportOutlined, SwapRightOutlined } from "@ant-design/icons"
import { getSubServers } from '../client/ClientePrueba'

const SubServerSearch = () => {

    const [showList, setShowList] = useState([])
    useEffect(() => {
        console.log(getSubServers())
    }, [])

    return(
        <div className='SubServerSearch'>
            <div className="searchBar">
                <Input placeholder="Buscar..."/>
                <SlidersOutlined/>
                <Button> <ExportOutlined/> </Button>
            </div>

            <div>
                <div className="LatPanel">
                    { showList.map(() => (<div>
                        <SwapRightOutlined/>
                        <p>nombre</p>
                        <div className='badge'></div>
                    </div>)) }
                </div>
                <div className="blockList">
                    { showList.map((item) => (<div key={item.id}>
                        <div>
                            <div><AppstoreAddOutlined/></div>
                            <DoubleRightOutlined rotate={45}/>
                        </div>
                        <div>
                            <h5>Nombre</h5>
                            <p>Subtitulo</p>
                        </div>
                    </div>)) }
                </div>
            </div>
        </div>
    )
}

export default SubServerSearch