import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvItemComponent } from '../cv-item/cv-item.component';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-cv-list',
    templateUrl: './cv-list.component.html',
    styleUrls: ['./cv-list.component.css'],
    standalone: true,
    imports: [NgClass, CvItemComponent]
})
export class CvListComponent {
  @Input()
  cvs: Cv[] = [];

  // @Output()
  // forwardCv = new EventEmitter<Cv>();

  // onForwardCv(cv: Cv) {
  //   this.forwardCv.emit(cv);
  // }
}
