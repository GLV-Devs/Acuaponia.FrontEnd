//Modelo subServerUserAccess




//Modulo UserAccess

export class mainServerClientSubServerUserAccessModule{
	constructor(mainServerClient){
		mainServerClient: this.mainServerClient
	}

	getUserAccess(userId){
		return this.mainServerClient.httpGet(`api/app/permissions/access/user/${userId}`)
	}

	getSubServerAccesses(subServerId){
		return this.mainServerClient.httpGet(`api/app/permissions/access/subserver/${subServerId}`)
	}

	editSubUserAccess(subServerId, userId, data){
		return this.mainServerClient.httpPatch(`api/app/permissions/access/${subServerId}/${userId}`, data)
	}

	revokeSubServerAccess(subServerId, userId){
		return this.mainServerClient.httpDelete(`api/app/permissions/access/${subServerId}/${userId}`, data)
	}

	grantSubServerAccess(data){
		return this.mainServerClient.httpPost('api/app/permissions/access/access', data)
	}
}