import { ToastrService } from 'ngx-toastr';
import { Component, inject, input, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../../core/services/auth.service';
import { ValidationService } from '../../../../../core/services/validation.service';
import { IconComponent } from '../../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-create-new-password',
  imports: [ReactiveFormsModule, IconComponent],
  templateUrl: './create-new-password.component.html',
  styleUrl: './create-new-password.component.css',
})
export class CreateNewPasswordComponent {
  private readonly fb = inject(FormBuilder);
  private readonly validationService: ValidationService = inject(ValidationService);
  private readonly authService: AuthService = inject(AuthService);
  private readonly toastrService: ToastrService = inject(ToastrService);

  email = input<string>();

  isSubmiting = signal(false);
  isSubmittedOnce = signal(false);
  isPasswordShown = signal(false);

  resetPasswordForm!: FormGroup;

  ngOnInit(): void {
    this.InitForms();
  }

  InitForms(): void {
    this.resetPasswordForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        newPassword: ['', [Validators.required, this.validationService.passwordValidator]],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [this.validationService.passwordMatchValidator],
      },
    );
  }

  showPassword(): void {
    this.isPasswordShown.update((prev) => !prev);
  }

  resetPassword() {
    if (this.resetPasswordForm.valid) {
      const email = this.resetPasswordForm.get('email')?.value || '';
      const newPassword = this.resetPasswordForm.get('newPassword')?.value || '';

      this.authService.resetPassword(email, newPassword).subscribe({
        next: (response) => {
          this.toastrService.success('Password reset successfully!');
        },
        error: (error) => {
          console.error('Error resetting password:', error);
        },
      });
    }
  }
}
