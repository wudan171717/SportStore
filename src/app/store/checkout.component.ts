import { Component } from '@angular/core';
import {NgForm, Form} from "@angular/forms";
import { OrderRepository } from '../model/order.repository';
import { Order } from '../model/order.model';

@Component({
    styleUrls:["checkout.component.css"],
    templateUrl:"checkout.component.html"
})
export class checkoutComponent{
    orderSent:boolean = false;
    sumbitted:boolean = false;

    constructor(public reponsitory:OrderRepository,public order:Order){}

    submitOrder(form:NgForm){
        this.sumbitted = true;
        if(form.valid){
            this.reponsitory.saveOrder(this.order).subscribe(order =>{
                this.order.clear();
                this.orderSent = true;
                this.sumbitted = false;
            });
        }
    }
}