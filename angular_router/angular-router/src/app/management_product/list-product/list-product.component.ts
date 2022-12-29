import {Component, OnInit} from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../model/product";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private _productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll()
  }


  private getAll() {
    this.products = this._productService.getAll();
  }
}
