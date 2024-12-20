import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "src/app/config/app-routes.config";


@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  cv: Cv | null = null;
  acr = inject(ActivatedRoute);
  cvService = inject(CvService);
  router = inject(Router);
  id = this.acr.snapshot.params['id'];

  constructor() {
    this.cvService.getCvById(this.id).subscribe({
      next: (cv) => (this.cv = cv),
      error: (err) => {
        console.log(err);
        this.router.navigate([APP_ROUTES.cv]);
      }
    });
  }
  deleteCv() {
    if (this.cv) {
      this.cvService.deleteCvById(this.cv.id).subscribe({
        next: () => this.router.navigate([APP_ROUTES.cv]),
        error: (e) => {
          console.log(e);
        }
      });
    }
  }
}
