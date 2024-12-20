import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appHighlight]',
    standalone: true
})
export class HighlightDirective implements OnInit {

  @Input() in = 'yellow';
  @Input() out = 'red';

  // Je définit l'apparence que je manipule avec cette directive
  @HostBinding('style.backgroundColor') bgc = this.out;
  constructor() {
    // Lorsqu'on instancie l'objet TS
  }
  ngOnInit(): void {
    // Elle s'execute 1 fois lorsque le composant (objet ) et son HTML sont prêt
    this.bgc = this.out;
  }

  // Je définit le comportement
  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.out;
  }
}

