import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/sayHello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  today = new Date();
  selectedCv: Cv | null = null;
  cvService = inject(CvService);
  cvs: Cv[] = this.cvService.getCvs();
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
  }
  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
