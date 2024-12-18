import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css'],
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
