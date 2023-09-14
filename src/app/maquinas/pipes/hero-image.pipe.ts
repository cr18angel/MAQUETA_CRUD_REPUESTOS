import { Pipe, PipeTransform } from '@angular/core';
import { Maquina } from '../interfaces/maquina.interface';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  transform( maquina: Maquina ): string {

    if ( !maquina.id && !maquina.alt_img ) {
      return 'assets/no-image.png';
    }

    if ( maquina.alt_img ) return maquina.alt_img; // https:///google.com/flash.png

    return `assets/heroes/${ maquina.id }.jpg`;

  }

}
