import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddUserReactiveComponent } from './components/add-user-reactive/add-user-reactive.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    AddUserComponent,
    AddUserReactiveComponent
  ],
  imports: [
    CommonModule, //par défaut : directive ngFor, ngIf, ngSwitch, ngClass, ngStyle, ....
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class UserModule { }
