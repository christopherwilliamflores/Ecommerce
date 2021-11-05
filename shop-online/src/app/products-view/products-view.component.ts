import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductsService} from '../_services/products.service';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss']
})
export class ProductsViewComponent implements OnInit {
  product:any;
  constructor(
    private activateRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(
      data =>{
        var product_id = data.get('product_id');

        this.productsService.getProductsById(product_id).subscribe(
          response => {
            console.log(response);
            this.product = response;
          },
          error => {
            console.error(error);
          }
        )
      }
    )
  }

}
