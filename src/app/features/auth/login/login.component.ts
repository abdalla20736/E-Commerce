import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FeaturesSectionComponent } from '../../../shared/components/features-section/features-section.component';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/services/auth.service';
import { ILoginFormData } from '../../../core/models/auth/login-form-data..model';
import { finalize } from 'rxjs';
import { SubmitBtnComponent } from '../../../shared/components/submit-btn/submit-btn.component';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    FeaturesSectionComponent,
    IconComponent,
    ReactiveFormsModule,
    SubmitBtnComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly authService: AuthService = inject(AuthService);
  private readonly toastrService: ToastrService = inject(ToastrService);
  private readonly router: Router = inject(Router);

  isPasswordShown = signal(false);
  isSubmittingForm = signal(false);
  isSubmittedOnce = signal(false);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    rememberMe: [false, [Validators.required]],
  });

  showPassword(): void {
    this.isPasswordShown.update((prev) => !prev);
  }

  onSubmit(): void {
    this.isSubmittedOnce.set(true);
    if (this.loginForm.valid) {
      this.isSubmittingForm.set(true);

      const loginFormData: ILoginFormData = {
        email: this.loginForm.get('email')?.value || '',
        password: this.loginForm.get('password')?.value || '',
        rememberMe: this.loginForm.get('rememberMe')?.value || false,
      };

      this.authService
        .login(loginFormData)
        .pipe(finalize(() => this.isSubmittingForm.set(false)))
        .subscribe({
          next: () => {
            this.toastrService.success('Login successful');
            setTimeout(() => {
              this.router.navigate(['/home']);
            }, 2000);
          },
          error: () => {
            this.toastrService.error('Incorrect email or password');
          },
        });
    }
  }
}
