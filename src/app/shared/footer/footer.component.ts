import { Component, Inject, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  darktheme: boolean = false;
  lighttheme: boolean = true;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  goToInfoClick() {
    this.router.navigate(['information']);
  }

  darkThemeChange() {
    this.renderer.addClass(this.document.body, 'darktheme');
    this.darktheme = true;
    this.lighttheme = false;
    this.renderer.removeClass(this.document.body, 'lighttheme');
  }

  lightThemeChange() {
    this.renderer.addClass(this.document.body, 'lighttheme');
    this.lighttheme = true;
    this.darktheme = false;
    this.renderer.removeClass(this.document.body, 'darktheme');
  }
}
