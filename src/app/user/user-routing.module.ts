import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
//route par défaut au chargement du module
 {path:"", component:UserListComponent, children:[
    {path:"users/:category", component:UsersComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
