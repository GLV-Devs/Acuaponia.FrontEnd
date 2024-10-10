import axios from "axios"

const url = 'http://localhost:3000'
let sessionToken

export async function login(data){
    try{
        let res = await axios.patch(`${url}/api/app/identity`, data)
        sessionToken = res.data.sessionToken
        return res
    }catch(err){
        return err
    }
}

export async function getSubServers(){
    try{
        let res = await axios.get(`${url}/api/app/subservers`, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    }catch(err){
        return err
    }
}

export async function getSubServerInfo(subServerId){
    try{
        let res = await axios.get(`${url}/api/app/subservers/${subServerId}`, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    }catch(err){
        return err
    }
}

export async function getSubServerReports(){
    try{
        let res = await axios.get(`${url}/api/app/reports`, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    }catch(err){
        return err
    }
}

export async function getSubServerDevices(subServerId){
    try{
        let res = await axios.get(`${url}/api/app/devices/$subServerId`, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    }catch(err){
        return err
    }
}

export async function getSubserverDevicePeripheral(deviceId){
    try{
        let res = await axios.get(`${url}/api/app/devices/peripherals/${deviceId}`, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    }catch(err){
        return err
    }
}

