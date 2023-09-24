import {  Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { Repuesto } from 'src/app/repuestos/interfaces/repuesto.interfaces';
import { RepuestosService } from 'src/app/repuestos/services/repuestos.service';

@Component({
  selector: 'table-relacion',
  templateUrl: './table-relacion.component.html',
  styleUrls: ['./table-relacion.component.css']
})
export class TableRelacionComponent implements OnInit{

allRepuestos: Repuesto[] = [];

nombre: Repuesto [] = [];

@ViewChild(MatSelectionList) fatherList!: MatSelectionList;

constructor(private getRepuesto: RepuestosService) {}

  ngOnInit(): void {
   this.getRepuestos();
  }

 


getRepuestos(): void{
  this.getRepuesto.getRepuesto().subscribe( data => {

    this.allRepuestos = data;
    console.log(this.allRepuestos);
  })
}


getSelectedItems(): void {
  const repuestosSeleccionados: Repuesto[] = this.fatherList.selectedOptions.selected.map(option => option.value);
  console.log(repuestosSeleccionados);
}
  


 

}



// aca los que esta ocurriendo es que estoy tomando los datos de viewCHild de  mi html y los estoy capturando 




