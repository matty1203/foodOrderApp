import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  theActiveBannerIndex: number = 0
  banners: any = [{ id: 1, name: "Two Slices of Pizza with Boiled Egg", url: "../../../assets/images/food-dummy-img.png" },
  { id: 2, active: true, name: "Banner 2 ", url: "https://images.unsplash.com/photo-1575573550252-4bea31b9d485?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" },
  { id: 3, name: "Banner 3", url: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1015&q=80" },
  { id: 4, name: "Banner 4", url: "https://images.unsplash.com/photo-1535955565956-4a631184a821?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80" },
  ]
  foods: any = [{ id: 1, name: "Food 1", price: 20, url: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" },
  { id: 2, name: "Food 2 ", price: 30, url: "https://images.unsplash.com/photo-1575573550252-4bea31b9d485?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" },
  { id: 3, name: "Food 3", price: 40, url: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1015&q=80" },
  { id: 4, name: "Food 4", price: 50, url: "https://images.unsplash.com/photo-1535955565956-4a631184a821?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80" },
  { id: 5, name: "Food 5 ", price: 60, url: "https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" }]



  constructor() {

  }

  ngOnInit(): void {
    ///Optional will change after content is loaded
    setTimeout(this.initializeBanner, 200);
  }

  onBannerSwipeLeft(e) {
    let curr_banner_elem = document.getElementsByClassName("banner-active");
    let next_banner_index = Number(curr_banner_elem[0].id.replace(/\D/g, "")) + 1;
    let curr_byID=document.getElementById(curr_banner_elem[0].id);
    if (next_banner_index < this.banners.length) {
      let next_banner_elem=document.getElementById("banner-"+next_banner_index)
      document.getElementById(curr_banner_elem[0].id+'-tracker').classList.remove('active_tracker');
      curr_byID.classList.add("banner-inactive");
      curr_byID.classList.remove("banner-active");
      curr_byID.style.cssText += 'right:105%';
      setTimeout(function(){next_banner_elem.classList.remove("banner-inactive");
      next_banner_elem.classList.add("banner-active");},500)
      next_banner_elem.style.cssText += 'right:0%';
      document.getElementById("banner-"+next_banner_index+'-tracker').classList.add('active_tracker');
    }
   
  }
  onBannerSwipeRight(e) {
    let curr_banner_elem = document.getElementsByClassName("banner-active");
    let next_banner_index = Number(curr_banner_elem[0].id.replace(/\D/g, "")) - 1;
    let curr_byID=document.getElementById(curr_banner_elem[0].id);
    if (next_banner_index >= 0) {
      let next_banner_elem=document.getElementById("banner-"+next_banner_index)
      document.getElementById(curr_banner_elem[0].id+'-tracker').classList.remove('active_tracker');
      curr_byID.classList.add("banner-inactive");
      curr_byID.classList.remove("banner-active");
      curr_byID.style.cssText += 'right:-105%';
      setTimeout(function(){next_banner_elem.classList.remove("banner-inactive");
      next_banner_elem.classList.add("banner-active");},1000)
      next_banner_elem.style.cssText += 'right:0%';
      document.getElementById("banner-"+next_banner_index+'-tracker').classList.add('active_tracker');
    }
    // this.swipeCard(-1)
  }

  initializeBanner() {
    let banner_elem = document.getElementById("banner-0");
    console.log(banner_elem)
    banner_elem.classList.remove("banner-inactive");
    banner_elem.classList.add("banner-active");
    banner_elem.style.cssText += 'right:0%';
    document.getElementById("banner-0-tracker").classList.add('active_tracker');
  }
}
