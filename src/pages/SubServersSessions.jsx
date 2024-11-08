import { useEffect } from 'react'
import { getSubServerSessions } from '../client/ClientePrueba'

const SubServerSessions = () => {

    async function getInfo() {
        let res = await getSubServerSessions()
        console.log(res)
    }

    useEffect(() => {
        getInfo()
    }, [])

    return(
        <div className="SubServerSessions">
        </div>
    )
}

export default SubServerSessions