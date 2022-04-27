import { Component, OnInit } from '@angular/core';
import { MainNavService } from 'src/app/Services/main-nav.service';
import { TweetService } from 'src/app/Services/tweet.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-show-tweets',
  templateUrl: './show-tweets.component.html',
  styleUrls: ['./show-tweets.component.sass']
})
export class ShowTweetsComponent implements OnInit {

  public AllTweets: any;
  public emailForTweet: any;
  public error: any;
  public showDelete: any;
  public message: any;
  constructor(public tweetService : TweetService,
    public userService: UserService,
    private menuService: MainNavService,) { }

  ngOnInit(): void {
    this.tweetService.getEmailForTweet.subscribe(data => {
      this.emailForTweet = data;
    });
    this.showTweetScreen();
  }

  deleteTweet(tweetId: any)
  {
    this.tweetService.DeleteTweet(tweetId).subscribe(
      res => {
        if(res === true)
        {
          this.message = "Deleted successful"
        }
        else{
          this.message = "Deleted unsuccessful"
        }
      });
    this.setTab(3,'tweet');
    this.showTweetScreen();
  }

  setTab(tabNum: any, activeTab: string) {
    this.menuService.setTabActive(tabNum);
  }

  public showTweetScreen()
  {
    if(this.emailForTweet === 1)
    {
      this.showDelete = true;
      this.tweetService.GetAllTweet().subscribe(
        res => {
          this.AllTweets = res;
        },
      );
      this.tweetService.setAllTweets(this.AllTweets);
    }
    else{
      this.showDelete= false;
      this.userService.ShowTweetByUser(this.emailForTweet).subscribe(
        res => {
          if(res?.length > 0)
          {
            this.AllTweets = res;
            this.error = "";
          }
          else
          {
            this.error = "No tweets found";
          }
        },
      );
    }
    
  }

}
