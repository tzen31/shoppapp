import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
import { ResultRequest } from '../models/result-request';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = []

  //private urlApi: string = "http://localhost:4200/assets/api/products.json";
  private urlApi: string = environment.serveurUrl.products

  constructor(private http: HttpClient) { }

  /*
  getProducts(): Promise<Product[]> {
    return new Promise((resolve, reject)=>{
      if (this.products.length){
        resolve(this.products)
      } else {
        reject([])
      }
    })
    //return this.products
  }
  */
 getProducts(): Observable<ResultRequest<Product>> {
  /**
   * GET
   * POST
   * PUT
   * PATCH
   * DELETE
   */
  return this.http.get<ResultRequest<Product>>(this.urlApi)
 }

  getNumber(): Observable<Number>{
    return of(60)
  }

  getSecond(): Observable<Number>{
    return interval(1000)
  }

  addProduct(product: Product){

  }

  editProduct(_id: string, product: Product){

  }

  deleteProduct(_id: string){

  }

}
