import { Pipe, PipeTransform } from '@angular/core';
import { Repuesto } from '../interfaces/repuesto.interfaces';



@Pipe({
  name: 'repuestoImage'
})



export class RepuestoImagePipe implements PipeTransform {

  transform( repuesto: Repuesto ): string {
 

      if ( !repuesto.id && !repuesto.Imagen ) {
        return 'assets/no-image.png';
      }
  
      if ( repuesto.Imagen ) return repuesto.Imagen; // https:///google.com/flash.png
  
      return `assets/heroes/${ repuesto.id }.JPG`;
  
    }
  


    setDefaultImage(event: any) {
      event.target.src = 'assets/heroes/SinImagen.JPG';
  }


}