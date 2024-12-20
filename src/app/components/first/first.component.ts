import { Component } from '@angular/core';
import { SecondComponent } from '../second/second.component';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css'],
    standalone: true,
    imports: [SecondComponent]
})
export class FirstComponent {
  name = 'PLB';

  /**
   * Définit si mon paragraphe est caché ou pas
   */
  isHidden = false;

  message = '';
  constructor() {
    // setTimeout(() => this.name = 'PLB181224', 2000);
   // setInterval(() => this.isHidden = !this.isHidden, 3000)
  }

  showHide() {
    this.isHidden = !this.isHidden;
  }
  /**
   * Change la valeur du message
   * @param newMessage : La nouvelle valeur du message
   */
  changeMessage(newMessage: string) {
    this.message = newMessage;
  }

}
