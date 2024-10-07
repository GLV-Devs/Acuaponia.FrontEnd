//Modelo de SubServerSession

class approveSubServerSession{
	constructor(requesterIPAddress){
		this.requesterIPAddress = requesterIPAddress
	}
}


//Modulo Session

export class mainServerClientSubServerSessionModule{
	constructor(mainServerClient){
		mainServerClient: this.mainServerClient
	}

	deleteSubServerSession(subServerId){
		return this.mainServerClient.httpDelete(`api/app/subservers/sessions/${subServerId}`)
	}

	getSubServerSessions(subServerId){
		return this.mainServerClient.httpGet(`api/app/subservers/sessions/${subServerId}`)
	}

	rejectSubServerSession(subServerId){
		return this.mainServerClient.httpPatch(`api/app/subservers/sessions/${subServerId}/reject`)
	}

	aproveSubServerSession(subServerId, data){
		return this.mainServerClient.httpPatch(`api/app/subservers/sessions/${subServerId}/approve`, data)
	}

	getSubServerSessions(){
		return this.mainServerClient.httpGet('api/app/subservers/sessions')
	}
}