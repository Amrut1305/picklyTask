import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../model/product';

@Component({
  selector: 'app-productdash',
  templateUrl: './productdash.component.html',
  styleUrls: ['./productdash.component.scss']
})
export class ProductdashComponent implements OnInit {
  allProduct !: Array<Iproduct>
  constructor(
    private _productService : ProductService
  ) { }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(){
    this._productService.fetchAllProducts()
    .subscribe(res=>{
      this.allProduct = res
    })
  }
}
