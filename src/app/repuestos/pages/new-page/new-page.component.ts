import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent {

  public repuestoForm = new FormGroup({

    id:        new FormControl<string>(''),
    nombreRepuesto: new FormControl<string>('', { nonNullable: true }),
    marca: new FormControl<string>(''),
    modelo : new FormControl(''),
    peso: new FormControl(''),
    alt_img:    new FormControl(''),



  })



}
