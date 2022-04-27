import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TweetService {
    constructor(private http: HttpClient) { 
    }
    
    public GetAllTweet(): Observable<any> {
        let url = environment.baseurl + "/api/Tweet/all";
        return this.http.get(url);
    }

    public GetTweetByUser(userName: string): Observable<any> {
        let url = environment.baseurl + "/api/Tweet/User?userName=" + userName;
        return this.http.get(url);
    }

    public PostTweet(Tweets: any): Observable<any> {
        let url = environment.baseurl + "/api/Tweet/add-tweet";
        return this.http.post(url, Tweets);
    }

    public DeleteTweet(tweetId: any): Observable<any> {
        let url = environment.baseurl + "/api/Tweet/delete-tweet?tweetId="+tweetId;
        return this.http.delete(url);
    }

    public setEmailForTweet = new BehaviorSubject(1);
    public getEmailForTweet = this.setEmailForTweet.asObservable();
    setEmailTweet(para: any) {
        this.setEmailForTweet.next(para);
    }

    public setAllTweet = new BehaviorSubject(1);
    public getAllTweet = this.setAllTweet.asObservable();
    setAllTweets(para: any) {
        this.setAllTweet.next(para);
    }
}