import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, //par défaut : directive ngFor, ngIf, ngSwitch, ngClass, ngStyle
    UserRoutingModule
  ]
})
export class UserModule { }
