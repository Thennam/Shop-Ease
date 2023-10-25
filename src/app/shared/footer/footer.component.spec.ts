import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { Router } from '@angular/router';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate'])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FooterComponent ],
      providers : [
        { provide: Router, useValue: routerSpy },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate check', () => {
    component.goToInfoClick();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['information']);
  })

  it('should darkThemeChange check', () => {
    component.darkThemeChange();
    expect(component.darkThemeChange).toBeTruthy()
  })

  it('should lightThemeChange check', () => {
    component.lightThemeChange();
    expect(component.lightThemeChange).toBeTruthy()
  })

});
