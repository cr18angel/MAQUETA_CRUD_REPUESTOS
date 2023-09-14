import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { MaquinasService } from '../../services/maquinas.service';
import { Maquina } from '../../interfaces/maquina.interface';

@Component({
  selector: 'app-maquina-page',
  templateUrl: './maquina-page.component.html',
  styles: [
  ]
})
export class MaquinaPageComponent implements OnInit {

  public maquina?: Maquina;

  constructor(
    private maquinaService: MaquinasService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.maquinaService.getMaquinaById( id )),
      )
      .subscribe( maquina => {

        if ( !maquina ) return this.router.navigate([ '/heroes/list' ]);

        this.maquina = maquina;
        return;
      })
  }

  goBack():void {
    this.router.navigateByUrl('heroes/list')
  }

}
