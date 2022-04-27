import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  login(userName: string, password: string) {
    let url = environment.baseurl + "/api/User/login?userName="+userName+"&password="+password;
    return this.http.get(url);
  }

  public setLoggedInUser= new ReplaySubject<any>();
  public getLoggedInUser = this.setLoggedInUser.asObservable();
 
  setLogInUser(para : any)
  {
      this.setLoggedInUser.next(para);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('TokenInfo');
  }
}