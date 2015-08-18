import {inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';
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
		return this.auth.signup(this.displayName, this.email, this.password)
		.then((response)=>{
			console.log("signed up");
		});
		
	}
}
