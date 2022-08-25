import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServices } from '../../Services/Employee.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogElementsExample } from './deletedialogue';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  EmpObj:any={};

  emplist:any[]=[];
    EmployeeId:string|null='';
    
  constructor(private _route:ActivatedRoute,private obj:EmployeeServices,private _router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.EmployeeId= this._route.snapshot.paramMap.get('id');
    // this.EmpObj = this.obj.findRowFromService(this.EmployeeId);
    this.obj.getempbyid(this.EmployeeId).subscribe((item)=>{
      this.EmpObj=item;
      console.log(this.EmpObj)
    })
    
  
  }
  GoEmployee1(){
    this._router.navigate(['/employee']);

  }
  
  
  openDialog() {
    this.dialog.open(DialogElementsExample);
  }

}
