import { Component, inject } from '@angular/core';
import { Router, RouterLinkActive, RouterLink } from '@angular/router';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { APP_ROUTES } from 'src/app/config/app-routes.config';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    standalone: true,
    imports: [
        RouterLinkActive,
        RouterLink,
        NgIf,
        TranslatePipe,
    ],
})
export class NavbarComponent {
  authService = inject(AuthService);
  router = inject(Router);
  constructor(public translateService: TranslateService) {
    translateService.setDefaultLang('fr');
    translateService.addLangs(['en', 'fr']);
    const browserLang = translateService.getBrowserLang() ?? 'fr';
    translateService.use(browserLang.match(/en|fr/) ? browserLang : 'fr');
  }
  translate(langage: string) {
    this.translateService.use(langage);
  }

  logout() {
    this.authService.logout();
    this.router.navigate([APP_ROUTES.login]);
  }
}
