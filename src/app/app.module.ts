import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { Userservices } from './Services/Login.services';
import { RegistrationModule } from './registration/registration.module';
import { AngularmaterialModule } from './angularmaterial/angularmaterial.module';

import { EmployeeModule } from './employee/employee.module';
import { EmployeeServices } from './Services/Employee.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Dataservice } from './Services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductServices } from './Services/product.service';
import { ProductModule } from './product/product.module';



@NgModule({
  declarations: [
    AppComponent,
    
    
  


    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    FormsModule,
    DashboardModule,
    RegistrationModule,
    AngularmaterialModule,
    EmployeeModule,
    HttpClientModule,
    ProductModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(Dataservice)
    
  ],
  providers: [Userservices,
  EmployeeServices,ProductServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
