import { Component, inject } from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/config/app-routes.config';
import { ToastrService } from 'ngx-toastr';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: true,
    imports: [FormsModule, NgIf]
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  toastr = inject(ToastrService);
  login(credentials: CredentialsDto) {
    this.authService.login(credentials).subscribe({
      next: (response) => {
        // rediriger vers la liste des cvs
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (erreur) => {
        this.toastr.error('Veuillez vérifier vos crédentials')
      }
    })
  }

}
