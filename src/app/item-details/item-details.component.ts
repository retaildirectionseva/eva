import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.dataLayer.push({
      'event':'virtualPageView',
      'pageUrl':window.location.href,
      'pageTitle': 'ItemDescription',
      'serviceCode':'9925',
      'store': 'ongole',
      'scanCode_code':'90999999999',
      'portalOwner': 'awpl'

    })
  }

}
