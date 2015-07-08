import {inject} from 'aurelia-framework';
import {CustomerData} from "./customerData";

@inject(CustomerData)
export class List{
  heading = 'Customer management';
  //customers = [];
 
  constructor(data){
    this.data = data;
  }

  activate(){
   
   return this.data.getAll()
          .then(customers => this.customers = customers);
  }
}
