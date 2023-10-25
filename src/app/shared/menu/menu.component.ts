import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  homeActive: boolean = false;
  productActive: boolean = true;
  aboutActive: boolean = false;
  contactActive: boolean = false;
  showMenuView: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  // menu active events
  menuEvent(ev: any) {
    if (ev == 'home') {
      this.router.navigate(['home']);
      this.homeActive = true;
      this.productActive = false;
      this.aboutActive = false;
      this.contactActive = false;
    } else if (ev == 'product') {
      this.router.navigate(['']);
      this.productActive = true;
      this.homeActive = false;
      this.aboutActive = false;
      this.contactActive = false;
    } else if (ev == 'about') {
      this.router.navigate(['about']);
      this.aboutActive = true;
      this.homeActive = false;
      this.productActive = false;
      this.contactActive = false;
    } else if (ev == 'contact') {
      this.router.navigate(['contact']);
      this.contactActive = true;
      this.homeActive = false;
      this.productActive = false;
      this.aboutActive = false;
    }
  }
  
  // menu show hide  event
  showMenu() {
    this.showMenuView = !this.showMenuView;
  }
}
