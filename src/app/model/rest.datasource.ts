import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod } from "@angular/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './product.model';
import { Cart } from './cart.model';
import { Order } from './order.model';

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {
    baseUrl: string;
    auth_token: string;

    constructor(private http: Http) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.request(new Request({
            method: RequestMethod.Post,
            url: this.baseUrl + "login",
            body: { name: user, password: pass }
        })).pipe(map(response => {
            let r = response.json();
            this.auth_token = r.successs ? r.token : null;
            return r.successs;
        }));
    }

    getProducts(): Observable<Product[]> {
        return this.sendRequestProductList(RequestMethod.Get, "products") as Observable<Product[]>;
    }

    saveProduct(product:Product):Observable<Product>{
        return this.sendRequestProduct(RequestMethod.Post,"products",product,true);
    }
    updateProduct(product):Observable<Product>{
        return this.sendRequestProduct(RequestMethod.Put,
            `products/${product.id}`,product,true) as Observable<Product>;
    }
    deleteProduct(id:number):Observable<Product>{
        return this.sendRequestProduct(RequestMethod.Put,
            `products/${id}`,null,true) as Observable<Product>;
    }


    getOrders():Observable<Order[]>{
        return this.sendRequestOrderList(RequestMethod.Get,
            `orders`,null,true) as Observable<Order[]>;
    }

    saveOrder(order: Order): Observable<Order> {
        return this.sendRequestOrder(RequestMethod.Post, "orders", order) as Observable<Order>;;
    }
    updateOrder(order: Order):Observable<Order>{
        return this.sendRequestOrder(RequestMethod.Put,
            `products/${order.id}`,order,true) as Observable<Order>;
    }
    deleteOrder(id:number):Observable<Order>{
        return this.sendRequestOrder(RequestMethod.Put,
            `products/${id}`,null,true) as Observable<Order>;
    }
    private sendRequestProductList(verb: RequestMethod, url: string, body?: Product, auth: boolean = false):
        Observable<Product[]> {
        let request = new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        });
        if (auth && this.auth_token != null) {
            request.headers.set("Authorization", `Bearer<${this.auth_token}>`);
        }
        return this.http.request(request).pipe(map(response => response.json()));
    }
    
    private sendRequestProduct(verb: RequestMethod, url: string, body?: Product, auth: boolean = false):
        Observable<Product> {
        let request = new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        });
        if (auth && this.auth_token != null) {
            request.headers.set("Authorization", `Bearer<${this.auth_token}>`);
        }
        return this.http.request(request).pipe(map(response => response.json()));
    }
    private sendRequestOrderList(verb: RequestMethod, url: string, body?: Order, auth: boolean = false):
        Observable<Order[]> {
        let request = new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        });
        if (auth && this.auth_token != null) {
            request.headers.set("Authorization", `Bearer<${this.auth_token}>`);
        }
        return this.http.request(request).pipe(map(response => response.json()));
    }
    private sendRequestOrder(verb: RequestMethod, url: string, body?: Order, auth: boolean = false):
        Observable<Order> {
        let request = new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        });
        if (auth && this.auth_token != null) {
            request.headers.set("Authorization", `Bearer<${this.auth_token}>`);
        }
        return this.http.request(request).pipe(map(response => response.json()));
    }
}