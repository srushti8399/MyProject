import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';
import { FormsModule } from '@angular/forms';
import { DialogElementsExample } from './delete/deletedialogue';
import { DialogeditExample } from './edit/editdialogue';





@NgModule({
  declarations: [
    EmployeeComponent,ViewComponent,EditComponent,DeleteComponent,DialogElementsExample,DialogeditExample
  ],
  imports: [
    CommonModule,
    AngularmaterialModule,
    FormsModule
    
  ],
  exports:[
    EmployeeComponent,ViewComponent,EditComponent,DeleteComponent,DialogElementsExample,DialogeditExample
  ]
})
export class EmployeeModule { }
