import 'bootstrap';
/*import 'bootstrap/css/bootstrap.css!';*/

import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import AppRouterConfig from 'app.router.config';
import HttpClientConfig from 'aurelia-auth/app.httpClient.config';
//import FetchConfig from 'aurelia-auth/app.fetch-httpClient.config';
import {FetchConfig} from 'aurelia-auth';
@inject(Router,HttpClientConfig,FetchConfig, AppRouterConfig )
export class App {

  constructor(router, httpClientConfig, fetchConfig, appRouterConfig){
    this.router = router;
    this.httpClientConfig = httpClientConfig;
    this.appRouterConfig = appRouterConfig;
    this.fetchConfig = fetchConfig;
  }
  
  activate(){
    
    this.httpClientConfig.configure();
    this.appRouterConfig.configure();
    this.fetchConfig.configure();
  }
}








