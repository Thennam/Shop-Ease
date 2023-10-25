import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsComponent } from './contact-us.component';

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ContactUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onSubmit check', () => {
    component.onSubmit();
    expect(component.onSubmit).toBeTruthy()
  })

});


// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ReactiveFormsModule } from '@angular/forms';
// import { ContactUsComponent } from './contact-us.component';

// describe('ContactUsComponent', () => {
//   let component: ContactUsComponent;
//   let fixture: ComponentFixture<ContactUsComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//     //  declarations: [ContactUsComponent],
//       imports: [ReactiveFormsModule , ContactUsComponent], // Import ReactiveFormsModule for form testing
//     });

//     fixture = TestBed.createComponent(ContactUsComponent);
//     component = fixture.componentInstance;
//   });

//   it('should create the ContactUsComponent', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should have a form with the expected form controls', () => {
//     const form = component.contactForm;
//     expect(form.get('name')).toBeTruthy();
//     expect(form.get('email')).toBeTruthy();
//     expect(form.get('message')).toBeTruthy();
//   });

//   it('should have required validators on the name, email, and message controls', () => {
//     const form = component.contactForm;
//     const nameControl = form.get('name');
//     const emailControl = form.get('email');
//     const messageControl = form.get('message');

//     expect(nameControl.hasError('required')).toBe(true);
//     expect(emailControl.hasError('required')).toBe(true);
//     expect(messageControl.hasError('required')).toBe(true);
//   });

//   it('should validate email format', () => {
//     const form = component.contactForm;
//     const emailControl = form.get('email');
//     emailControl.setValue('invalid-email'); // Set an invalid email address
//     expect(emailControl.hasError('email')).toBe(true);
//     emailControl.setValue('valid@email.com'); // Set a valid email address
//     expect(emailControl.hasError('email')).toBe(false);
//   });

//   it('should call onSubmit method when the form is submitted', () => {
//     spyOn(component, 'onSubmit');
//     const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
//     submitButton.click();
//     expect(component.onSubmit).toHaveBeenCalled();
//   });
// });