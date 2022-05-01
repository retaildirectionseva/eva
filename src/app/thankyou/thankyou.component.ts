import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {

  constructor() { }

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

}
