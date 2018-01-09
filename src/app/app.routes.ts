import { Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DetailComponent } from './detail/detail.component';

export const rootRouterConfig: Routes = [
  { path: '',  component: ListComponent, pathMatch: 'full'},
  { path: 'design/:project',  component: DetailComponent, pathMatch: 'full'},
  { path: 'games',  component: ListComponent, 
    children: [
      { path: 'games/:project', component: DetailComponent }
    ]
  },
  { path: 'art',  component: PortfolioComponent, 
    // children: [
    //   { path: 'art/:project', component: ListComponent }
    // ]
  }
];

