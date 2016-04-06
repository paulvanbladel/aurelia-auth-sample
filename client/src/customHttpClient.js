import {HttpClient} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';

@inject(AuthService)
export class CustomHttpClient extends HttpClient {
    constructor(auth) {
        super();
        this.configure(config => {
            config
                .withBaseUrl('http://localhost:4000/')
                .withDefaults({
                    credentials: 'same-origin',
                    headers: {
                        'Accept': 'application/json',
                        'X-Requested-With': 'Fetch'
                    }
                })
                //we call ourselves the interceptor which comes with aurelia-auth
                //obviously when this custom Http Client is used for services 
                //which don't need a bearer token, you should not inject the token interceptor
                .withInterceptor(auth.tokenInterceptor)
                //still we can augment the custom HttpClient with own interceptors
                .withInterceptor({
                    request(request) {
                        console.log(`Requesting ${request.method} ${request.url}`);
                        return request; // you can return a modified Request, or you can short-circuit the request by returning a Response
                    },
                    response(response) {
                        console.log(`Received ${response.status} ${response.url}`);
                        return response; // you can return a modified Response
                    }
                });
                });
    }
}