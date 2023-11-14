import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({ //décorateur de classe
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
   //@Input : décorateur de propriété qui déclare que cette
   //propriété est une propriété d'entrée
   //la valeur passé sera envoyée par le composant parent
   //composant parent : le composant qui va appeler ce composant dans son template
  @Input() prop1:string="azertyuio";
  //name : propriété interne = 
  //=> attribut classique
  //=> non visible de l'extérieur 
  name: string="montassar";
  //proprité de sortie = evenement
  @Output() prop2 = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.prop1);
  }
  f(){
    //emettre l'event prop2
    this.prop2.emit(this.name);
  }

}
