import {inject, useView} from 'aurelia-framework';
import {CustomHttpClient} from './customHttpClient';
@inject(CustomHttpClient)
@useView('./customer.html')
export class Customer2{
  heading = 'Customer management with custom http service';
  customers = [];

  url = 'api/customer';

  constructor(http){
    this.http = http;
  }

  activate(){

   return this.http.fetch(this.url)
   .then(response =>  response.json())
   .then(c => this.customers = c);
}

}