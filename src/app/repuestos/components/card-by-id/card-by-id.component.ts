import { Component, Input, OnInit } from '@angular/core';
import { Relaciones } from '../../interfaces/repuesto.interfaces';

@Component({
  selector: 'repuestosById-repuesto-card',
  templateUrl: './card-by-id.component.html',
  styleUrls: ['./card-by-id.component.css']
})
export class CardByIdComponent implements OnInit {

  @Input()
  public repuesto!: Relaciones;


  ngOnInit(): void {
    if ( !this.repuesto ) throw Error('Hero property is required');
  }

  setDefaultImage(event: any) {
    event.target.src = 'assets/heroes/SinImagen.JPG';
}
}
