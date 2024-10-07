//Modulo UserNotification

export class mainServerClientUserNotificationsModule{
	constructor(mainServerClient){
		mainServerClient: this.mainServerClient
	}

	getAllNotifications(){
		return this.mainServerClient.httpGet('api/app/notifications')
	}

	markAsSeen(data){
		return this.mainServerClient.httpPatch('api/app/notifications', data)
	}
}