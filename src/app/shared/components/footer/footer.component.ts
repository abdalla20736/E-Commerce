import { Component } from '@angular/core';
import { FooterLogoComponent } from "./components/icons/footer-logo/footer-logo.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [FooterLogoComponent, RouterLink],
  templateUrl: './footer.component.html',
})
export class FooterComponent {}
