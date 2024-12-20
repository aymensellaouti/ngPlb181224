import { Component } from '@angular/core';
import { RainbowDirective } from '../rainbow.directive';
import { HighlightDirective } from '../highlight.directive';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-ng-class',
    templateUrl: './ng-class.component.html',
    styleUrls: ['./ng-class.component.css'],
    standalone: true,
    imports: [
        NgClass,
        HighlightDirective,
        RainbowDirective,
    ],
})
export class NgClassComponent {
  /**
   * Est ce que la lampe est allumé ou non
   * Si true la lampe est allumée
   * Si false la lampe est eteinte
   */
  isOn = false;

  /**
   * Permet d'allumer et d'eteindre la lampe
   */
  interrupteur() {
    this.isOn = !this.isOn;
  }
}
