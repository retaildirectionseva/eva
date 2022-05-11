import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {

  constructor() { 
    this.thankyouEvent(5000);
    this.errorEvent('Thankyou','itemDetails',new Error('Error Message'));
    this.itemAddedToCartEvent('90999999999','desc',234.45);
    this.itemPurchasedEvent('90999999999','desc',12,234.45);
  }



  ngOnInit(): void {
    window.dataLayer.push({
      'event':'virtualPageView',
      'pageUrl':window.location.href,
      'pageTitle': 'Thankyou',
      'serviceCode':'9925',
      'store': 'ongole',
      'scanCode_code':'90999999999',
      'portalOwner': 'awpl'

    })
  }
  thankyouEvent(amount?: number) {
    window.dataLayer.push({
      'event': 'thankyouEvent',
      'amount': amount,
      'store': '9925',
      'portalOwner': 'awpl'
    });

  }
  errorEvent(pageTitle?: string, endpoint?: string, error?: any) {
    window.dataLayer.push({
      'event': 'errorEvent',
      'pageTitle': pageTitle,
      'endpoint': endpoint,
      'error': JSON.stringify(error)
    });

  }

  itemPurchasedEvent(itemScanCode?: string, desc?: string, qty?:number, price?: number) {
    window.dataLayer.push({
      'event': 'itemPurchased',
      'description': desc,
      'scanCode_code': itemScanCode,
      'quantity': qty,
      'price': price
    });

  }
  itemAddedToCartEvent(itemScanCode?: string, desc?: string, price?: number) {
    window.dataLayer.push({
      'event': 'itemAddedToCart',
      'description': desc,
      'scanCode_code': itemScanCode,
      'price': price
    });

  }
}
