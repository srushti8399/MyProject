import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServices } from '../../Services/Employee.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogeditExample } from './editdialogue';
import { MatDialog } from '@angular/material/dialog';
import { Iemployee } from '../../Models/employee.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  emplist:any[]=[];
  EmpObj:any={};
  EmployeeId:string|null='';
  


  saveUser(form:NgForm){
      console.log(form);
         }

  constructor(private _route:ActivatedRoute,private obj1:EmployeeServices,private _router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.EmployeeId= this._route.snapshot.paramMap.get('id');
    //  this.EmpObj = this.obj1.findRowFromService(this.EmployeeId);
    this.obj1.getempbyid(this.EmployeeId).subscribe((item)=>{
      this.EmpObj=item;
      console.log(this.EmpObj)
    })
     
      
}
  Update(){
    
    this.dialog.open(DialogeditExample);
  
}
Backtoemployee(){
  this._router.navigate(['/employee']);
}

}
  


