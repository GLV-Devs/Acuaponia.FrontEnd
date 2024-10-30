export function searchDevicePeripheralsModel(list, id){
    let response = list.find((item) => item.actionTypeId == id)
    return response
}

export function searchReportValueKind(list, id){
    let response = list[id]
    return response
}
export function searchPeripheral(list, id){
    // console.log(list)
    // console.log(id)
    let response = list.find((item) => item.index == id)
    // console.log(response)
    return response
}

export function searchDevice(list, id){
    let response = list.find((item) => item.id == id)
    return response
}

export function searchFields(list, id){
        let response = list[id]
        return response
}