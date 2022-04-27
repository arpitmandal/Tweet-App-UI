import { Component, OnInit } from '@angular/core';
import { TweetService } from '../Services/tweet.service';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Tweets } from './manage-tweet.model';
import { MainNavService } from '../Services/main-nav.service';

@Component({
  selector: 'app-manage-tweets',
  templateUrl: './manage-tweets.component.html',
  styleUrls: ['./manage-tweets.component.sass']
})
export class ManageTweetsComponent implements OnInit {

  AllTweets: any[] = [];
  tweetSubscription: any;
  public loggedInUser: any;
  message: any;
  postTweetForm: FormGroup;

  constructor(public tweetService: TweetService, private formBuilder: FormBuilder, 
    private menuService: MainNavService) { }

  ngOnInit(): void {

    this.postTweetForm = this.formBuilder.group({
      tweetCtrl: new FormControl('', [Validators.required, Validators.minLength(144)])
    });
    this.loggedInUser = JSON.parse(localStorage.getItem('TokenInfo'));
    this.tweetService.setEmailTweet(1);
  }

  get f() { return this.postTweetForm.controls; }

  public AddTweet() {
    if(this.postTweetForm.value['tweetCtrl'] === null || this.postTweetForm.value['tweetCtrl'] === "")
    {
      return;
    }
    let tweets = new Tweets();
    tweets.id = 0;
    tweets.tweet = this.postTweetForm.value['tweetCtrl'];
    tweets.userId = this.loggedInUser?.user?.id;
    tweets.userName = this.loggedInUser?.user?.email;

    this.tweetService.PostTweet(tweets).subscribe(res => {
    });
    this.message = "Tweet posted!";
    this.GetAllTweet();
  }
  setTab(tabNum: any, activeTab: string) {
    this.menuService.setTabActive(tabNum);
  }
  public GetAllTweet()
  {
    this.tweetSubscription = this.tweetService.GetAllTweet().subscribe(
      res => {
        this.AllTweets = res.data;
      },
    );
  }
}
