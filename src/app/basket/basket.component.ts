import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.dataLayer.push({
      'event':'virtualPageView',
      'pageUrl':window.location.href,
      'pageTitle': 'Basket',
      'serviceCode':'9925',
      'store': 'ongole',
      'scanCode_code':'90999999999',
      'portalOwner': 'awpl'
 
    });
  }

}
