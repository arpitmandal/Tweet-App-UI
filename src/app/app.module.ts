import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ManageTweetsComponent } from './manage-tweets/manage-tweets.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { httpInterceptor } from './Interceptor/httpInterceptor';
import { ErrorInterceptor } from './Interceptor/errorInterceptor';
import { AuthorizationCheck } from './Services/authorizationcheck';
import { AuthenticationService } from './Services/authentication.service';
import { RouterModule } from '@angular/router';
import { TweetService } from './Services/tweet.service';
import { CommonModule } from '@angular/common';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { MainComponent } from './main/main.component';
import { ShowAllUsersComponent } from './show-all-users/show-all-users.component';
import { ShowTweetsComponent } from './manage-tweets/show-tweets/show-tweets.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ManageTweetsComponent,
    LoginComponent,
    ManageUserComponent,
    MainComponent,
    ShowAllUsersComponent,
    ShowTweetsComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,  
    RouterModule.forRoot([
      { path: '', component: MainComponent},
      ])
  ],
  providers: [
    TweetService,
    { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthorizationCheck,
  AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
