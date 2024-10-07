// Modelos Account

class userInfo{
	constructor(realName, userName, email, phoneNumber){
		this.realName = realName
		this.userName = userName
		this.email = email
		this.phoneNumber = phoneNumber
	}
}

class newPassword{
	constructor(oldPasswordSHA256, newPassword){
		this.oldPasswordSHA256 = oldPasswordSHA256
		this.newPassword = newPassword
	}
}

//Modulo Account

export class mainServerClientAccountModule{
	constructor(mainServerClient){
		this.mainServerClient = mainServerClient
	}

	getSelfUserInfo(){
		return this.mainServerClient.httpGet(`api/app/accounts`)
	}

	getUserInfo(userKey){
		return this.mainServerClient.httpGet(`api/app/accounts/${userKey}`)
	}

	updateUser(userKey, data){
		return this.mainServerClient.httpPatch(`api/app/accounts/${userKey}`, data)
	}

	deleteSelfUserAccount(){
		return this.mainServerClient.httpDelete('api/app/accounts')
	}

	deleteUserAccount(userKey){
		return this.mainServerClient.httpDelete(`api/app/accounts/${userKey}`)
	}

	updatePassword(data){
		return this.mainServerClient.httpPatch('api/app/accounts/password', data)
	}
}