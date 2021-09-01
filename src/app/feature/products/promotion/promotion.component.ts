import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  _promotion: any = {};

  @Input()
  set data(Value: any) {
    if (Value != undefined && Value != null) {
      this._promotion = Value;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
