import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { MainNavService } from '../Services/main-nav.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  public tabNum = 1;
  constructor(private menuService: MainNavService) { }

  ngOnInit(): void {
    this.menuService.getNumTab.subscribe(data => {
      this.tabNum = data;
    });
  }

}
