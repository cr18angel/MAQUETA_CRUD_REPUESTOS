import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepuestosRoutingModule } from './repuestos-routing.module';
import { CardRepuestosComponent } from './components/card-repuestos/card-repuestos.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { RepuestoPageComponent } from './pages/repuesto-page/repuesto-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { RepuestoImagePipe } from './pipes/repuesto-image.pipe';

@NgModule({
  declarations: [
    CardRepuestosComponent,
    ConfirmDialogComponent,
    ListPageComponent,
    RepuestoPageComponent,
    NewPageComponent,
    SearchPageComponent,
    RepuestoImagePipe,
    
  ],
  imports: [
    CommonModule,
    RepuestosRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    // importar los modulos 


  ]
})
export class RepuestosModule { }
