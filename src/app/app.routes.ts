import { Routes } from '@angular/router';

import { ListComponent } from './list/list.component';

export const rootRouterConfig: Routes = [
  { path: '',  component: ListComponent, pathMatch: 'full'},
  { path: '',  component: ListComponent, 
    children: [
      { path: ':project', component: ListComponent,
        // children: [
        //   { path: '', component: RepoDetailComponent },
        //   { path: ':repo', component: RepoDetailComponent }
        // ]
      }
    ]
  }
];

