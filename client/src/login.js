import {AuthService} from './aureliauth/authService';
import {inject} from 'aurelia-framework';
@inject(AuthService )

export class Login{
	constructor(auth){
		this.auth = auth;
	};

	heading = 'Login';
	
	email='';
	password='';
	login(){
		return this.auth.login(this.email, this.password)
		.then(response=>{
			console.log("success logged in vm." + response);
		})
		.catch(err=>{
			console.log("login failure vm.");
		});
	};
	
	authenticate(name){
		//var name = "google";
		return this.auth.authenticate(name, false, null)
		.then((response)=>{
			console.log("auth response " + response);
		});

	}
}
