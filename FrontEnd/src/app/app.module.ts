import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './myComponent/navbar/navbar.component';
import { FooterComponent } from './myComponent/footer/footer.component';
import { CardComponent } from './myComponent/Feachture/card/card.component';
import { UsersComponent } from './myComponent/Feachture/users/login/users.component';
import { ProductComponent } from './myComponent/Feachture/product/product.component';
import { OrdersComponent } from './myComponent/Feachture/orders/orders.component';
import { RatingComponent } from './myComponent/Feachture/rating/rating.component';
import { RegisterComponent } from './myComponent/Feachture/users/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    UsersComponent,
    ProductComponent,
    OrdersComponent,
    RatingComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
