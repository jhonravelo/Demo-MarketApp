import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';

const routes: Routes = [
  { path: 'list', component: ListProductsComponent },
  { path: '**', pathMatch: '**', redirectTo: '/products/list' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {
}
