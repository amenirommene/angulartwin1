import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideComponent } from './slide/slide.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"home", component:SlideComponent},
  {path:"mainusers", component:UserListComponent, children:[
    {path:"users/:category", component:UsersComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
