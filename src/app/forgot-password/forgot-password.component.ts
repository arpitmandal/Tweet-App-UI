import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';
import { MainNavService } from '../Services/main-nav.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.sass']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;
  submitClick = false;
  submitted = false;
  returnUrl: string;
  error = '';
  public loggedinUser: any;
  public token: any;
  public message = "";
  constructor(
    private formBuilder: FormBuilder,
    private menuService: MainNavService,
    public userService: UserService) { }

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      'userName': ['', Validators.required],
      'newpassword': ['', Validators.required]
    });

  }

  get formData() { return this.forgotForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.forgotForm.invalid) {
      return;
    }
    this.message = "Password Successfully Changed"
    this.userService.ForgotPassword(this.forgotForm.controls['userName'].value, this.forgotForm.controls['newpassword'].value)
      .subscribe(
        data => {
          this.menuService.setTabActive(1);
        },
        error => {
          this.error = error;
          this.submitClick = false;
        });

  }

}
