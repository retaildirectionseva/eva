import { Component } from '@angular/core';
import { Router } from '@angular/router';
// Declare gTM dataLayer array.
declare global {
  interface Window { dataLayer: any[]; }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eva';
  constructor(private router: Router) {
    window.dataLayer =  window.dataLayer || [];
   }

  gotoHomePage(){
    this.router.navigateByUrl('/home/9925');

  }
  gotoScanPage(){
    this.router.navigateByUrl('/scanProduct/9925');
  }

}
