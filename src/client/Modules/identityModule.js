//Modelos para Identity

class newAccountInfo{
	constructor(realName, userName, email, phoneNumber, password){
		this.realName = realName
		this.userName = userName
		this.email = email
		this.phoneNumber = phoneNumber
		this.password = password
	}
}

class loginData{
	constructor(identifier, passwordSHA256){
		this.identifier = identifier
		this.passwordSHA256 = passwordSHA256
	}
}

//Modulo Identity

export class mainServerClientIdentityModule{
	constructor(mainServerClient){
		mainServerClient = this.mainServerClient
	}

	createAccount(data){
		return this.mainServerClient.httpPost('api/app/identity', data)
	}

	login(data){
		return this.mainServerClient.httpPatch('api/app/identity', data)
	}

	logout(){
		return this.mainServerClient.httpDelete('api/app/identity')
	}
}