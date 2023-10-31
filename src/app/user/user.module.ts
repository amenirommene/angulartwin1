import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AddUserComponent } from './components/add-user/add-user.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule, //par défaut : directive ngFor, ngIf, ngSwitch, ngClass, ngStyle, ....
    UserRoutingModule,
    FormsModule
  ],
  providers: []
})
export class UserModule { }
