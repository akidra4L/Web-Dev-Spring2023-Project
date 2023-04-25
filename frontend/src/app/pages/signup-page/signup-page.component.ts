import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {

  signUpForm = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor(
    private signUpService: AuthService,
    public dialogRef: MatDialogRef<SignupPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {};

  onCancelClick(): void {
    this.dialogRef.close();
  };

  onSubmit(): void {
    if (this.signUpForm.valid) {
      const formData = this.signUpForm.value;

      const username = formData.username;
      const first_name = formData.first_name;
      const last_name = formData.last_name;
      const email = formData.email;
      const password = formData.password;

      if (username && first_name && last_name && email && password) {
        this.signUpService.signup(username, first_name, last_name, email, password).subscribe((data) => {
          console.log(data);
        });
      }

      this.dialogRef.close();
    }
  }
}
