import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductdashComponent } from './shared/component/productdash/productdash.component';
import { ProductDetailComponent } from './shared/component/product-detail/product-detail.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { HomeComponent } from './shared/component/home/home.component';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { TrimPipe } from './shared/pipe/trim.pipe';
import { RatingComponent } from './shared/component/product-detail/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductdashComponent,
    ProductDetailComponent,
    NavbarComponent,
    HomeComponent,
    TrimPipe,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
