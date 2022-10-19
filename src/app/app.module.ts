import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as Hammer from 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperHomeComponent } from './pages/super-home/super-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import { MatListModule } from "@angular/material/list";
import { TestCompComponent } from './pages/test-comp/test-comp.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { DashboardMenuItemsComponent } from './components/dashboard-menu-items/dashboard-menu-items.component';
import { MenuListItemsComponent } from './components/menu-list-items/menu-list-items.component';
export class HammerConfig extends HammerGestureConfig {
  overrides = {
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}
@NgModule({
  declarations: [
    AppComponent,
    SuperHomeComponent,
    HomeComponent,
    HomeLayoutComponent,
    TestCompComponent,
    DashboardMenuItemsComponent,
    MenuListItemsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutingModule,
    MatListModule,
    MatButtonModule,
    MatChipsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    HammerModule,
    MatToolbarModule,
    NgxScannerQrcodeModule
  ],
  providers: [{provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
