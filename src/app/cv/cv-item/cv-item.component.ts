import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvService } from '../services/cv.service';
import { DefaultImagePipe } from '../pipes/default-image.pipe';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-cv-item',
    templateUrl: './cv-item.component.html',
    styleUrls: ['./cv-item.component.css'],
    standalone: true,
    imports: [NgStyle, DefaultImagePipe]
})
export class CvItemComponent {
  @Input({required: true})
  cv!: Cv;
  @Input() size = 50;
  cvService = inject(CvService);
  // @Output()
  // selectCv = new EventEmitter<Cv>();
  onSelectCv()  {
    this.cvService.selectCv(this.cv);
    // this.selectCv.emit(this.cv);
  }
}
