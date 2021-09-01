
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  _product:any = {};

  @Input()
  set data(val: any) {
    if (val != undefined && val != null) {
      this._product = val;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
