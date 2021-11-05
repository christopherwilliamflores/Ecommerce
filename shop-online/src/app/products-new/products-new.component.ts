import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../_services/products.service';
@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.scss']
})
export class ProductsNewComponent implements OnInit {
  productsForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router :Router
  ) {
    this.productsForm = this.formBuilder.group({
      product_id: [''],
      product_name: [''],
      stock: [''],
      price: [''],
      category: [''],
      descripcion: ['']
    });
  }

  ngOnInit(): void {
  }

  addProduct(products: any) {
    this.productsService.insertProduct(products).subscribe(
      response => {
          console.log(console);
          this.router.navigate(['/']);
          //Redireccionar a
      },
      error =>{
        console.error(error);
      }
    )
  }
};
