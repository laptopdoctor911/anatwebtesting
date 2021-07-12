import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeurl'
})
export class SafeurlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  // public transform(url: any, args?: any): any {
    public transform(url: any): any {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
