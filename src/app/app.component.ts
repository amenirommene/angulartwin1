import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    console.log("constructor");
  }
  ngOnInit(){ //méthode hook 
    console.log("ngOnInit");
    console.log(this.title);
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
