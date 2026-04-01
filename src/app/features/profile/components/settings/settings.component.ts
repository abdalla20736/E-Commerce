import { Component } from '@angular/core';
import { UpdateProfileComponent } from "./components/update-profile/update-profile.component";
import { UpdatePasswordComponent } from "./components/update-password/update-password.component";

@Component({
  selector: 'app-settings',
  imports: [UpdateProfileComponent, UpdatePasswordComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {}
