import { Component, OnInit } from '@angular/core';
import { Repuesto } from '../../interfaces/repuesto.interfaces';
import { RepuestosService } from '../../services/repuestos.service';



@Component({
  selector: 'app-list-repuesto',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})


export class ListPageComponent implements OnInit {

  public repuestos: Repuesto[] = [];

  constructor( private _respuestoService: RepuestosService  ) {}


// metodos
// redirectToView() {
  
//   this.router.navegate(['/ruta-deseada']);
// }




  ngOnInit(): void {
    this._respuestoService.getRepuesto().subscribe(repuestos => {
        this.repuestos = repuestos;
        console.log(this.repuestos);
    });
}

}
