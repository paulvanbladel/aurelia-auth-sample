import {inject} from "aurelia-framework";
import {CustomerData} from "./customerData";
import {Router} from "aurelia-router";
//import {Validation} from "aurelia-validation";

@inject(CustomerData, Router)
export class Edit {

    constructor(data, router) {
        this.data = data;   
        this.router = router;
       /* this.validation = validation.on(this)
            .ensure("movie.title")
                .isNotEmpty()
                .hasMinLength(3)
                .hasMaxLength(100)
            .ensure("movie.releaseYear")
                .isNumber()
                .isBetween(1900, 2100);*/
    }

    activate(params) {
        if (params.id) {
        return this.data.getById(params.id)
                   .then(customer => {
                       this.customer = customer;
                       //this.validation.validate();
                   });
       }
       else{
            this.customer = {};
       }
    }  
    
    save() {

        //this.validation.validate().then(() => {
            this.data.save(this.customer)
                .then(customer => {
                    let url = this.router.generate("detail", { id: customer._id});
                    this.router.navigate(url);
                });
        //});

        
    }

}