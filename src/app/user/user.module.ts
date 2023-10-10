import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent
  ],
  imports: [
    CommonModule, //par défaut : directive ngFor, ngIf, ngSwitch, ngClass, ngStyle, ....
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
