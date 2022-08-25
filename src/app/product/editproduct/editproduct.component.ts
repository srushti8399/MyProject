import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServices } from 'src/app/Services/product.service'; 
import { CustomValidator } from 'src/app/Validation/Validator'; 
import { DialogedProductedit } from './editproduct.dialogue';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  productForm!:FormGroup;
  category = new FormControl('');
  
  ProdObj:any={};
  Productcode:string|null='';

  constructor(private _route:ActivatedRoute,private obj1:ProductServices,private _router:Router,private fb:FormBuilder,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.Productcode= this._route.snapshot.paramMap.get('code');
    console.log(this.Productcode)
    this.obj1.getProductbyId(this.Productcode).subscribe((item)=>{
      this.ProdObj=item;
      console.log(this.ProdObj);
    })
      this.productForm= this.fb.group({
        category:["",Validators.required],
    
        name: ["",Validators.required],
        description:["",[Validators.required, CustomValidator.descriptioncheck]],
        code:[null,[Validators.required,Validators.minLength(1),Validators.maxLength(6)]],
        colour: ["",Validators.required],
        price:[null,[Validators.required,Validators.min(200),Validators.max(100000)]],
        stock:[null,[Validators.required,Validators.min(1)]],
        image:["",Validators.required]
  
      
    })
  }
  Update1(){
    this.dialog.open(DialogedProductedit);
  }
  Backtoproduct(){
    this._router.navigate(['/product']);
  }

}
