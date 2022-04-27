import { Component, OnInit } from '@angular/core';
import { MainNavService } from '../Services/main-nav.service';
import { TweetService } from '../Services/tweet.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.sass']
})
export class ShowAllUsersComponent implements OnInit {
  public allUsers: any;
  public getAllTweets: any;
  public showTweetByUserClicked: any;
  public error: any
  public userClicked = false;
  constructor(private userService: UserService,
    public tweetService : TweetService,
    public menuService : MainNavService) { }

  ngOnInit(): void {
    this.userService.ShowAllUser().subscribe(
      res => {
        this.allUsers = res;
      },
    );
  }

  public showTweetByUser(email: any)
  {
    this.tweetService.setEmailTweet(email);
    this.userClicked = true;
  }

  public back()
  {
    this.userClicked = false;
  }

}
