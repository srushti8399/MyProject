import { Injectable } from "@angular/core";

@Injectable()
export class Userservices{
    users:any[]=[
        {useremail:"admin",userpassword:"admin"},
    
    ]
    Validate(email:string,password:string){
        if(email==this.users[0].useremail && password==this.users[0].userpassword){
            return true;
        }
          else{
           alert("enter valid credentials");
             return false;
          }
    }

    getusers():any[] {
        return this.users;
    }
   
}