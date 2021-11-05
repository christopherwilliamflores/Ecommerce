import { NgModule } from '@angular/core';
import { ProductsTableComponent } from './productos/productos.component';
import { ProductsNewComponent } from './products-new/products-new.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { Routes,RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { ProductsDeleteComponent } from './products-delete/products-delete.component';

const routes : Routes = [
  {path: '',component:ProductsTableComponent},
  {path: 'products/new', component: ProductsNewComponent},
  {path: 'products/delete/:product_id', component: ProductsDeleteComponent},
  {path: 'products/view/:product_id', component: ProductsViewComponent}

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
