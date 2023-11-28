import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  //@Input : décorateur de proprité
@Input() image : string="";
@Input() title: string="";
@Input() category:string="";
@Input() description:string="";

}
