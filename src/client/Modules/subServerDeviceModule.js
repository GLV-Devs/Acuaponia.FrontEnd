//Modelos para SubServerDevice

class subServerDeviceNewInfo{
	constructor(name, notes, hardwareTypes, hardwareFeatures, hardwareArchitecture, connectionType, connectionSlot, assignedFirmwareId){
		this.name = name
		this.notes = notes
		this.hardwareTypes = hardwareTypes
		this.hardwareFeatures = hardwareFeatures
		this.hardwareArchitecture = hardwareArchitecture
		this.connectionType = connectionType
		this.connectionSlot = connectionSlot
		this.assignedFirmwareId = assignedFirmwareId
	}
}

//Modulo subServerDevice

export class mainServerClientSubServerDevicesModule{
	constructor(mainServerClient){
		mainServerClient: this.mainServerClient
	}

	getAllDevices(){
		return this.mainServerClient.httpGet('api/app/devices')
	}

	updateSubServerDeviceInfo(data){
		return this.mainServerClient.httpPatch('api/app/devices', data)
	}
}