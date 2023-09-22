import { Component, ElementRef, ViewChild, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-relaciones-chips',
  templateUrl: './relaciones-chips.component.html',
  styleUrls: ['./relaciones-chips.component.css']
})
export class RelacionesChipsComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];

  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;

  searchCtrl = new FormControl('');
  filteredSearch: Observable<string[]>;

  fruits: string[] = ['Parte de repuesto', '220606'];
  displayedFruits: string[] = [...this.fruits]; // Lista de frutas a mostrar
  allFruits: string[] = ['216125', '220606', '1223-1002', 'otro', 'otros'];

  @ViewChild('fruitInput')
  fruitInput!: ElementRef<HTMLInputElement>;

  constructor(@Inject(LiveAnnouncer) private announcer: LiveAnnouncer) {
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

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  private _searchFilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.fruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
}