export function searchDevicePeripheralsModel(list, id){
    let response = list.find((item) => item.actionTypeId == id)
    return response.actionTypeName
}

export function searchReportValueKind(list, id){
    console.log(id)
    let response = list[id]
    return response
}