import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  selectedCv: Cv | null = null;
  cvs: Cv[] = [
    new Cv(
      1,
      'sellaouti',
      'aymen',
      'teacher',
      '123456',
      42,
      'rotating_card_profile3.png'
    ),
    new Cv(
      2,
      'sahli',
      'faten',
      'Dev',
      '1234567',
      20,
      'rotating_card_profile.png'
    ),
    new Cv(
      3,
      'derbel',
      'mohamed',
      'Dev',
      '1234567',
      20,
      'rotating_card_profile2.png'
    ),
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
  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
