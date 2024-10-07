//Modelos de Firmware

class newFirmwareInfo{
	constructor(name, notes, version, firmwareGroup, pinActionTypeSupport){
		this.name = name
		this.notes = notes
		this.version = version
		this.firmwareGroup = firmwareGroup
		this.pinActionTypeSupport = pinActionTypeSupport
	}
}

class firmwareNewInfo{
	constructor(name, notes, version, firmwareGroup, requiredFeatures, supportedFeatures, compiledFor, pinActionTypeSupport){
		this.name = name
		this.notes = notes
		this.version = version
		this.firmwareGroup = firmwareGroup
		this.requiredFeatures = requiredFeatures
		this.supportedFeatures = supportedFeatures
		this.compiledFor = compiledFor
		this.pinActionTypeSupport = pinActionTypeSupport
	}
}

//Modulo Firmware
export class mainServerClientFirmwareModule{
	constructor(mainServerClient){
		this.mainServerClient = mainServerClient
	}

	downloadFirmwareBinary(firmwareId){
		return this.mainServerClient.httpGet(`api/app/firmwares/${firmwareId}/bin`)
	}

	uploadFirmwareBinary(firmwareId, file){
		return this.mainServerClient.httpPost(`api/app/firmwares/${firmwareId}/bin`, file)
	}

	getAllFirmwares(){
		return this.mainServerClient.httpGet(`api/app/firmwares`)
	}

	createFirmwareInfo(file){
		return this.mainServerClient.httpPost(`api/app/firmwares`, file)
	}

	deleteFirmwareInfo(){
		return this.mainServerClient.httpDelete(`api/app/firmwares`)
	}

	getFirmwareInfo(firmwareId){
		return this.mainServerClient.httpGet(`api/app/firmwares/${firmwareId}`)
	}

	updateFirmwareInfo(firmwareId){
		return this.mainServerClient.httpPatch(`api/app/firmwares/${firmwareId}`)
	}

	deleteFirmwareInfo(firmwareId){
		return this.mainServerClient.httpDelete(`api/app/firmwares/${firmwareId}`)
	}
}