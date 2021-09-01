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
    apiData.subscribe(res => {
      if (res.status == 200) {
        this._categories = res.response.categories.sort((a: any, b: any) => (a.ordinal < b.ordinal ? -1 : 1));
        const arr:any = [];
        for (let a = 0; a < res.response.products.length; a++) {
          const element = res.response.products[a].product_data;
          element.category_id = element.categories[0].category_id;
          element.ordinal = element.categories[0].ordinal;
          for (let i = 0; i < this._categories.length; i++) {
            const category = this._categories[i];
            if (category.id == element.category_id) {
              element.ordinal_Category = category.ordinal;
            }
          }
          arr.push(element);
        }
        this._products = arr;
      }
    });
  }


}
