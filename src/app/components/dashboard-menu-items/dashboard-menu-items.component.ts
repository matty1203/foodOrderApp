import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-menu-items',
  templateUrl: './dashboard-menu-items.component.html',
  styleUrls: ['./dashboard-menu-items.component.scss']
})
export class DashboardMenuItemsComponent implements OnInit {
menulist:any=[{id:1,img:"../../../assets/images/food-dummy-img.png",name:"Scrambled Egg",price:"200"},
{id:1,img:"../../../assets/images/food-dummy-img.png",name:"Kebab",price:"100"},
{id:1,img:"https://images.unsplash.com/photo-1575573550252-4bea31b9d485?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",name:"Whopper",price:"220"}]
  constructor() { }

  ngOnInit(): void {
  }

}
