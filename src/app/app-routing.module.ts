import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { SuperHomeComponent } from './pages/super-home/super-home.component';
import { TestCompComponent } from './pages/test-comp/test-comp.component';

const routes: Routes = [{
  path:'',
  redirectTo: 'scan-home',
  pathMatch: 'full'
},
{
  path:"scan-home",
  component:SuperHomeComponent
},
{
  path:"test",
  component:TestCompComponent
},
{
  path:"home",
  component:HomeLayoutComponent,
  loadChildren: () =>
  
    import("./pages/home-layout/home-layout.module").then((m) => m.HomeLayoutModule,),

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
