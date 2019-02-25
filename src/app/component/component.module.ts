import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';

import { Week01Component } from './week01/week01.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ComponentsRoutes), FormsModule, ReactiveFormsModule, JsonpModule, NgbModule],
  declarations: [

    Week01Component,

    ButtonsComponent,

    CardsComponent
  ]
})
export class ComponentsModule {}
