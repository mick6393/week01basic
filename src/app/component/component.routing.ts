import { Routes } from '@angular/router';


import { Week01Component } from './week01/week01.component';


export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'week01',
        component: Week01Component,
        data: {
          title: 'Week01',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Bootstrap4' }, { title: 'Week01' }]
        }
      },
    ]
  }
];
