import { Pipe, PipeTransform } from '@angular/core';
import {URL_SERVICIOS} from "../config/config";

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuario'): any {

    if ( img.indexOf('https') >= 0 ) {
      return img;
    }

    let url = URL_SERVICIOS + '/imagenes/'

    switch ( tipo ) {

      case 'usuario':
        url += 'usuario/' + img;
        break;
      case 'hospitales':
        url += 'hospitales/' + img;
        break;
      case 'medicos':
        url += 'medicos/' + img;
        break;
      default:
        url += 'usuarios/no-img'
        break;
    }

    if( !img ) {
      url = URL_SERVICIOS + 'usuarios/no-img'
    }

    return url;
  }

}
