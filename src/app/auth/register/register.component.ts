import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  @ViewChild('registrationForm') registrationForm: NgForm;
  formSubmitted = false;

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.formSubmitted = true;

    if (!this.registrationForm.valid) {
      return;
    }

    this.authService.registerUser(this.registrationForm.value.email, this.registrationForm.value.password)
      .subscribe(
        () => {
          this.router.navigate(['confirm']);
        }
      );
  }

}