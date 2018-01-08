import { Routes } from '@angular/router';

import { ListComponent } from './list/list.component';

export const rootRouterConfig: Routes = [
  { path: '',  component: ListComponent, pathMatch: 'full'},
  { path: 'design/:project',  component: ListComponent, pathMatch: 'full'},
  { path: 'games',  component: ListComponent, 
    children: [
      { path: 'games/:project', component: ListComponent }
    ]
  },
  { path: 'art',  component: ListComponent, 
    // children: [
    //   { path: 'art/:project', component: ListComponent }
    // ]
  }
];

