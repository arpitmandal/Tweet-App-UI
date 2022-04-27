import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
   providedIn: 'root'
 })
 
export class MainNavService {
 constructor(private http: HttpClient) { }

 public setTabNum = new BehaviorSubject(1);
 public getNumTab = this.setTabNum.asObservable();
 setTabActive(para : any)
 {
     this.setTabNum.next(para);
 }

}
