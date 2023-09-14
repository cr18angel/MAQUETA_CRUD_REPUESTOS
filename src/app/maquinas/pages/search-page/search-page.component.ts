import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Maquina } from '../../interfaces/maquina.interface';
import { MaquinasService } from '../../services/maquinas.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {

  public searchInput = new FormControl('');
  public maquinas: Maquina[] = [];
  public selectedHero?: Maquina;

  constructor( private maquinaService: MaquinasService ){}

  searchHero() {
    const value: string = this.searchInput.value || '';

    this.maquinaService.getSuggestions( value )
      .subscribe( heroes => this.maquinas = heroes );
  }


  onSelectedOption( event: MatAutocompleteSelectedEvent ): void {
    if ( !event.option.value ) {
      this.selectedHero = undefined;
      return;
    }

    const hero: Maquina = event.option.value; 
    this.searchInput.setValue( hero.nombreMaquina );

    this.selectedHero = hero;

  }


}
