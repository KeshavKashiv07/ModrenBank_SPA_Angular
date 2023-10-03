import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerDeshbordComponent } from './customer-deshbord/customer-deshbord.component';
import { ManagerDashbordComponent } from './manager-dashbord/manager-dashbord.component';
import { CreatAccountComponent } from './creat-account/creat-account.component';

const routes: Routes = [
   {
     path: "home",
     component: HomeComponent
   },
   {
    path: "customerDashbord/:id",
    component: CustomerDeshbordComponent,
  },
  {
    path: "customer-login",
    component: CustomerLoginComponent
  },
  {
    path: "managerDashbord",
    component: ManagerDashbordComponent
  },
  {
    path: "creatAccount",
    component: CreatAccountComponent
  },   
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }
 
  // {
  //   path:"**",
  //   component:PageNoteFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
