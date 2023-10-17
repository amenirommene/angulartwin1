import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserModule } from '../user/user.module';

@Injectable(/*{
  providedIn: UserModule
}*/)
export class UserService {

  constructor() { 
    console.log("je suis user service");
  }

  getNb() :string {
    console.log("test nb");
    return "5";
  }

  getUsers(){
    return [  
      {  
      idCustomer: 122,  
      firstName: "Mila",  
      lastName: " Kunis",  
      birthDate: "1999-06-30",  
      accountCategory: "Admin",  
      email: "mila@kunis.com",  
      password: "test",  
      picture: "https://bootdey.com/img/Content/avatar/avatar3.png",  
      profession: "Software Engineer"  
      },  
      {  
      idCustomer: 2,  
      firstName: "George",  
      lastName: "Clooney",  
      birthDate: "1999-06-30",  
      accountCategory: "Customer",  
      email: "marlon@brando.com",  
      password: "test",  
      picture: "https://bootdey.com/img/Content/avatar/avatar2.png",  
      profession: "Software Engineer"  
      },  
      {  
      idCustomer: 3,  
      firstName: "George",  
      lastName: "Clooney",  
      birthDate: "1999-06-30",  
      accountCategory: "Customer",  
      email: "marlon@brando.com",  
      password: "test",  
      picture: "https://bootdey.com/img/Content/avatar/avatar1.png",  
      profession: "Software Engineer"  
      },  
      {  
      idCustomer: 4,  
      firstName: "Ryan",  
      lastName: "Gossling",  
      birthDate:"1999-06-30",  
      accountCategory: "Golden",  
      email: "Ryan@nicholson.com",  
      password: "test",  
      picture: "https://bootdey.com/img/Content/avatar/avatar4.png",  
      profession: "Software Engineer" 
      },  
      {  
      idCustomer: 5,  
      firstName: "Robert",  
      lastName: "Downey",  
      birthDate: "1999-06-30",  
      accountCategory: "Blocked",  
      email: "robert@nicholson.com",  
      password: "test",  
      picture: "https://bootdey.com/img/Content/avatar/avatar5.png",  
      profession: "Software Engineer"  
      } 
      ]
      
      
  
  }
  getAllUsers(){
    
  }
}
