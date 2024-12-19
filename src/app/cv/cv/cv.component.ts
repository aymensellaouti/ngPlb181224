import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/sayHello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  today = new Date();
  selectedCv: Cv | null = null;
  cvs: Cv[] = [
    new Cv(1, 'sellaouti', 'aymen', 'teacher', '123456', 42, ''),
    new Cv(
      2,
      'sahli',
      'faten',
      'Dev',
      '1234567',
      20,
      'rotating_card_profile.png'
    ),
    new Cv(3, 'derbel', 'mohamed', 'Dev', '1234567', 20, '             '),
    new Cv(
      4,
      'Parodi',
      'Alexandre',
      'Dev',
      '1234567',
      20,
      'rotating_card_profile3.png'
    ),
  ];
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
