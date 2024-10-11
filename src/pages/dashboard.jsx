import { useState } from 'react'
import { useEffect } from 'react'
import { getSubServerReports } from '../client/ClientePrueba'

const Dashboard = () => {

    const [list, setList] = useState([])
    useEffect(() => {
        async function fetchSubServers(){
            let res = await getSubServerReports()
            console.log(res)
        }

        fetchSubServers()
        
    }, [])

    return(
        <div className='Dashboard'>
        
        </div>
    )
}

export default Dashboard