import { useState } from 'react'
import { getSubServers } from '../client/ClientePrueba'

const Dashboard = () => {

    const [list, setList] = useState([])
    useEffect(() => {
        console.log(getSubServers())
    }, [])

    return(
        <div className='Dashboard'>
        
        </div>
    )
}

export default Dashboard