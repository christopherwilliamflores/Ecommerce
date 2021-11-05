import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {ProductsService} from '../_services/products.service'

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.scss']
})
export class ProductsDeleteComponent implements OnInit {
  product_id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router : Router,
    private productsService :ProductsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      data =>{
        this.product_id = data.get('product_id');
        console.log(this.product_id);
      }
    )
  }
deleteProduct(product_id: any){
  this.productsService.deleteProduct(product_id).subscribe(
    response => {
      console.log(response);
      this.router.navigate(['/']);
    },
    error =>{
      console.error(error);
      this.router.navigate(['/']);
    }
  )

}

goBack(){
  this.router.navigate(['/products']);
}

}
