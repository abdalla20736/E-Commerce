import { Component, input } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-breadcrumb-header',
  imports: [RouterLinkWithHref],
  templateUrl: './breadcrumb-header.component.html',
  styleUrl: './breadcrumb-header.component.css',
})
export class BreadcrumbHeaderComponent {
  backgroundClass = input('bg-linear-to-r from-[#1BAA4B] via-[#23B854] to-[#35C867]');
  title = input('Contact Us');
  subtitle = input("We'd love to hear from you. Get in touch with our team.");
  parentLabel = input('Home');
  parentRoute = input('/home');
}
