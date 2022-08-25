import { Component, OnInit } from '@angular/core';
import { EmployeeServices } from '../Services/Employee.service';
import { Iemployee } from '../Models/employee.interface';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:Iemployee[]= [];
  EmployeeId:string|null='';
  displayedColumns: string[] = ['firstname',  'lastname', 'id' ,'actions'];

  constructor(private _empServices:EmployeeServices,private _route:ActivatedRoute, private _router:Router ) { }

  ngOnInit(): void {
    this.EmployeeId= this._route.snapshot.paramMap.get('id');
    this._empServices.getEmployeeByApi().subscribe((empdata)=>{
      this.employees= empdata;
      
  })
  }
  //dataSource= this._empServices.getEmployees();
  //dataSource=this.employees;
  navigate(element:any){
    if(element.id==7){
      this._router.navigate(['/logout']);
    }
    else
    this._router.navigate(['/employee',element.id]);

}
navigatetoDelete(element:any){
  this._router.navigate(['/delete',element.id]);
}
navigatetoedit(element:any){
  this._router.navigate(['/edit',element.id]);
}
}