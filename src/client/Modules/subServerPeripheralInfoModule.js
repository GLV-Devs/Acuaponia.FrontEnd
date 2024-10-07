//Modelos para subServerDevicePeripheral

class newPeripheralInfo{
	constructor(subServerId, pins, name, actionType, scheduledDelay, reportValueKind){
		this.subServerId = subServerId
		this.pins = pins
		this.name = name
		this.actionType = actionType
		this.scheduledDelay = scheduledDelay
		this.reportValueKind = reportValueKind
	}
}

class peripheralNewInfo{
	constructor(pins, name, actionType, scheduledDelay, reportValueKind){
		this.pins = pins
		this.name = name
		this.actionType = actionType
		this.scheduledDelay = scheduledDelay
		this.reportValueKind = reportValueKind
	}
}

//Modulo subServerDevicePeripheral

export class mainServerClientSubServerDevicesPeripheralModule{
	constructor(mainServerClient){
		mainServerClient: this.mainServerClient
	}

	getPinActionTypeFormData(){
		return this.mainServerClient.httpGet('api/app/devices/peripherals')
	}

	addPeripheral(data){
		return this.mainServerClient.httpPost('api/app/devices/peripherals', data)
	}

	getPeripheralForDevice(deviceId){
		return this.mainServerClient.httpGet(`api/app/devices/peripherals/${deviceId}`)
	}

	updatePeripheral(deviceId, peripheralIndex){			//revisar, no se si en este se sube algun archivo
		return this.mainServerClient.httpPatch(`api/app/devices/peripherals/${deviceId}/${peripheralIndex}`)
	}

	deletePeripheral(deviceId, peripheralIndex){
		return this.mainServerClient.httpDelete(`api/app/devices/peripherals/${deviceId}/${peripheralIndex}`)
	}
}