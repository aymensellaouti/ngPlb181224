import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/sayHello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { catchError, Observable, of } from 'rxjs';
import { BtcToUsdPipe } from '../../pipes/btc-to-usd.pipe';
import { EmbaucheComponent } from '../embauche/embauche.component';
import { CvCardComponent } from '../cv-card/cv-card.component';
import { CvListComponent } from '../cv-list/cv-list.component';
import { NgIf, AsyncPipe, UpperCasePipe, CurrencyPipe, DatePipe } from '@angular/common';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.css'],
    standalone: true,
    imports: [
        NgIf,
        CvListComponent,
        CvCardComponent,
        EmbaucheComponent,
        AsyncPipe,
        UpperCasePipe,
        CurrencyPipe,
        DatePipe,
        BtcToUsdPipe,
    ],
})
export class CvComponent {
  today = new Date();
  selectedCv: Cv | null = null;
  cvService = inject(CvService);
  cvs: Cv[] = [];
  // déclarative, je comprend ce que fait ma variable à sa déclaration
  cvs$: Observable<Cv[]> = this.cvService.getCvs().pipe(
    catchError( e => {
        this.toastr.error(`Les données sont fictives, merci de contacter l'admin`);
        return of(this.cvService.getFakeCvs());
    })
  );
  logger = inject(LoggerService);
  sayHelloService = inject(SayHelloService);
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  //sayHelloService = new SayHelloService();
  constructor() {
    //private sayHelloService: SayHelloService,
    this.sayHelloService.hello();
    this.toastr.info('Bienvenu dans notre CvTech');
    this.logger.log('cc je suis le cvComponent');

    this.cvService.getCvs().subscribe({
      next: (cvs) => {
        this.cvs = cvs;
      },
      error: (err) => {
        this.toastr.error(`Les données sont fictives, merci de contacter l'admin`);
        this.cvs = this.cvService.getFakeCvs();
      }
    })
    /**
     * Je suis intéressé par le flux des cvs sélectionnés
     */
    this.cvService.selectCv$.subscribe({
      next: cv => this.selectedCv = cv
    });
  }
  // getSelectedCv(cv: Cv) {
  //   this.selectedCv = cv;
  // }
}
