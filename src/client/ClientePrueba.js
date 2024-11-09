import axios from "axios"

const url = 'https://acuaponiaservidorprincipal.azurewebsites.net'
let bearerToken
let refreshToken

async function refresh () {
    try{
        const data = {refreshToken: refreshToken}
        res = await axios.patch(`${url}/api/app/identity/refresh`, data)
        bearerToken = res.data.data.accessToken
        refreshToken = res.data.data.refreshToken
        console.log(res)
    }catch(err){
        return err
    }
    
}

export async function login(data){
    try{
        let res = await axios.patch(`${url}/api/app/identity`, data)
        bearerToken = res.data.data[0].accessToken
        refreshToken = res.data.data[0].refreshToken
        return res
    }catch(err){
        return err
    }
}

export async function getSubServers(){
    try{
        let res = await axios.get(`${url}/api/app/subservers`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        console.log(err)
        if (err.response.status == 401){
            refresh()
            res = await axios.get(`${url}/api/app/subservers`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function getSubServerInfo(subServerId){
    try{
        let res = await axios.get(`${url}/api/app/subservers/${subServerId}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        if (err.response.status == 401){
            refresh()
            res = await axios.get(`${url}/api/app/subservers/${subServerId}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function getSubServerReports(){
    try{
        let res = await axios.get(`${url}/api/app/reports`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        if (err.response.status == 401){
            refresh()
            res = await axios.get(`${url}/api/app/reports`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function getSubServerDevices(subServerId){
    try{
        let res = await axios.get(`${url}/api/app/devices/${subServerId}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        if (err.response.status == 401){
            refresh()
            res = await axios.get(`${url}/api/app/devices/${subServerId}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function getSubserverDevicePeripheral(deviceId){
    try{
        let res = await axios.get(`${url}/api/app/devices/peripherals/${deviceId}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        if (err.response.status == 401){
            refresh()
            res = await axios.get(`${url}/api/app/devices/peripherals/${deviceId}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function getAllNotifications(){
    try{
        let res = await axios.get(`${url}/api/app/notifications`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        if (err.response.status == 401){
            refresh()
            res = await axios.get(`${url}/api/app/notifications`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function getAccount(){
    try{
        let res = await axios.get(`${url}/api/app/accounts`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        if (err.response.status == 401){
            refresh()
            res = await axios.get(`${url}/api/app/accounts`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function getAccountsAll(){
    try{
        let res = await axios.get(`${url}/api/app/accounts/all`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        if (err.response.status == 401){
            refresh()
            console.log(refresh())
            res = await axios.get(`${url}/api/app/accounts/all`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function getSubServerReactors(subServerId){
    try{
        let res = await axios.get(`${url}/api/app/subservers/${subServerId}/reactors/config`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    } catch(err){
        if (err.response.status == 401){
            refresh()
            res = await axios.get(`${url}/api/app/subservers/${subServerId}/reactors/config`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function postSubServerReport(data){
    try{
        let res = await axios.post(`${url}/api/app/reports`, data, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    } catch(err){
        if (err.response.status == 401){
            refresh()
            res = await axios.post(`${url}/api/app/reports`, data, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function postCreateAccount(data){
    try{
        let res = await axios.post(`${url}/api/app/identity`, data, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        if (err.response.status == 401){
            refresh()
            res = await axios.post(`${url}/api/app/identity`, data, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function getSubserverDevicePeripheralModel(){
    try{
        let res = await axios.get(`${url}/api/app/devices/peripherals/formdata`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        if (err.response.status == 401){
            refresh()
            res = await axios.get(`${url}/api/app/devices/peripherals/formdata`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function getAllPeripherals(subServerId){
    try{
        let res = await axios.get(`${url}/api/app/devices/peripherals/subserver/${subServerId}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        if (err.response.status == 401){
            refresh()
            res = await axios.get(`${url}/api/app/devices/peripherals/subserver/${subServerId}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function patchAdjustUserPermissions(otherUserId, data){
    try{
        let res = await axios.patch(`${url}/api/app/permissions/${otherUserId}`, data, {headers: {'Authorization': `Bearer ${bearerToken}`,'Content-Type': 'application/json'}})
        return res
    }catch(err){
        if (err.response.status == 401){
            refresh()
            res = await axios.patch(`${url}/api/app/permissions/${otherUserId}`, data, {headers: {'Authorization': `Bearer ${bearerToken}`,'Content-Type': 'application/json'}})
            return res
        }else{
            return err
        }
    }
}

export async function patchUpdateAccount(userKey, data){
    try{
        let res = await axios.patch(`${url}/api/app/accounts/${userKey}`, data, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        if (err.response.status == 401){
            refresh()
            res = await axios.patch(`${url}/api/app/accounts/${userKey}`, data, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function patchChangePassword(data){
    try{
        let res = await axios.patch(`${url}/api/app/accounts/password`, data, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        if (err.response.status == 401){
            refresh()
            res = await axios.patch(`${url}/api/app/accounts/password`, data, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function logOut() {
    try{
        let res = await axios.delete(`${url}/api/app/identity`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        if (err.response.status == 401){
            refresh()
            res = await axios.delete(`${url}/api/app/identity`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function deleteRequestDelete(userToDelete){
    try{
        let res = await axios.delete(`${url}/api/app/accounts/${userToDelete}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        if (err.response.status == 401){
            refresh()
            res = await axios.delete(`${url}/api/app/accounts/${userToDelete}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function deleteUserAccount(givenToken){
    try{
        let res = await axios.delete(`${url}/api/app/accounts?token=${givenToken}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        if (err.response.status == 401){
            refresh()
            res = await axios.delete(`${url}/api/app/accounts?token=${givenToken}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function getUsersAccesses(userId){
    try{
        let res = await axios.get(`${url}/api/app/permissions/access/user/${userId}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        if (err.response.status == 401){
            refresh()
            res = await axios.get(`${url}/api/app/permissions/access/user/${userId}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function postSubServerPermissions(data){
    try{
        let res = await axios.post(`${url}/api/app/permissions/access/access`, data, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    } catch(err){
        if (err.response.status == 401){
            refresh()
            res = await axios.post(`${url}/api/app/permissions/access/access`, data, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function createNewPeripheral(data){
    try{
        let res = axios.post(`${url}/api/app/devices/Peripherals`, data, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        console.log(errq)
        if (err.response.status == 401){
            refresh()
            res = axios.post(`${url}/api/app/devices/Peripherals`, data, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function patchEditSubServerAccess(subServerId, userId, data){
    try{
        let res = axios.patch(`${url}/api/app/permissions/access/${subServerId}/${userId}`, data, {headers: {'Authorization': `Bearer ${bearerToken}`, 'Content-Type': 'application/json'}})
        return res
    }catch(err){
        if (err.response.status == 401){
            refresh()
            res = axios.patch(`${url}/api/app/permissions/access/${subServerId}/${userId}`, data, {headers: {'Authorization': `Bearer ${bearerToken}`, 'Content-Type': 'application/json'}})
            return res
        }else{
            return err
        }
    }
}

export async function getPinActionTypesList() {
    try{
        let res = await axios.get(`${url}/api/app/devices/peripherals/actiontypes`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        console.log(res)
        return res
    }catch(err){
        if (err.response.status == 401){
            refresh()
            res = await axios.get(`${url}/api/app/devices/peripherals/actiontypes`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function getPinActionFormData(){
    try{
        let res = await axios.get(`${url}/api/app/devices/peripherals/formdata`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        if (err.response.status == 401){
            refresh()
            res = await axios.get(`${url}/api/app/devices/peripherals/formdata`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function getSubServerSessions() {
    try{
        let res = await axios.get(`${url}/api/app/subservers/sessions`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        if(err.status == 401){
            refresh()
            res = await axios.get(`${url}/api/app/devices/peripherals/formdata`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function aproveSubServerSession(data, subServerId) {
    try{
        let res = await axios.patch(`${url}/api/app/subservers/sessions/${subServerId}/approve`, data, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        if(err.status == 401){
            refresh()
            res = await axios.get(`${url}/api/app/devices/peripherals/formdata`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}

export async function rejectSubServerSession(data, subServerId) {
    try{
        let res = await axios.patch(`${url}/api/app/subservers/sessions/${subServerId}/reject`, data, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        if(err.status == 401){
            refresh()
            res = await axios.get(`${url}/api/app/devices/peripherals/formdata`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
            return res
        }else{
            return err
        }
    }
}
