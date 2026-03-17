import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../../core/services/auth.service';
import { ValidationService } from '../../../../../core/services/validation.service';

@Component({
  selector: 'app-create-new-password',
  imports: [],
  templateUrl: './create-new-password.component.html',
  styleUrl: './create-new-password.component.css',
})
export class CreateNewPasswordComponent {
  private readonly fb = inject(FormBuilder);
  private readonly validationService: ValidationService = inject(ValidationService);
  private readonly authService: AuthService = inject(AuthService);

  resetPasswordForm!: FormGroup;

  ngOnInit(): void {
    this.InitForms();
  }

  InitForms(): void {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: ['', [Validators.required, this.validationService.passwordValidator]],
    });
  }

  resetPassword() {
    if (this.resetPasswordForm.valid) {
      const email = this.resetPasswordForm.get('email')?.value || '';
      const newPassword = this.resetPasswordForm.get('newPassword')?.value || '';

      this.authService.resetPassword(email, newPassword).subscribe({
        next: (response) => {
          console.log('Password reset successful:', response);
        },
        error: (error) => {
          console.error('Error resetting password:', error);
        },
      });
    }
  }
}
