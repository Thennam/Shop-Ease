import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from 'src/app/shared/menu/menu.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/header/header.component';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
  ],
  standalone: true,
})
export class LayoutComponent {}
