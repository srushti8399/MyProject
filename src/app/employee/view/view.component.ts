import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServices } from '../../Services/Employee.service';
import { Router } from '@angular/router';
import { Iemployee } from '../../Models/employee.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  EmpObj:any={};
  emp1:any={};
  emplist:Iemployee[]=[];
     EmployeeId:string|null='';
    // Empfirstname:string|null='';
    // Empmiddlename:string|null='';
    // Emplastname:string|null='';
    // Empage:number|null=0;
    // Empdate:string|null='';
    // Empadd1:string|null='';
    // Empadd2:string|null='';
    // Empgen:string|null='';
    // displayedColumns: string[] = ['firstname','middlename','lastname','age' ,'gen','id' ,'Dob','add1','add2'];
    

  constructor(private _route:ActivatedRoute,private obj:EmployeeServices,private _router:Router) { }

  ngOnInit(): void {
    this.EmployeeId= this._route.snapshot.paramMap.get('id');
    // this.EmpObj = this.obj.findRowFromService(this.EmployeeId);
    this.obj.getempbyid(this.EmployeeId).subscribe((item)=>{
      this.EmpObj=item;
      console.log(this.EmpObj)
    })
     
    // 
  //   this.obj.getEmployeeByApi().subscribe((empdata)=>{
  //     this.emplist= empdata;
  //   console.log(this.emplist)})
  //   // this.emplist=this.obj.employees1;
  //   //    console.log(this.emplist);
  //   // 
  //  // let empobj={};
  //      this.emplist.map(item=>{
  //       if(item.id==this.EmployeeId)
  //       {
  //         console.log(this.emplist)
  //        // empobj=item
  //          this.Empfirstname=item.firstname;
  //          this.EmployeeId=item.id;
  //          this.Empgen=item.gender;
  //          this.Empadd1=item.add1;
  //          this.Empadd2=item.add2;
  //          this.Empmiddlename=item.middlename;
  //         this.Emplastname=item.lastname;
  //         this.Empage=item.age;
  //         this.Empdate=item.Dob;
  //   }
  // })
  
  }
  

  

  GoEmployee(){
     this._router.navigate(['/employee']);
  }

  

}

//  this.EmpObj=this.emplist;
//     //  console.log(this.emplist);