import { Pipe, PipeTransform } from '@angular/core';
import { Repuesto } from '../interfaces/repuesto.interfaces';



@Pipe({
  name: 'repuestoImage',
  pure: false
})



export class RepuestoImagePipe implements PipeTransform {




  transform( repuesto: Repuesto ): string {
 

      if ( !repuesto.NroParte && !repuesto.Imagen ) {
        return 'assets/SinImagen.JPG';
      }
  
      if ( repuesto.Imagen ) return repuesto.Imagen; // https:///google.com/flash.png
  
      return `assets/heroes/${ repuesto.NroParte }.JPG`;
  
    }
  


    setDefaultImage(event: any) {
      event.target.src = 'assets/heroes/SinImagen.JPG';
  }


}