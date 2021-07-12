import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  /**
   * Pipe Constructor
   *
   * @param sanitizer: DomSanitezer
   */
  // tslint:disable-next-line
  constructor(protected sanitizer: DomSanitizer) {
  }

  /**
   * Transform
   *
   * @param value: string
   * @param type: string
   */
  // transform(value: any, args?: any): any {
  transform(value: string, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
      case 'html':
        return this.sanitizer.bypassSecurityTrustHtml(value);
      case 'style':
        return this.sanitizer.bypassSecurityTrustStyle(value);
      case 'script':
        return this.sanitizer.bypassSecurityTrustScript(value);
      case 'url':
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
  }

}
