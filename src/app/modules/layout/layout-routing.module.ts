import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

// Layout lazy loading
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children : [
      {
          path: 'home',
          loadChildren: () =>
            import('../layout/home/home-routing.module').then(
              (mod) => mod.HomeRoutingModule
            ),
        },
        {
          path: '',
          loadChildren: () =>
            import('../layout/product/product-routing.module').then(
              (mod) => mod.ProductRoutingModule
            ),
        },
        {
          path: 'about',
          loadChildren: () =>
            import('../layout/about_us/about-us-routing.module').then(
              (mod) => mod.AboutUsRoutingModule
            ),
        },
        {
          path: 'contact',
          loadChildren: () =>
            import('../layout/contact_us/contact-us-routing.module').then(
              (mod) => mod.ContactUsRoutingModule
            ),
        },
        {
          path: 'information',
          loadChildren: () =>
            import('../layout/information/information-routing.module').then(
              (mod) => mod.InformationRoutingModule
            ),
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
