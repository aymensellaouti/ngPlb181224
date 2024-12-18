import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <p>Je suis le second component : {{ message }}</p>
  `,
  styles: [``]
})
export class SecondComponent {

  @Input({
    alias: 'myVar',
    required: true,
    transform: (value: any) => {
      return 'je suis la valeur transformé'
    }
  })
  message = 'Second component';
}
