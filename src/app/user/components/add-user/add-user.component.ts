import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
user : User=new User();
ngOnInit(){
  this.user.accountCategory="Customer";
}
f(err){
console.log(err);
}
}
