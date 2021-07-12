import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  //transform(value:string, ...args: any): string {
    transform(value:string): string {
      if (value) {
         return "../assets/img/presentation/default-img.jpg";
      } else {
          return value;
        }
  }

}
