import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { Router } from '@angular/router';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate'])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MenuComponent ],
      providers : [
        { provide: Router, useValue: routerSpy },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should showMenu check', () => {
    component.showMenu();
    expect(component.showMenu).toBeTruthy()
  })

  it('should menuEvent check', () => {
    component.menuEvent({});
    expect(component.menuEvent).toBeTruthy()
  })



});
