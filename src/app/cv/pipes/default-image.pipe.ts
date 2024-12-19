import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONSTANTS } from 'src/app/config/app-constantes.config';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    return path.trim() ? path : APP_CONSTANTS.defaultImage;
  }

}
