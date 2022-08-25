import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServices } from '../Services/product.service';
import { Iproduct } from '../Models/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Iproduct[]=[];
  displayedColumns: string[] = ['image','category','name', 'price','actions'];

  constructor(private _prodServices:ProductServices, private _router:Router,private _route:ActivatedRoute) {}

  ngOnInit(): void {
    
    this._prodServices.getProductbyApi().subscribe((proddata)=>{
      this.products=proddata;
    })

  }
  createproduct(){
    this._router.navigate(['/createproduct']);
    }
   viewproduct(element:any){
    this._router.navigate(['/viewproduct',element.code])

   }
   editproduct(element:any){
    this._router.navigate(['/editproduct',element.code])
  
   }
}
