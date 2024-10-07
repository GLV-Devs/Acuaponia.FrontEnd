//Modelos para Reactor

class newReactor{
	constructor(subserverId, reactorName){
		this.subserverId = subserverId
		this.reactorName = reactorName
	}
}

class reactorNewInfo{
	constructor(jsonConfiguration){
		this.jsonConfiguration = jsonConfiguration
	}
}


//Modulo Reactor

export class mainServerClientSubServerReactorModule{
	constructor(mainServerClient){
		mainServerClient: this.mainServerClient
	}

	getSchemasForAviableAcuaponiaSubServerReactors(subServerId){
		return this.mainServerClient.httpGet(`api/app/subservers/${subServerId}/reactors`)
	}

	getAllAcuaponiaSubServersReactorConfigurations(subServerId){
		return this.mainServerClient.httpGet(`api/app/subservers/${subServerId}/reactors/config`)
	}

	createAcuaponiaSubServerReactorConfiguration(subServerId, data){
		return this.mainServerClient.httpPost(`api/app/subservers/${subServerId}/reactors/config`, data)
	}

	getAllAcuaponiaSubServerReactorConfigurationInfo(subServerId, reactorConfigId){
		return this.mainServerClient.httpGet(`api/app/subservers/${subServerId}/reactors/config/${reactorConfigId}`)
	}

	updateAcuaponiaSubServerReactorConfigurationInfo(subServerId, reactorConfigId, data){
		return this.mainServerClient.httpPatch(`api/app/subservers/${subServerId}/reactors/config/${reactorConfigId}`, data)
	}
}