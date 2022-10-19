import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'food-list-item',
  templateUrl: './menu-list-items.component.html',
  styleUrls: ['./menu-list-items.component.scss']
})
export class MenuListItemsComponent implements OnInit {
  @Input() food_info = ''; 
  food_item:any
  constructor() { }

  ngOnInit(): void {
    
    this.food_item=this.food_info;
    console.log(this.food_info)
  }



}
