import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ListComponent } from './list/list.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DetailComponent } from './detail/detail.component';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PortfolioComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
