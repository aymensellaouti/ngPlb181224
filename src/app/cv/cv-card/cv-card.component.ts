import { Component, inject, Input } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';
import { DefaultImagePipe } from '../pipes/default-image.pipe';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-cv-card',
    templateUrl: './cv-card.component.html',
    styleUrls: ['./cv-card.component.css'],
    standalone: true,
    imports: [
    RouterLink,
    DefaultImagePipe
],
})
export class CvCardComponent {
  @Input()
  cv: Cv | null = null;
  embaucheService = inject(EmbaucheService);
  toastr = inject(ToastrService);
  embaucher() {
    if (this.cv) {
      if (this.embaucheService.embaucher(this.cv)) {
        this.toastr.success(`${this.cv.firstname} ${this.cv.name} a été préembauché avec succès`)
      } else {
        this.toastr.warning(
          `${this.cv.firstname} ${this.cv.name} est déjà préembauché`
        );
      }

    }
  }
}
