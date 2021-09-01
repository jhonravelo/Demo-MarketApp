import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { VerifyRoutingService } from './../directives/validate.routing';

const routes: Routes = [
  {
    path: 'products',
    component: ListProductsComponent,
    canActivate: [VerifyRoutingService],
    loadChildren: () => import('./products/products.module').then(i => i.UsersModule),
  }, {
    path: 'login',
    canActivate: [VerifyRoutingService],
    loadChildren: () => import('./login/login.module').then(i => i.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {
}
