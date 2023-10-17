import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers:[UserService]
})
export class AppComponent {

  //injecter le service UserService sous le nom de us
  constructor(/*private us:UserService*/){
    console.log("constructor");
  }
  ngOnInit(){ //méthode hook 
   // console.log("ngOnInit");
   // console.log(this.title);
   // console.log("appcomponent-"+this.us.getNb());
  }
  title = 'Angular123';
  getVal(){
    alert("test");
  }
  setTitle(title:string){
   this.title=title;
   console.log(this.title);
  }
}
