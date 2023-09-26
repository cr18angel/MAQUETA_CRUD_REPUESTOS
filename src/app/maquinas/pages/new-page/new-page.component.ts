import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Publisher, Maquina } from '../../interfaces/maquina.interface';
import { MaquinasService } from '../../services/maquinas.service';

import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { RelationDialogComponent } from 'src/app/relaciones/components/relation-dialog/relation-dialog.component';


@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})

export class NewPageComponent implements OnInit {

  public idPasoComponente?: string;



  public heroForm = new FormGroup({
    id:        new FormControl<string>(''),
    nombreMaquina: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<string>(''),
    modelo : new FormControl(''),
    peso: new FormControl(''),
    alt_img:    new FormControl(''),
  });


  constructor(
    private maquinaService: MaquinasService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
  ) {}

  get currentHero(): Maquina {
    const hero = this.heroForm.value as Maquina;
    return hero;
  }

  ngOnInit(): void {

    // si ulr es distinto a include no retornes nada 

    if ( !this.router.url.includes('edit') ) return;



    // aca el metodo que me caputura el id 
  
    
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.maquinaService.getMaquinaById( id ) ),
      ).subscribe( hero => {

        if ( !hero ) {
          return this.router.navigateByUrl('/');
        }

        this.heroForm.reset( hero );
        return;
      });

  }



  onSubmit():void {

    if ( this.heroForm.invalid ) return;

    if ( this.currentHero.id ) {
      this.maquinaService.updateHero( this.currentHero )
        .subscribe( hero => {
          this.showSnackbar(`${ hero.nombreMaquina } updated!`);
        });

      return;
    }


    // esta sera la logica, crea el repuesto y lo lleva a la pagina de su edicion, con un alert de si quieres hacer de una vez su realcion 

    this.maquinaService.addHero( this.currentHero )
      .subscribe( hero => {
        // TODO: mostrar snackbar, y navegar a /heroes/edit/ hero.id

        //antigua. 
             this.router.navigate(['/heroes/edit', hero.id ]);

        // nueva ruta para asigaar las realaciones 

        // this.router.navigate(['/relaciones/list/', hero.id]);
        this.showSnackbar(`${ hero.nombreMaquina } created!`);

        // para pasar al otro coponente 
        this.idPasoComponente = hero.id;
      
         this.openDialog()
      });
  }



// funcion para abrir relaciones desde editar 
onRelaciones(){
  if ( this.currentHero.id ) {
   this.router.navigate(['/relaciones/list', this.currentHero.id]);
}

}









  onDeleteHero() {
    if ( !this.currentHero.id ) throw Error('Hero id is required');

    const dialogRef = this.dialog.open( ConfirmDialogComponent, {
      data: this.heroForm.value
    });

    dialogRef.afterClosed()
      .pipe(
        filter( (result: boolean) => result ),
        switchMap( () => this.maquinaService.deleteHeroById( this.currentHero.id )),
        filter( (wasDeleted: boolean) => wasDeleted ),
      )
      .subscribe(() => {
        this.router.navigate(['/heroes']);
      });




    


  }

  showSnackbar( message: string ):void {
    this.snackbar.open( message, 'done', {
      duration: 2500,
    })
  }



// funcion que abre el dialogo en el componente principal 

  openDialog(): void{
    this.dialog.open(RelationDialogComponent,{

      data: {
        idPasoComponente: this.idPasoComponente
  
    }});
  
  }


  

}
