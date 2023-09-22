import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { __values } from 'tslib';
import { RepuestosService } from '../../services/repuestos.service';
import { Repuesto } from '../../interfaces/repuesto.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent implements OnInit {

// mi variable para bloquear los inputs al editar y solo habilitar el cambio de imagen 
editar: boolean = false;


  public repuestoForm = new FormGroup({

    id:        new FormControl<string>(''),

    nombreRepuesto: new FormControl<string>({value: '', disabled: false}),
    marca: new FormControl<string>({value: '', disabled: false}),
    modelo : new FormControl({value: '', disabled: false}),
    peso: new FormControl({value: '', disabled: false}),
    Imagen:    new FormControl(''),
  });


  constructor(
    private _repuestosService: RepuestosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {}

  //convierto lo que viene por el form para mandarlos a la bbdd
  get currenRepuesto(): Repuesto {
    const repuesto = this.repuestoForm.value as Repuesto;
    return repuesto;
  }



  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;
    // esta variable me ayuda a bloquear inputs si estoy editando en vez de creando 
    this.editar= true;
    this.activatedRoute.params
    .pipe(
      switchMap(({id})  => this._repuestosService.getRepuestoById( id )  ),

    ).subscribe( repuesto => {
      this.repuestoForm.reset(repuesto);
    })    


    if(this.editar){
      this.repuestoForm.get('nombreRepuesto')?.disable();
      this.repuestoForm.get('marca')?.disable();
      this.repuestoForm.get('modelo')?.disable();
      this.repuestoForm.get('peso')?.disable();

    }

  }


  onSubmit(): void {
  //  if (this.repuestoForm.invalid) return;

   if ( this.currenRepuesto.id) {
    this._repuestosService.updateRepuesto( this.currenRepuesto)
    .subscribe( repuesto => {

        // snack bar
    });
  
  return;
  }



// caso que no venga con id 
this._repuestosService.addRespuesto( this.currenRepuesto)
.subscribe( repuesto => {

  // snack bar
});

this.prueba();

}// fin onSubmit

  // funciones 





  prueba(){
    console.log('prueba')
  }

}
