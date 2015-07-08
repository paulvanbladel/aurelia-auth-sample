import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseUrl = "/api/customer";

@inject(HttpClient)
export class CustomerData {

    constructor(httpClient) {
        this.http = httpClient;
    }

    getById(id) {
        return this.http.get(`${baseUrl}/${id}`)
                        .then(response => {
                            return  response.content;
                        });
    }

    getAll() {
        return this.http.get(baseUrl)
                        .then(response => {
                            return response.content;
                        });
    }

    save(customer) {
        var request = this.http.createRequest();
        if (customer._id) {
        request.asPut()
               .withUrl(`${baseUrl}/${customer._id}`)
               .withHeader("Accept", "application/json")
               .withHeader("Content-Type", "application/json")
               .withContent(customer);
        }
        else{
            request.asPost()
               .withUrl(baseUrl)
               .withHeader("Accept", "application/json")
               .withHeader("Content-Type", "application/json")
               .withContent(customer);
        };
        
        return request.send().then(response => response.content);
    }

}