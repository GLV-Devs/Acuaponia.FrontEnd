//Modulo userPermission

export class mainServerClientUserPermissionsModule{
	constructor(mainServerClient){
		mainServerClient: this.mainServerClient
	}

	adjustUserPermissions(otherUserId){		//no se si esto lleva data o que
		return this.mainServerClient.httpPatch(`api/app/permissions/${otherUserId}`)
	}
}