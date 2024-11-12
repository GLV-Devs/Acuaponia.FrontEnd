import axios from "axios"

const url = 'https://acuaponiaservidorprincipal.azurewebsites.net'
var bearerToken
var refreshToken
var mutex = 0
var lastRefreshed = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const refresh = async () => {
    while(true) { // Espera indefinitivamente
        let m;
        while (mutex > 0) { await sleep(50) } // Si alguien ya esta usando esta funcion
        m = mutex++ // Lee e incrementa atomicamente
        if (m > 0) mutex--; // No es el unico que lo agarro, continua esperando
        else {
            if (Date.now() > (lastRefreshed + (30 * 1000))) {
                // Aqui volvemos a chequear cuz arriba es solo para ahorrarnos tener que hacer
                // todo este chequeo para saber que somos los unicos
                break;
            }

            mutex--;
            return; // Alguien mas ya refresco
        }
    }
    
    const data = {
        refreshToken: refreshToken
    }
    
    try{
        let res = await axios.patch(`${url}/api/app/identity/refresh`, data)
        bearerToken = res.data.data[0].accessToken
        refreshToken = res.data.data[0].refreshToken
        console.log(res)
    }catch(err){
        console.log(err)
    }finally {
        mutex--;
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
            .then(async() => {
                let res = await axios.get(`${url}/api/app/subservers`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            console.log(`Viejo Bearer: ${bearerToken}`)   //este es el bearer antes de actualizarse
            console.log(`Viejo Refresh: ${refreshToken}`)   //este es el refresh antes de actualizarse

            refresh()
            .then(async() => {
                console.log(`Nuevo Bearer: ${bearerToken}`)   //este es el bearer despues de actualizarse
                console.log(`Nuevo Refresh: ${refreshToken}`)   //este es el refresh despues de actualizarse
                let res = await axios.get(`${url}/api/app/subservers/${subServerId}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                console.log(res)
                return res
            })
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
            .then(async() => {
                let res = await axios.get(`${url}/api/app/reports`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            .then(async() => {
                let res = await axios.get(`${url}/api/app/devices/${subServerId}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                console.log(res)
                return res
            })
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
            .then(async() => {
                let res = await axios.get(`${url}/api/app/devices/peripherals/${deviceId}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            .then(async() => {
                let res = await axios.get(`${url}/api/app/notifications`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            .then(async() => {
                let res = await axios.get(`${url}/api/app/accounts`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            .then(async() => {
                let res = await axios.get(`${url}/api/app/accounts/all`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            .then(async() => {
                let res = await axios.get(`${url}/api/app/subservers/${subServerId}/reactors/config`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            .then(async() => {
                let res = await axios.post(`${url}/api/app/reports`, data, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            .then(async() => {
                let res = await axios.post(`${url}/api/app/identity`, data, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            .then(async() => {
                let res = await axios.get(`${url}/api/app/devices/peripherals/formdata`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            .then(async() => {
                let res = await axios.get(`${url}/api/app/devices/peripherals/subserver/${subServerId}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            .then(async() => {
                let res = await axios.patch(`${url}/api/app/permissions/${otherUserId}`, data, {headers: {'Authorization': `Bearer ${bearerToken}`,'Content-Type': 'application/json'}})
                return res
            })
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
            .then(async() => {
                let res = await axios.patch(`${url}/api/app/accounts/${userKey}`, data, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            .then(async() => {
                let res = await axios.patch(`${url}/api/app/accounts/password`, data, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            .then(async() => {
                let res = await axios.delete(`${url}/api/app/identity`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            .then(async() => {
                let res = await axios.delete(`${url}/api/app/accounts/${userToDelete}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            .then(async() => {
                let res = await axios.delete(`${url}/api/app/accounts?token=${givenToken}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            .then(async() => {
                let res = await axios.get(`${url}/api/app/permissions/access/user/${userId}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            .then(async() => {
                let res = await axios.post(`${url}/api/app/permissions/access/access`, data, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            .then(async() => {
                let res = axios.post(`${url}/api/app/devices/Peripherals`, data, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            .then(async() => {
                let res = axios.patch(`${url}/api/app/permissions/access/${subServerId}/${userId}`, data, {headers: {'Authorization': `Bearer ${bearerToken}`, 'Content-Type': 'application/json'}})
                return res
            })
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
            .then(async() => {
                let res = await axios.get(`${url}/api/app/devices/peripherals/actiontypes`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            .then(async() => {
                let res = await axios.get(`${url}/api/app/devices/peripherals/formdata`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            .then(async() => {
                let res = await axios.get(`${url}/api/app/devices/peripherals/formdata`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            .then(async() => {
                let res = await axios.get(`${url}/api/app/devices/peripherals/formdata`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
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
            .then(async() => {
                let res = await axios.get(`${url}/api/app/devices/peripherals/formdata`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
        }else{
            return err
        }
    }
}


export async function getSubServerSessionInfo(subServerId){
    try{
        let res = axios.get(`${url}/api/app/subservers/sessions/${subServerId}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        if(err.status == 401){
            refresh()
            .then(async() => {
                let res = axios.get(`${url}/api/app/subservers/sessions/${subServerId}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res
            })
        }else{
            return err
        }
    }
}

export async function deleteSubServerSession(subServerId){
    try{
        let res = await axios.delete(`${url}/api/app/subservers/sessions/${subServerId}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
        return res
    }catch(err){
        if(err.status == 401){
            refresh()
            .then(async() => {
                let res = await axios.delete(`${url}/api/app/subservers/sessions/${subServerId}`, {headers: {'Authorization': `Bearer ${bearerToken}`}})
                return res    
            })
        }else{
            return err
        }
    }
}