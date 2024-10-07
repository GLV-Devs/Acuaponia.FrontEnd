import axios from "axios"
import { mainServerClientAccountModule } from "./Modules/accountModule.js"
import { mainServerClientFirmwareModule } from "./Modules/firmwareModule.js"
import { mainServerClientIdentityModule } from "./Modules/identityModule.js"
import { mainServerClientSubServerModule } from "./Modules/subServerModule.js"
import { mainServerClientSubServerDevicesModule } from "./Modules/subServerDeviceModule.js"
import { mainServerClientSubServerDevicesPeripheralModule } from "./Modules/subServerPeripheralInfoModule.js"
import { mainServerClientSubServerReactorModule } from "./Modules/subServerReactorModule.js"
import { mainServerClientSubServerReportModule } from "./Modules/subServerReportModule.js"
import { mainServerClientSubServerSessionModule } from "./Modules/subServerSessionModule.js"
import { mainServerClientSubServerUserAccessModule } from "./Modules/subServerUserAccessModule.js"
import { mainServerClientUserNotificationsModule } from "./Modules/userNotificationModule.js"
import { mainServerClientUserPermissionsModule } from "./Modules/userPermissionModule.js"






//main

class mainServerClient{
	//El httpErrorHandler es una funcion como la que le paso al then y catch
	//de axios y recibe un solo parametro que se llama errorResponse.
	constructor(loginData, serverUrl, httpErrorHandler){
		this.loginData = identifier,
		this.serverUrl = serverUrl,
		this.httpErrorHandler = httpErrorHandler,
		this.accounts = new mainServerClientAccountModule(this)
		this.firmware = new mainServerClientFirmwareModule(this)
		this.identity = new mainServerClientIdentityModule(this)
		this.subServer = new mainServerClientSubServerModule(this)
		this.subServerDevices = new mainServerClientSubServerDevicesModule(this)
		this.subServerDevicesPeripheral = new mainServerClientSubServerDevicesPeripheralModule(this)
		this.subServerReactor = new mainServerClientSubServerReactorModule(this)
		this.subServerReport = new mainServerClientSubServerReportModule(this)
		this.subServerSession = new mainServerClientSubServerSessionModule(this)
		this.subServerUserAccess = new mainServerClientSubServerUserAccessModule(this)
		this.userNotifications = new mainServerClientUserNotificationsModule(this)
		this.userPermissions = new mainServerClientUserPermissionsModule(this)
	}

	//let isLoggedIn = false

	composeUrl(endPoint){
		return `${this.serverUrl}/${endPoint}`
	}

	httpGet(endPoint){
		let res
		axios.get(composeUrl(endPoint))
		.then((httpRes) => res = httpRes.data)
		.catch((err) => {
			if(err.status == 401){
				ensureLoggedIn()
				axios.get(composeUrl(endPoint))
				.then((httpRes) => res = httpRes.data)
				.catch((err) => {
					this.httpErrorHandler(err)
					res = false
				})
			}else{
				this.httpErrorHandler(err)
				res = false
			}
		})
		return res
	}

	httpDelete(endPoint){
		let res
		axios.delete(composeUrl(endPoint))
		.then((httpRes) => res = httpRes.data)
		.catch((err) => {
			if(err.status == 401){
				ensureLoggedIn()
				axios.delete(composeUrl(endPoint))
				.then((httpRes) => res = httpRes.data)
				.catch((err) => {
					this.httpErrorHandler(err)
					res = false
				})
			}else{
				this.httpErrorHandler(err)
				res = false
			}
		})
		return res
	}

	httpPost(endPoint, data){
		let res
		axios.post(composeUrl(endPoint), data)
		.then((httpRes) => res = httpRes.data)
		.catch((err) => {
			if(err.status == 401){
				ensureLoggedIn()
				axios.post(composeUrl(endPoint), data)
				.then((httpRes) => res = httpRes.data)
				.catch((err) => {
					this.httpErrorHandler(err)
					res = false
				})
			}else{
				this.httpErrorHandler(err)
				res = false
			}
		})
		return res
	}

	httpPatch(endPoint, data){
		let res
		axios.patch(composeUrl(endPoint), data)
		.then((httpRes) => res = httpRes.data)
		.catch((err) => {
			if(err.status = 401){
				ensureLoggedIn()
				axios.patch(composeUrl(endPoint), data)
				.then((httpRes) => res = httpRes.data)
				.catch((err) => {
					this.httpErrorHandler(err)
					res = false
				})
			}else{
				this.httpErrorHandler(err)
				res = false
			}
		})
		return res
	}

	httpPut(endPoint, data){
		let res
		axios.put(composeUrl(endPoint), data)
		.then((httpRes) => res = httpRes.data)
		.catch((err) => {
			if(err.status == 401){
				ensureLoggedIn()
				axios.put(composeUrl(endPoint), data)
				.then((httpRes) => res = httpRes.data)
				.catch((err) => {
					this.httpErrorHandler(err)
					res = false
				})
			}else{
				this.httpErrorHandler(err)
				res = false
			}
		})
		return res
	}

	ensureLoggedIn(){
		if(isLoggedIn == true){
			return 
		}else{
			//Aqui me loggeo con login data y pongo isLoggedIn verdadero
		}
	}
}