import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

    getProducts() {
      return this.http.get<any>('http://localhost:3000/productos');
    }

    //llamada al backend
    insertProduct(products:any){
      return this.http.post<any>('http://localhost:3000/productos',products);
    }

    deleteProduct(product_id:any){
      return this.http.delete<any>(`http://localhost:3000/productos/${product_id}`);
    }

    getProductsById(product_id:any) {
      return this.http.get<any>(`http://localhost:3000/productos/${product_id}`);
    }
}

