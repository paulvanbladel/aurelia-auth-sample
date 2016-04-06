import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
@inject(HttpClient)
export class Customer{
  heading = 'Customer management';
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
