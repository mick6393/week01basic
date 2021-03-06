import { Routes } from '@angular/router';


import { Week01Component } from './week01/week01.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';


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
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Buttons',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Bootstrap4' }, { title: 'Buttons' }]
        }
      },
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'Cards',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Bootstrap4' }, { title: 'Cards' }]
        }
      },
    ]
  }
];
