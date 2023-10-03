import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerDeshbordComponent } from './customer-deshbord/customer-deshbord.component';
import { HttpClientModule } from '@angular/common/http';
import { ManagerDashbordComponent } from './manager-dashbord/manager-dashbord.component';
import { CreatAccountComponent } from './creat-account/creat-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerLoginComponent,
    CustomerDeshbordComponent,
    ManagerDashbordComponent,
    CreatAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
