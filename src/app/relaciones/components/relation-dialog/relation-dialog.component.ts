import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-relation-dialog',
  templateUrl: './relation-dialog.component.html',
  styleUrls: ['./relation-dialog.component.css']
})
export class RelationDialogComponent  implements OnInit{
  public idPasoComponente?: string;




  // aca data viene de otro componente, puedo incluso verlo en console.log = >  pero lo asignare a una variable aca 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    if (this.data) {
      
      this.idPasoComponente = this.data.idPasoComponente;
      
    }
  }


}
