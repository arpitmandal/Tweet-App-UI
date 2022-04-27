import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../Services/authentication.service';
import { MainNavService } from '../Services/main-nav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitClick = false;
  submitted = false;
  returnUrl: string;
  error = '';
  public loggedinUser: any;
  public token: any;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private menuService: MainNavService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'userName': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get formData() { return this.loginForm.controls; }

  setTab(tabNum: any, activeTab: string) {
    this.menuService.setTabActive(tabNum);
  }

  onLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.submitClick = true;
    this.authenticationService.login(this.loginForm.controls['userName'].value,this.loginForm.controls['password'].value)
      .pipe(first())
      .subscribe(
        (data: any) => {
          if(data !== null && data?.token !== null)
          {
            localStorage.setItem('TokenInfo', JSON.stringify(data));
            this.loggedinUser = true;
            this.authenticationService.setLogInUser(this.loggedinUser);
            this.menuService.setTabActive(3);
          }
          else{
            this.loggedinUser = false;
            this.menuService.setTabActive(1);
            this.error = 'Invalid credentials';
          }
          this.authenticationService.setLogInUser(this.loggedinUser);
        },
        error => {
          this.error = error;
          this.submitClick = false;
        });
  }

}
