import {inject} from 'aurelia-framework';
import {AuthService} from './aureliauth/authService';
@inject(AuthService)

export class Signup{
	constructor( auth){
		this.auth = auth;
	}
	heading = 'Sign Up';

	email='';
	password='';
	displayName='';

	signup(){
		this.auth.signup(this.displayName, this.email, this.password)
		.then((response)=>{
			console.log("signed up");
		});
		
	}
}
