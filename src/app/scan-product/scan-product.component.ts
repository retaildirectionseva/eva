import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan-product',
  templateUrl: './scan-product.component.html',
  styleUrls: ['./scan-product.component.scss']
})
export class ScanProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.dataLayer.push({
      'event':'virtualPageView',
      'pageUrl':window.location.href,
      'pageTitle': 'ScanProduct',
      'serviceCode':'9925',
      'scanCode_code':'90999999999',
      'portalOwner': 'awpl'

    })
  }

}
