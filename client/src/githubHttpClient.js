import {HttpClient} from 'aurelia-fetch-client';
import {inject, transient} from 'aurelia-framework';
//this github specific http client will not send a bearer token.
export class GithubHttpClient extends HttpClient {
    constructor() {
        super();
        this.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('https://api.github.com/');
        });
       
    }
}