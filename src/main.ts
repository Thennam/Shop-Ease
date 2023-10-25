
import {  importProvidersFrom } from '@angular/core'
import {  provideRouter } from '@angular/router'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations'

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule, BrowserAnimationsModule),
    provideRouter([
        {
            path: '',
            loadChildren: () => import('./app/modules/layout/layout-routing.module').then((mod) => mod.LayoutRoutingModule),
        },
    ]),
    importProvidersFrom(HttpClientModule, BrowserAnimationsModule),
    provideAnimations(),
    provideAnimations()
],

}).catch((err) => console.error(err))
