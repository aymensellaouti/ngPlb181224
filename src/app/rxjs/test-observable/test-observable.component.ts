import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-test-observable',
    templateUrl: './test-observable.component.html',
    styleUrls: ['./test-observable.component.css'],
    standalone: true,
    imports: [AsyncPipe]
})
export class TestObservableComponent {
  myObservable$: Observable<number>;
  toastr = inject(ToastrService)
  constructor() {
    // 5 4 3 2 1
    this.myObservable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    // setTimeout(() => {
    this.myObservable$.subscribe({
      next: (val) => {
        console.log(val);
      },
    })
    // });}, 3000);
    this.myObservable$
    .pipe(
     // 5 4 3 2 1
     map(touteValeurQueJeRecois => touteValeurQueJeRecois * 3 ),
     // 15 12 9 6 3
     filter( value => value % 2 === 0)
     // 12 6
    )
    .subscribe({
      next: (newValue) => {
        this.toastr.info('' + newValue);
      },
      complete: () => {
        this.toastr.warning('FIN DU COMPTE A REBOURS !!!')
      }
    });
  }
}
