import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageTweetsComponent } from './manage-tweets/manage-tweets.component';
import { AuthorizationCheck } from './Services/authorizationcheck';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpInterceptor } from './Interceptor/httpInterceptor';
import { ErrorInterceptor } from './Interceptor/errorInterceptor';
import { AuthenticationService } from './Services/authentication.service';
import { MainComponent } from './main/main.component';

const routes: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
