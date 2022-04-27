import { Component, OnInit } from '@angular/core';
import { MainNavService } from './Services/main-nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private menuService: MainNavService) { }
  
  ngOnInit(): void {
    this.menuService.setTabActive(1);
  }

}
