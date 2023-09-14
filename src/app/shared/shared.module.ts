import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';




@NgModule({
  declarations: [
    Error404PageComponent,
    SpinnerComponent,
  ],

  imports:[
    MatProgressBarModule


  ],




  exports: [
    Error404PageComponent,
    SpinnerComponent,
    MatProgressBarModule,
    SpinnerComponent

  ]
})
export class SharedModule { }
