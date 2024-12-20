import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: 'input[appRainbow][type="text"]',
    standalone: true,
})
export class RainbowDirective {
  // Je définit l'apparence que je manipule avec cette directive
  @HostBinding('style.border-color') borderColor = 'black';
  @HostBinding('style.color') color = 'black';
  constructor() {
    console.log('Rainbow');
  }
// Je définit le comportement
  @HostListener('keyup') onKeyUp() {
    this.color = this.borderColor = this.getRndomcolor();
  }
  getRndomcolor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
