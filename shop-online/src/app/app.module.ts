import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsTableComponent } from './productos/productos.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductsNewComponent } from './products-new/products-new.component';
import { AppRoutingModule } from './app--routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsDeleteComponent } from './products-delete/products-delete.component';
import { ProductsViewComponent } from './products-view/products-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsTableComponent,
    ProductsNewComponent,
    ProductsDeleteComponent,
    ProductsViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
