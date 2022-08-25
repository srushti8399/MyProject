import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";
import { Iproduct } from "../Models/product.interface";


@Injectable()
export class ProductServices{
    productData:string='api/products';
    products:any;
    constructor(private _http:HttpClient){}
    getProductbyApi():Observable<Iproduct[]>{
        return this._http.get<Iproduct[]>(this.productData)
    }

    getProductbyId(id:any){
        let subject=new ReplaySubject();
        this._http.get<Iproduct[]>(this.productData).subscribe((data)=>{
            this.products=data.find(x=>x.code==id);
            subject.next(this.products);
            subject.complete();
        });
        return subject;

    }
    
}

