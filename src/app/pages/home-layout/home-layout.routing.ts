import { Routes } from "@angular/router";
import { HomeComponent } from '../home/home.component';


export const HomeLayout: Routes = [
  {
    path: "",
    redirectTo: "menu-comp",
    pathMatch: "full",
  },{
    path:"menu-comp",
    component:HomeComponent
  }
  
  
];
