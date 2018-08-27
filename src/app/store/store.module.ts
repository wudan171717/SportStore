import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from './cartSummary.component';
import { cartDetailComponent } from './cartDetail.component';
import { checkoutComponent } from './checkout.component';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent,
        cartDetailComponent, checkoutComponent],
    exports: [StoreComponent, cartDetailComponent, checkoutComponent]
})
export class StoreModule { }