import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.dataLayer.push({
      'event':'virtualPageView',
      'pageUrl':window.location.href,
      'pageTitle': 'terms_conditions',
      'serviceCode':'9925',
      'scanCode_code':'90999999999'

    })
  }

}