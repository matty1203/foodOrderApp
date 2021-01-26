import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from "@angular/cdk/layout";

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {

  constructor() {

  }
  mobileQuery: MediaQueryList;
  side_pages: Array<any> = [
    { id: 1, name: "Home", url: "/sidemenu/home" },
    { id: 7, name: "Terms and Conditions", url: "/sidemenu/policy-page" },
    { id: 8, name: "Account Settings", url: "/sidemenu/account-settings" },
    { id: 10, name: "Logout",},
  ];
  sidenavWidth = 15;


  ngOnInit(): void {
  }

}
