import {  inject, Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APP_API } from 'src/app/config/app-api.config';
import { AuthService } from 'src/app/auth/services/auth.service';


@Injectable({
  providedIn: 'root',
})
export class CvService {
  // cv1 cv2 cv3 cv4 cv1 cv2 cv5 cv3 cv4 cv5 cv1
  // subject = observable (subscribe) + observateur (next, complete, error)
  http = inject(HttpClient);
  authService = inject(AuthService);
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
  getFakeCvs(): Cv[] {
    return this.cvs;
  }

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }

  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }

  deleteCvById(id: number): Observable<{ count: number }> {
    // Todo !!!!!!! A voir y a trop de code qui se répéte
    const token = this.authService.getToken();
    //const params = new HttpParams().set('access_token', token);
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.delete<{ count: number }>(APP_API.cv + id, {
      headers
    });
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id === +id) ?? null;
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
