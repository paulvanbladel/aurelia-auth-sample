import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Customer{
  heading = 'Customer management';
  customers = [];

  url = 'api/customer';

  constructor(http){
    this.http = http;
  }

  activate(){
   
   return this.http.createRequest(this.url)
  .asGet()
  //.authTokenHandling()
  .send().then(response => {
      this.customers = response.content;
    });

    /*return this.http.get(this.url).then(response => {
      this.customers = response.content;
    });*/
  }
}
