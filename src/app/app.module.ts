import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";


import { AppComponent } from './app.component';
import { StoreModule } from "./store/store.module";
import { StoreComponent } from './store/store.component';
import { checkoutComponent } from './store/checkout.component';
import { cartDetailComponent } from './store/cartDetail.component';
import { storeFirstGuard } from './storeFirst.guard';


@NgModule({
  imports: [BrowserModule, StoreModule,
    RouterModule.forRoot([
      { path: "store", component: StoreComponent, canActivate: [storeFirstGuard] },
      { path: "cart", component: cartDetailComponent, canActivate: [storeFirstGuard] },
      { path: "checkout", component: checkoutComponent, canActivate: [storeFirstGuard] },
      { path: "admin", loadChildren: "./admin/admin.module#AdminModule", canActivate: [storeFirstGuard] },
      { path: "**", redirectTo: "/store" },
    ])],
  providers: [storeFirstGuard],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }