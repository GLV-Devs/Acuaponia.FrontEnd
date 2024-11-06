import axios from "axios"

const url = 'https://acuaponia-servidorprincipal.azurewebsites.net'
let sessionToken

export async function login(data){
    try{
        let res = await axios.patch(`${url}/api/app/identity`, data)
        sessionToken = res.data.data[0].key
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
        let res = await axios.get(`${url}/api/app/devices/${subServerId}`, {headers: {'Authorization': `Session ${sessionToken}`}})
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

export async function getAllNotifications(){
    try{
        let res = await axios.get(`${url}/api/app/notifications`, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    }catch(err){
        return err
    }
}

export async function getAccount(){
    try{
        let res = await axios.get(`${url}/api/app/accounts`, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    }catch(err){
        return err
    }
}

export async function getAccountsAll(){
    try{
        let res = await axios.get(`${url}/api/app/accounts/all`, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    }catch(err){
        return err
    }
}

export async function getSubServerReactors(subServerId){
    try{
        let res = await axios.get(`${url}/api/app/subservers/${subServerId}/reactors/config`, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    } catch(err){
        return err
    }
}

export async function postSubServerReport(data){
    try{
        let res = await axios.post(`${url}/api/app/reports`, data, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    } catch(err){
        return err
    }
}

export async function postCreateAccount(data){
    try{
        let res = await axios.post(`${url}/api/app/identity`, data, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    }catch(err){
        return err
    }
}

export async function getSubserverDevicePeripheralModel(){
    try{
        let res = await axios.get(`${url}/api/app/devices/peripherals/formdata`, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    }catch(err){
        return err
    }
}

export async function getAllPeripherals(subServerId){
    try{
        let res = await axios.get(`${url}/api/app/devices/peripherals/subserver/${subServerId}`, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    }catch(err){
        return err
    }
}

export async function patchAdjustUserPermissions(otherUserId, data){
    try{
        let res = await axios.patch(`${url}/api/app/permissions/${otherUserId}`, data, {headers: {'Authorization': `Session ${sessionToken}`,'Content-Type': 'application/json'}})
        return res
    }catch(err){
        return err
    }
}

export async function patchUpdateAccount(userKey, data){
    try{
        let res = await axios.patch(`${url}/api/app/accounts/${userKey}`, data, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    }catch(err){
        return err
    }
}

export async function patchChangePassword(data){
    try{
        let res = await axios.patch(`${url}/api/app/accounts/password`, data, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    }catch(err){
        return err
    }
}

export async function logOut() {
    try{
        let res = await axios.delete(`${url}/api/app/identity`, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    }catch(err){
        return err
    }
}

export async function deleteRequestDelete(userToDelete){
    try{
        let res = await axios.delete(`${url}/api/app/accounts/${userToDelete}`, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    }catch(err){
        return err
    }
}

export async function deleteUserAccount(givenToken){
    try{
        let res = await axios.delete(`${url}/api/app/accounts?token=${givenToken}`, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    }catch(err){
        return err
    }
}

export async function getUsersAccesses(userId){
    try{
        let res = await axios.get(`${url}/api/app/permissions/access/user/${userId}`, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    }catch(err){
        return err
    }
}

export async function postSubServerPermissions(data){
    try{
        let res = await axios.post(`${url}/api/app/permissions/access/access`, data, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    } catch(err){
        return err
    }
}

export async function createNewPeripheral(data){
    try{
        let res = axios.post(`${url}/api/app/devices/Peripherals`, data, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    }catch(err){
        return err
    }
}

export async function patchEditSubServerAccess(subServerId, userId, data){
    try{
        let res = axios.patch(`${url}/api/app/permissions/access/${subServerId}/${userId}`, data, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    }catch(err){
        return err
    }
}

export async function getPinActionTypesList() {
    try{
        let res = await axios.get(`${url}/api/app/devices/peripherals/actiontypes`, {headers: {'Authorization': `Session ${sessionToken}`}})
        console.log(res)
        return res
    }catch(err){
        return err
    }
}

export async function getPinActionFormData(){
    try{
        let res = await axios.get(`${url}/api/app/devices/peripherals/formdata`, {headers: {'Authorization': `Session ${sessionToken}`}})
        return res
    }catch(err){
        return err
    }
}