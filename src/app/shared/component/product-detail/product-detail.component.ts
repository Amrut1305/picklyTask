import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  prodCount: number = 1
  id !: string
  product !: Iproduct
  selectedImg !: string
  constructor(
    private _route: ActivatedRoute,
    private _productServ: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct()
  }
  getProduct() {
    this.id = this._route.snapshot.params['id']
    this._productServ.getProduct(this.id)
      .subscribe((res) => {
        this.product = res
        this.selectedImg = this.product.images[0]
      })

  }
  onSelectImage(img: string) {
    this.selectedImg = img
  }
  onProductAdd() {
    if(this.prodCount<10){
      this.prodCount++
    }
  }
  onProductRemove() {
    if(this.prodCount>1){
      this.prodCount--
    }
  }


}
