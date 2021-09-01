import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  _promotion: any = {};

  @Input()
  set data(val: any) {
    if (val != undefined && val != null) {
      this._promotion = val;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
