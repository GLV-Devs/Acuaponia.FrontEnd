import { useContext, useState } from 'react'
import { useEffect } from 'react'
import { getSubServerReports, getSubServers } from '../client/ClientePrueba'
import { appContext } from '../context/appContext'

const Dashboard = () => {

    const {subServers, setSubServers} = useContext(appContext)

    async function fetchSubServers(){
        let res = await getSubServers()
        setSubServers(res.data.data)
    }

    useEffect(() => {
        fetchSubServers()
    }, [])

    return(
        <div className='Dashboard'>
        
        </div>
    )
}

export default Dashboard