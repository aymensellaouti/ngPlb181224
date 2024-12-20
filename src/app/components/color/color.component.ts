import { Component } from '@angular/core';

@Component({
    selector: 'app-color',
    templateUrl: './color.component.html',
    styleUrls: ['./color.component.css'],
    standalone: true,
})
export class ColorComponent {
  /**
   * La couleur par défaut de la div
   */
  defaultColor = 'green';
  /**
   * La couleur du background la div
   */
  color = this.defaultColor;

  /**
   * Changer la couleur du background
   * @param newColor : La nouvelle couleur
   */
  changeColor(colorInput: HTMLInputElement) {
    this.color = colorInput.value;
    colorInput.value = '';
  }

  /**
   * Remttre la couleur par défaut de la div
   */
  reset() {
    this.color = this.defaultColor;
  }
}
