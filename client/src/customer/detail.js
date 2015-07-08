import {inject} from "aurelia-framework";
import {CustomerData} from "./customerData";

@inject(CustomerData)
export class Detail {

    constructor(data) {
        this.data = data;
    }

    activate(params) {
        return this.data.getById(params.id)
                        .then(customer => 
                        	{this.customer = customer;
                        	});
    }
}