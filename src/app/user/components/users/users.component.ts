import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  //injecter le service ActivatedRoute 
constructor(private ac:ActivatedRoute){}

ngOnInit(){ //méthode appelé juste après la création du composant
  console.log("je suis ngOnInit");
//exemple1: avec snapshot
  //console.log(this.ac.snapshot.params['category']);
  //exemple2: avec paramMap
  this.ac.paramMap.subscribe(res=>{console.log(res.get('category')); this.category=res.get('category')});
}
 category : string = "";
  delete(i:number){
    this.list.splice(i,1);
  }
list : User[]= [  
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
