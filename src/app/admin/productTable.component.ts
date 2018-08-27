import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.respository';
import { Product } from '../model/product.model';
@Component({
    templateUrl: "productTable.component.html"
})
export class ProductTableComponent {
    constructor(private repository:ProductRepository){    }

    getProducts():Product[]{
        return this.repository.getProducts();
    }

    deleteProduct(id:number){
        this.repository.deleteProduce(id);
    }
}