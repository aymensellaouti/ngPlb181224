import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-second',
    template: `
    <p>Je suis le second component : {{ message }}</p>
  `,
    styles: [``],
    standalone: true
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

  actvatedRoute = inject(ActivatedRoute);
}
