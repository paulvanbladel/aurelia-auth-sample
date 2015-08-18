import {AuthService} from 'aurelia-auth';
import {inject} from 'aurelia-framework';
@inject(AuthService )

export class Profile{
	constructor(auth){
		this.auth = auth;
		this.profile = null;
	};
	activate(){
		return this.auth.getMe()
		.then(data=>{
			this.profile = data;
		});
	}
	heading = 'Profile';

	link(provider){
		return this.auth.authenticate(provider, true, null)
		/*.then((response)=>{
			console.log("auth response " + response);
			return this.auth.getMe();
		})*/
		.then(()=> this.auth.getMe())
		.then(data=>{
			this.profile = data;
		});;
	}
	unlink(provider){
		return this.auth.unlink(provider)
		/*.then((response)=>{
			console.log("auth response " + response);
			return this.auth.getMe();
		})*/
		.then(()=> this.auth.getMe())
		.then(data=>{
			this.profile = data;
		});;
	}
	email='';
	password='';
	
}
