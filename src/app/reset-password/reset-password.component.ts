import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';
import { MainNavService } from '../Services/main-nav.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.sass']
})
export class ResetPasswordComponent implements OnInit {
  resetForm!: FormGroup;
  submitClick = false;
  submitted = false;
  returnUrl: string;
  error = '';
  public loggedinUser: any;
  public token: any;
  public message = "";
  constructor(
    private formBuilder: FormBuilder,
    public userService : UserService) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      'userName': ['', Validators.required],
      'oldpassword': ['', Validators.required],
      'newpassword': ['', Validators.required]
    });
  }

  get formData() { return this.resetForm.controls; }

  onSubmit() 
  {
    this.submitted = true;
    if (this.resetForm.invalid) {
      return;
    }

    this.userService.ResetPassword(this.resetForm.controls['userName'].value,this.resetForm.controls['oldpassword'].value, this.resetForm.controls['newpassword'].value)
    .subscribe(
      data => {
      },
      error => {
        this.error = error;
        this.submitClick = false;
      });
      this.message = "Password reset successful!";

  }

}
