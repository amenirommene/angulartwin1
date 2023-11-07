import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user-reactive',
  templateUrl: './add-user-reactive.component.html',
  styleUrls: ['./add-user-reactive.component.css']
})
export class AddUserReactiveComponent {

  myForm : FormGroup;

  ngOnInit(){
    this.myForm=new FormGroup({
      groupe1: new FormGroup({
      firstName : new FormControl("",[Validators.required,Validators.minLength(3), Validators.pattern("[a-zA-Z]*")]),
      lastName : new FormControl(),
      password : new FormControl(),
      birthdate : new FormControl(),
      email : new FormControl(),
    }),
      category : new FormControl("Customer", Validators.required),
      profession : new FormControl(),
    });
  }
get firstNameUser(){
  return this.myForm.get('groupe1').get('firstName');
}
get firstgroupe(){
  return this.myForm.get('groupe1');
}
}
