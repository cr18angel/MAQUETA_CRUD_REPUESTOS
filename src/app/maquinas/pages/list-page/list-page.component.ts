import { Component, OnInit } from '@angular/core';
import { Maquina } from '../../interfaces/maquina.interface';
import { MaquinasService } from '../../services/maquinas.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [

  ],

  

})
export class ListPageComponent implements OnInit {

  public maquinas: Maquina[] = [];

  constructor( private maquinaService: MaquinasService ) {}

  ngOnInit(): void {
    this.maquinaService.getMaquinas()
      .subscribe( maquinas => this.maquinas = maquinas );
  }

}
