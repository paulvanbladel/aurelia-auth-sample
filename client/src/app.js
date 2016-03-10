import 'bootstrap';
/*import 'bootstrap/css/bootstrap.css!';*/

import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import AppRouterConfig from './app.router.config';
//import HttpClientConfig from 'aurelia-auth/app.httpClient.config';
//import FetchConfig from 'aurelia-auth/app.fetch-httpClient.config';
import {FetchConfig} from 'aurelia-auth';
@inject(Router, FetchConfig, AppRouterConfig)
export class App {

    constructor(router, fetchConfig, appRouterConfig) {
        this.router = router;
        this.appRouterConfig = appRouterConfig;
        this.fetchConfig = fetchConfig;
    }

    activate() {
        this.appRouterConfig.configure();
        this.fetchConfig.configure();
    }
}








