import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateproductComponent } from './product/createproduct/createproduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteComponent } from './employee/delete/delete.component';
import { EditComponent } from './employee/edit/edit.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewComponent } from './employee/view/view.component';
import { ViewproductComponent } from './product/viewproduct/viewproduct.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegistrationComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"logout",component:LoginComponent},
  {path:"employee",component:EmployeeComponent},
  {path:"product",component:ProductComponent},
  {path:"createproduct",component:CreateproductComponent},
  {path:"editproduct/:code",component:EditproductComponent},
  {path:"viewproduct/:code",component:ViewproductComponent},
  {path:"employee/:id",component:ViewComponent},
  {path:"edit/:id",component:EditComponent},
  {path:"delete/:id",component:DeleteComponent},
  {path:"",redirectTo:"login",pathMatch:'full'},
  {path:"**",component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
