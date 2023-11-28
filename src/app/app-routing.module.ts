import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SlideComponent } from './slide/slide.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  
  {path:"", redirectTo:"home", pathMatch:"full"}, //redirection
  {path:"home", component:SlideComponent, children:[
    {path:"test/test2", component:TestComponent}
  ]},
  {path:"mainusers", loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
 
  {path:"**", component:NotFoundComponent} //à placer dans la dernière position
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
