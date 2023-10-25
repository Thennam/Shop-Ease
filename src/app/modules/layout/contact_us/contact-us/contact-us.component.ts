// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-contact-us',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './contact-us.component.html',
//   styleUrls: ['./contact-us.component.scss']
// })
// export class ContactUsComponent {

// }

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm : FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //Formgroup initiazation
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Handle form submission here, e.g., send data to a server
    //  console.log(this.contactForm.value);
    }
  }
}
