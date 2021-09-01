
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  _product: any = {};

  @Input()
  set data(Value: any) {
    if (Value != undefined && Value != null) {
      this._product = Value;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
