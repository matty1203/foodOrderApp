import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeLayout } from './home-layout.routing';


@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(HomeLayout),
    CommonModule,
  ]
})
export class HomeLayoutModule { }
