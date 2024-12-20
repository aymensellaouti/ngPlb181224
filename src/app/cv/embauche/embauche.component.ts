import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheService } from '../services/embauche.service';
import { CvItemComponent } from '../cv-item/cv-item.component';



@Component({
    selector: 'app-embauche',
    templateUrl: './embauche.component.html',
    styleUrls: ['./embauche.component.css'],
    standalone: true,
    imports: [
    CvItemComponent
],
})
export class EmbaucheComponent {
  embaucheService = inject(EmbaucheService);
  public embauchees: Cv[] = this.embaucheService.getEmbauchees();
}
