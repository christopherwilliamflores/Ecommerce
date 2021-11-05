import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {ProductsService} from '../_services/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})

export class ProductsTableComponent implements OnInit {

  products: any[] = [
    {
      product_name: "Polo ",
      price: "20 ",
    },
    {
      product_name: "Berde ",
      price: "20 ",
    }
  ]


constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }

  navigateToDelete(product_id: any){
    this.router.navigate(['/products/delete', product_id]);
  }

}
