import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AppRoutingModule } from '../app-routing.module';
import { EditproductComponent } from './editproduct/editproduct.component';
import { DialogedProductedit } from './editproduct/editproduct.dialogue';






@NgModule({
  declarations: [
    ProductComponent,CreateproductComponent,ViewproductComponent,EditproductComponent,DialogedProductedit
  ],
  imports: [
    CommonModule,
    AngularmaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    ProductComponent,CreateproductComponent,ViewproductComponent,EditproductComponent,DialogedProductedit
  ]
})
export class ProductModule { }
