import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../../../../core/services/auth.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ValidationService } from '../../../../../core/services/validation.service';
import { SendResetCodeComponent } from '../send-reset-code/send-reset-code.component';
import { VerificationCodeComponent } from '../verification-code/verification-code.component';
import { CreateNewPasswordComponent } from '../create-new-password/create-new-password.component';

@Component({
  selector: 'app-reset-form',
  imports: [SendResetCodeComponent, VerificationCodeComponent, CreateNewPasswordComponent],
  templateUrl: './reset-form.component.html',
  styleUrl: './reset-form.component.css',
})
export class ResetFormComponent {
  stepNumber = signal(1);
  email = signal('');

  nextStepInit(email: string): void {
    this.stepNumber.update((n) => n + 1);
    this.email.set(email);
  }

  backToSendCode(): void {
    this.stepNumber.set(1);
    console.log('email ' + this.email);
  }
}
