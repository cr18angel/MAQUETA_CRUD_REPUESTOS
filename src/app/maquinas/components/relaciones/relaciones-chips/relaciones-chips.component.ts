import { Component, ElementRef, ViewChild, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { RepuestosService } from 'src/app/repuestos/services/repuestos.service';
import { Repuesto } from 'src/app/repuestos/interfaces/repuesto.interfaces';
import { MaquinasService } from 'src/app/maquinas/services/maquinas.service';
import { Maquina } from 'src/app/maquinas/interfaces/maquina.interface';

@Component({
  selector: 'app-relaciones-chips',
  templateUrl: './relaciones-chips.component.html',
  styleUrls: ['./relaciones-chips.component.css']
})
export class RelacionesChipsComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];

  fruitCtrl = new FormControl('');  
  filteredFruits: Observable<Repuesto[]>;

  searchCtrl = new FormControl('');
  filteredSearch: Observable<string[]>;



 // aqui estan todos los repuestos 
//  allFruits: string[] = [];
public repuestos: Repuesto[] = [];




  fruits: string[] = ['Parte de repuesto', '220606'];
  displayedFruits: string[] = [...this.fruits]; // Lista de frutas a mostrar



 

  @ViewChild('fruitInput')
  fruitInput!: ElementRef<HTMLInputElement>;

  constructor(
    @Inject(LiveAnnouncer) private announcer: LiveAnnouncer,
    private _repuestoService: RepuestosService
  

  ) 
  {
    this.filteredSearch = this.searchCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._searchFilter(value ?? ''))
    );

    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value ?? ''))
    );

    // Actualizar displayedFruits cuando searchCtrl cambia
    this.searchCtrl.valueChanges.pipe(
      startWith('')
    ).subscribe(value => {
      this.displayedFruits = this._searchFilter(value ?? '');
    });
  } // fin ctor 



ngOnInit(): void {
this.getRepuestos();
}





  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.fruits.push(value);
      this.displayedFruits.push(value); // Añadir a displayedFruits también
    }
    event.chipInput!.clear();
    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits.splice(index, 1);
      this.displayedFruits.splice(index, 1); // Remover de displayedFruits también
      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.displayedFruits.push(event.option.viewValue); // Añadir a displayedFruits también
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }
  private _filter(value: string): Repuesto[] {
    const filterValue = value.toLowerCase();
    
  if (!filterValue) {
    return this.repuestos; // Retorna todos los repuestos si el valor de entrada está vacío.
  }
    return this.repuestos.filter(fruit => fruit.Descripcion.toLocaleLowerCase().includes(filterValue));
  }
  private _searchFilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.fruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }




// funciones 
getRepuestos(){
  this._repuestoService.getRepuesto()
  .subscribe( repuesto => { this.repuestos   = repuesto
  
    console.log(this.repuestos); // Mover el log aquí
  },     error => {
    console.error('Error en el componente', error) } );



 
}



}