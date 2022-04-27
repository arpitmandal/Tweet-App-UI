import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
 })
 
export class UserService {
 constructor(private http: HttpClient) { }
 
 public AddUser(User : any) : Observable<any>
 {
     let url = environment.baseurl + "/api/User/register";
     return this.http.post(url,User);
 }

 public ForgotPassword(userName: string, password: string) : Observable<any>{
    let url = environment.baseurl + "/api/User/forgot?email="+userName+"&newPassword="+password
    return this.http.get(url);
 }

 public ResetPassword(username: string, oldpassword: string, newpassword: string) : Observable<any>
 {
     let url = environment.baseurl + "/api/User/reset?email="+username+"&oldPassword="+oldpassword+"&newPassword="+newpassword;
     return this.http.get(url);
 }

 public ShowAllUser() : Observable<any>
 {
     let url = environment.baseurl + "/api/User/all";
     return this.http.get(url);
 }

 public ShowTweetByUser(username: any) : Observable<any>
 {
     let url = environment.baseurl + "/api/Tweet/User?userName="+username;
     return this.http.get(url);
 }

}