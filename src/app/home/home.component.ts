import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare global {
  interface Window { dataLayer: any[]; }
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
   window.dataLayer.push({
     'event':'virtualPageView',
     'pageUrl':window.location.href,
     'pageTitle': 'Home',
     'serviceCode':'9925',
      'store': 'ongole',
      'scanCode_code':'90999999999',
     'portalOwner': 'awpl'

   });
  }
  gotoScanPage(){
    this.router.navigateByUrl('/scanProduct/9925');
  }
}
