import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.respository';
import { Cart } from '../model/cart.model';


@Component({
    selector: "store",
    // moduleId: module.id,   不知为何会报错
    templateUrl: "store.component.html"
})
export class StoreComponent {
    public selectedCategory = null;
    public productsPerPage = 4;
    public selectedPage = 1;
    constructor(private respository: ProductRepository,
        private cart: Cart,private router:Router) { }

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.respository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): string[] {
        return this.respository.getCategories();
    }

    changeCategories(newCategories?: string) {
        this.selectedCategory = newCategories;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }
    changePageSize(newSize: number) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }
    // get pageNumbers(): number[] {
    //     return Array(Math.ceil(this.respository.getProducts(this.selectedCategory).length /
    //         this.productsPerPage)).fill(0).map((x, i) => i + 1);
    // }

    get pageCount(): number {
        return Math.ceil(this.respository.getProducts(this.selectedCategory).length /
            this.productsPerPage);
    }

    addProductToCart(product: Product) {
        this.cart.addLine(product);
        this.router.navigateByUrl("/cart");
    }
} 