//Modelos para subServer

class newAcuaponiaSubServerInfo{
	constructor(name){
		this.name = name
	}
}

//Modulo Subserver

export class mainServerClientSubServerModule{
	constructor(mainServerClient){
		mainServerClient: this.mainServerClient
	}

	getAllAcuaponiaSubServers(){
		return this.mainServerClient.httpGet('api/app/subservers')
	}

	getAcuaponiaSubServerInfo(subServerId){
		return this.mainServerClient.httpGet(`api/app/subservers/${subServerId}`)
	}

	updateAcuaponiaSubServerInfo(subServerId, data){
		return this.mainServerClient.httpPatch(`api/app/subservers/${subServerId}`, data)
	}
}