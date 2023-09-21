import { Component, OnInit } from '@angular/core';
import { RepuestosService } from '../../services/repuestos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Repuesto } from '../../interfaces/repuesto.interfaces';

@Component({
  selector: 'app-repuesto-page',
  templateUrl: './repuesto-page.component.html',
  styleUrls: ['./repuesto-page.component.css']
})
export class RepuestoPageComponent implements OnInit {

  public repuesto? : Repuesto;

  constructor(
    private _repuestoService: RepuestosService,
    // con esto veo lo que esta en la url 
    private _activatedRoute: ActivatedRoute,
    // con esto ruteo a otro lado 
    private _router: Router
    ) {}

    ngOnInit(): void {
      this._activatedRoute.params
      .pipe(
        delay(500),

        // le paso el id  para llamar la funcion 
          switchMap( ({id}) => this._repuestoService.getRepuestoById(id)), 
      )
      // si hay un error regresalo a otra pagina 
      .subscribe (repuesto => {
       if (!repuesto) return this._router.navigate(['repuestos/list']);
       this.repuesto = repuesto
      console.log(repuesto);
       return;
      })


  //  con esto se toma lo que viene por url 

  //     this._activatedRoute.params
  //     .pipe(

  //     ). subscribe (params => {
  //       console.log({params})
  //     } )



    }
}
