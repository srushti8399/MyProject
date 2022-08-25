import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServices } from '../../Services/product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  ProdObj:any={};
  Productcode:string|null='';

  constructor(private _route:ActivatedRoute,private obj1:ProductServices,private _router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.Productcode= this._route.snapshot.paramMap.get('code');
    console.log(this.Productcode)
    this.obj1.getProductbyId(this.Productcode).subscribe((item)=>{
      this.ProdObj=item;
      console.log(this.ProdObj);
    })
  }
  Backtoproduct(){
    this._router.navigate(['/product']);
  }

}
