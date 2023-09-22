import { Pipe, PipeTransform } from '@angular/core';
import { Relaciones, Repuesto } from '../interfaces/repuesto.interfaces';



@Pipe({
  name: 'repuestoImage'
})



export class RepuestoImagePipe implements PipeTransform {

  transform( value: Repuesto | Relaciones ): string {
 
    let  repuesto: Repuesto | undefined;

    if ('repuestos' in value) {
      // Aquí, value es de tipo Relaciones
      repuesto = value.repuestos;
    } else {
      // Aquí, value es de tipo Repuesto
      repuesto = value;
    }
    
      if ( repuesto.Imagen ) return repuesto.Imagen; // https:///google.com/flash.png
  
      return `assets/heroes/${ repuesto.id }.JPG`;
  
    }
  


    setDefaultImage(event: any) {
      event.target.src = 'assets/heroes/SinImagen.JPG';
  }


}