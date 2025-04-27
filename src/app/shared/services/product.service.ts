import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { Iproduct } from '../model/product';
import { HttpClient } from '@angular/common/http';

 
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL : string = environment.baseUrl
  PRODUCT_URL : string = `${this.BASE_URL}/products/filter?category=Mobiles&subcategory=iPhones`
  constructor(
    private _http : HttpClient
  ) { }


  fetchAllProducts():Observable<Array<Iproduct>>{
    // const params = new HttpParams().set('Category', 'Mobiles')
    return this._http.get<Array<Iproduct>> (this.PRODUCT_URL)
    .pipe(
      map((res:Array<Iproduct>)=>res.slice(0,20))
    )
  }

  getProduct(id:string):Observable<Iproduct>{
    return this._http.get<Iproduct>(`${this.BASE_URL}/products/${id}`)
  }

}
