import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const apiData = ajax('http://www.mocky.io/v2/5ed0b4443500005b00ff9e02');

@Component({
  selector: 'list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})

export class ListProductsComponent implements OnInit {

  _categories: any = [];
  _products: any = [];

  constructor() { }

  ngOnInit(): void {
    apiData.subscribe(async result => {
      if (result.status == 200) {

        this._categories = result.response.categories.sort((a: any, b: any) => (a.ordinal < b.ordinal ? -1 : 1));
        let arr:any = [];

        for (let a = 0; a < result.response.products.length; a++) {

          const product = result.response.products[a].product_data;
          product.category_id = product.categories[0].category_id;
          product.ordinal = product.categories[0].ordinal;

          for (let i = 0; i < this._categories.length; i++) {
            const category = this._categories[i];

            if (category.id == product.category_id) {
              product.ordinal_Category = category.ordinal;
            }

          }
          arr.push(product);
        }

        arr = arr.sort((a: any, b: any) => (a.ordinal < b.ordinal ? -1 : 1));
        this._products = arr;
        
      }
    });
  }


}
