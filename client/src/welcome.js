import {computedFrom} from 'aurelia-framework';
import {ObserverLocator} from 'aurelia-framework';  // or 'aurelia-framework'
import {inject} from 'aurelia-framework';
@inject(ObserverLocator )
export class Welcome{

  constructor(observerLocator){
    this.observerLocator = observerLocator;
    this.heading = 'Welcome to the Aurelia Navigation App!';
    this.firstName = 'John';
    this.lastName = 'Doe';
   ;
  }
  
  //Getters can't be observed with Object.observe, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
  //@computedFrom('firstName', 'lastName')
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  activate(){
    this.subscription = this.observerLocator.getObserver(this,'lastName')
    .subscribe((newValue,oldValue)=>{
      console.log(`new value : ${newValue}  old value : ${oldValue}`);
    });
  }
      
  deactivate(){

    //this.subscription(); // disposing the subscription
   }

  
  submit(){
    //this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
  }

  canDeactivate() {
   /* if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }*/
  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}
