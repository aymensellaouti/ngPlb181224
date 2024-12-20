import {  Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CvService {
  // cv1 cv2 cv3 cv4 cv1 cv2 cv5 cv3 cv4 cv5 cv1
  // subject = observable (subscribe) + observateur (next, complete, error)
  private selectCvSubject$ = new Subject<Cv>();
  selectCv$ = this.selectCvSubject$.asObservable();
  private cvs: Cv[] = [
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

  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Cv[] {
    return this.cvs;
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.cvs.find(cv => cv.id === +id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
     const index = this.cvs.indexOf(cv);
     if (index > -1) {
       this.cvs.splice(index, 1);
       return true;
     }
     return false;
  }

  selectCv(cv: Cv): void {
    this.selectCvSubject$.next(cv);
  }
}
