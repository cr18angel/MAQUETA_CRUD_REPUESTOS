import { Component, Input, OnInit } from '@angular/core';
import { Maquina } from '../../interfaces/maquina.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'maquinas-maquina-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})



export class CardComponent implements OnInit {


  // Router para redireccionar 
  constructor(private router: Router) { }

  @Input()
  public maquina!: Maquina;


  ngOnInit(): void {
    if ( !this.maquina ) throw Error('Hero property is required');
  }




// funciones 
goToRepuestos() {
  this.router.navigate(['/repuestos']);
}


}
