import {  Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { Repuesto } from 'src/app/repuestos/interfaces/repuesto.interfaces';
import { RepuestosService } from 'src/app/repuestos/services/repuestos.service';
import { Relacion } from '../../interfaces/relacion.interfaces';
import { ContentObserver } from '@angular/cdk/observers';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { __param } from 'tslib';
import { RelacionesService } from '../../services/relaciones.service';

@Component({
  selector: 'table-relacion',
  templateUrl: './table-relacion.component.html',
  styleUrls: ['./table-relacion.component.css']
})
export class TableRelacionComponent implements OnInit{

maquinaId!: string; 

allRepuestos: Repuesto[] = [];

listResult: Relacion [] = [];

final: Relacion [] = [];

@ViewChild(MatSelectionList) fatherList!: MatSelectionList;

constructor(
  private _relacionService: RelacionesService,
  private getRepuesto: RepuestosService,
  private activedRoute: ActivatedRoute
  
  ) {}

  ngOnInit(): void {
   this.getRepuestos();
  }

  getRepuestos(): void {
    this.getRepuesto.getRepuesto().subscribe(data => {
      this.allRepuestos = data;
  
      this.activedRoute.params
        .pipe(
          tap(({ id }) => {
            this.maquinaId = id;
            console.log(this.maquinaId); // Mueve el console.log aquí
          })
        )
        .subscribe();
    });
  }

  getSelectedItems(): void {
    this.fatherList.selectedOptions.selected.forEach(option => {
     this.listResult = option.value;
    const data = this.listResult;


      const nuevaEntrada: Relacion = {
        heroesId: this.maquinaId.toString(),
        repuestosId: data.toString() 
      };

      this._relacionService.addRelacion(nuevaEntrada)
      .subscribe( response => {
        console.log('Relacion Agregada', response)
      })


     
    });
  }
  







} // aca los que esta ocurriendo es que estoy tomando los datos de viewCHild de  mi html y los estoy capturando 




