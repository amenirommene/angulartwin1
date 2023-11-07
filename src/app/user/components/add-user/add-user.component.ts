import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(private _service:UserService){

  }
user : User=new User();
ngOnInit(){
  this.user.accountCategory="Customer";
}
f(err){
console.log(err);
}

addCustomer(){
this._service.addUser(this.user).subscribe();
}
}
