import { Component, Input, OnInit } from '@angular/core';
import { Repuesto } from '../../interfaces/repuesto.interfaces';

@Component({
  selector: 'repuestos-repuesto-card',
  templateUrl: './card-repuestos.component.html',
  styleUrls: ['./card-repuestos.component.css']
})
export class CardRepuestosComponent  implements OnInit{

// este imput hace que pueda trabajar con list 

  @Input()
  public repuesto!: Repuesto;


  ngOnInit(): void {
    if ( !this.repuesto ) throw Error('Hero property is required');
  }
}
