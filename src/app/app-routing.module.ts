import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ScanProductComponent } from './scan-product/scan-product.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  {
    path: 'home/:servicecode',
    component: HomeComponent
  },
  {
    path: 'scanProduct/:servicecode',
    component: ScanProductComponent
  },
  {
    path: 'basket/:servicecode',
    component: BasketComponent
  },
  {
    path: 'checkout/:servicecode',
    component: CheckoutComponent
  },
  {
    path: 'thankyou/:servicecode',
    component: ThankyouComponent
  },
  {
    path: 'terms_conditions',
    component: TermsConditionsComponent
  },
  {
    path: 'itemDescription/:servicecode/:barcode',
    component: ItemDetailsComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];
let config = {useHash:true,enableTracing:true};

@NgModule({
  imports: [RouterModule.forRoot(routes,config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
