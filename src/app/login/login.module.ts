import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { RegistrationModule } from '../registration/registration.module';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    DashboardModule,
    RegistrationModule,
    AngularmaterialModule,
    RouterModule
  ],
  exports:[LoginComponent]
})
export class LoginModule { }
