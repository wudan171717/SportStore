import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import {from} from 'rxjs';

import { Product } from "./product.model"
import { Order } from './order.model';


@Injectable()
export class StaticDataSource{
    private products:Product[] = [
        new Product(1,"Product 1","Category 1","Product 1 (Category 1)",100),
        new Product(2,"Product 2","Category 1","Product 2 (Category 1)",100),
        new Product(3,"Product 3","Category 1","Product 3 (Category 1)",100),
        new Product(4,"Product 4","Category 1","Product 4 (Category 1)",100),
        new Product(5,"Product 5","Category 2","Product 5 (Category 2)",100),
        new Product(6,"Product 6","Category 3","Product 6 (Category 3)",100)
    ];

    getProducts():Observable<Product[]>{
        return from([this.products]);
    }

    saveOrder(order:Order):Observable<Order>{
        return from([order]);

    }
}