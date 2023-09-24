import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelacionesRoutingModule } from './relaciones-routing.module';
import { ListRelacionesComponent } from './pages/list-relaciones/list-relaciones.component';
import {MatListModule} from '@angular/material/list';
import { TableRelacionComponent } from './components/table-relacion/table-relacion.component';
import { SharedModule } from '../shared/shared.module';

import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { RelationDialogComponent } from './components/relation-dialog/relation-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    ListRelacionesComponent,
    TableRelacionComponent,
    RelationDialogComponent
  ],
  imports: [
    CommonModule,
    RelacionesRoutingModule,
    MatListModule,
    SharedModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class RelacionesModule { }
