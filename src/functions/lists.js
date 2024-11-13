export function searchDevicePeripheralsModel(list, id){
    let response = list.find((item) => item.actionTypeId == id)
    return response
}

export function searchReportValueKind(list, id){
    let response = list[id]
    return response
}
export function searchPeripheral(list, id){
    let response = list.find((item) => item.index == id)
    if(response == undefined){
        response = {
            reportValueKind: 'unnamed peripheral'
        }
        return response
    }
    return response
}

export function searchDevice(list, id){
    let response = list.find((item) => item.id == id)
    if(response == undefined){
        response = {
            name: 'unnamed device'
        }
        return response
    }
    return response
}

export function searchFields(list, id){
    let response = list[id]
    return response
}

export function filterNotifications(list, priority){
    let response = list.filter((item) => item.importance == priority)
    return response
}