import { Component, inject, signal } from '@angular/core';
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
  isSubmitting = signal(false);
  submittedOnce = signal(false);

  ngOnInit(): void {
        this.resetPasswordForm = this.fb.group({
      passwordl: ['', [Validators.required, this.validationService.passwordValidator]],
      newPassword: ['', [Validators.required],
    this.validationService.passwordMatchValidator],
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
