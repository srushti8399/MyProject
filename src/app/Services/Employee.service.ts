import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import{Injectable} from'@angular/core'
import { catchError, Observable, ReplaySubject, throwError } from 'rxjs';
import { Iemployee } from '../Models/employee.interface';

@Injectable()
export class EmployeeServices{
    employeesArray:Iemployee[]=[];
    employees:any;
//  employees1:Iemployee[]=[
//          {id:"1",firstname:'John',middlename:'jerry',lastname:'jack', age:34,gender:'Male',Dob:'20-jan-2000',add1:'new york',add2:'USA'},
//      {id:"2",firstname:'Mary',middlename:'andrew',lastname:'hack', age:22,gender:'female',Dob:'25-feb-2002',add1:'new york',add2:'USA'},
//      {id:"3",firstname:'priya',middlename:'bheem',lastname:'mack',age:45,gender:'female',Dob:'23-mar-2004',add1:'new york',add2:'USA'},
//      {id:"4",firstname:'raju',middlename:'ram',lastname:'rack',age:23,gender:'Male',Dob:'21-apr-2005',add1:'new york',add2:'USA'},
//      {id:"5",firstname:'pinky',middlename:'shyam',lastname:'pack',age:34,gender:'female',Dob:'22-jun-2003',add1:'new york',add2:'USA'}
//      ]
//      getEmployees():Iemployee[] {
//          return this.employees1;
 //    }
    EmployeeData:string='api/employees1';
    constructor(private _http:HttpClient){

    }
    getEmployeeByApi():Observable<Iemployee[]>{
        return this._http.get<Iemployee[]>(this.EmployeeData).pipe(catchError(this.handleError));
     }
     createEmployeeByApi(emp:Iemployee){
      return this._http.post<Iemployee>(this.EmployeeData,emp,{
        headers: new HttpHeaders(
          {'Content-Type':'application/json'}
        )
      }).pipe(catchError(this.handleError))
     }
     returnEmployeeArray()
     {
         this.getEmployeeByApi().subscribe((empdata)=>{
             console.log(empdata) 
             this.employeesArray= empdata;
         })
         return this.employeesArray;
     }
     findRowFromService(id:any)
   {
    this.returnEmployeeArray()
    let temp={}
    this.employeesArray.map(item=>{
      if(item.id==id)
      {
        temp = item;
  
      }
      return item
    })
    return temp;
    console.log("row printing");
   }
   private handleError(errorResponse:HttpErrorResponse){
    console.log(errorResponse);
   // console.log(errorResponse.status);
   // console.log(errorResponse.url);
   if(errorResponse.error  instanceof ErrorEvent)
   {
       console.log(errorResponse.message);
       // Client side error
   }
   else
   {
       console.log(errorResponse.message);
       // server side
   }
   //return new ErrorObservable('')
 return throwError(()=>{
   return 'Something wrong occur!!';
 });
   }
   getempbyid(id:any) {
    let subject= new ReplaySubject();
     this._http.get<Iemployee[]>(this.EmployeeData).subscribe((data)=>{
     this.employees= data.find(x=>x.id==id);
    subject.next(this.employees);
    subject.complete();
    });
return subject;
    }
}
