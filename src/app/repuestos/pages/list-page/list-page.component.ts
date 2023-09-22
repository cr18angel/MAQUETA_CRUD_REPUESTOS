import { Component, OnInit } from '@angular/core';
import { Relaciones, Repuesto } from '../../interfaces/repuesto.interfaces';
import { RepuestosService } from '../../services/repuestos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';




@Component({
  selector: 'app-list-repuesto',
  templateUrl: './list-page.component.html',
    styleUrls: ['./list-page.component.css']
  })

 



export class ListPageComponent implements OnInit {
  // variable que identifica si estoy editando o no  
  byMaquina: boolean = false;


  public repuestos: Repuesto[] = [];
  public relaciones: Relaciones[] = [];

  


  constructor(
    private _respuestoService: RepuestosService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    public dialog: MatDialog


    
    ) {}


// metodos


// en este metodo la logica para traer por id o el listado completo 
  ngOnInit(): void {

     
  if(!this._router.url.includes('byMaquina')) return  this.llenarData();


  this.byMaquina = true;

   this.llenarDataByMaquina();
    
  }

// funciones -------------------------------------- 

// treer data
llenarData():void {
this._respuestoService.getRepuesto().subscribe( repuestos => {
  this.repuestos = repuestos;
  })
}


llenarDataByMaquina() {
this._activatedRoute.params
.pipe(
  
  switchMap(({id}) => this._respuestoService.getRepuestoByMaquinaId(id) ),

).subscribe( repuesto => {

this.relaciones= repuesto || [];


if(!this.relaciones.length){
  this.openDialog()

}// si esta vacio 


console.log(this.relaciones)
})


} // fin llenar data by maquina



openDialog(){
  this.dialog.open(ConfirmDialogComponent);
}






}// fin class
