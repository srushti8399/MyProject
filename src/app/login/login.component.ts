import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Userservices } from '../Services/Login.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users:any[]= [];
  emailuser:string="";
  passworduser:string="";
  isLogin:boolean=false;
  issignup:boolean=false;

  constructor(private _userservice:Userservices) { }
  user1=this._userservice.getusers();


  ngOnInit(): void {
  }

  LoginForm(form:NgForm){

    console.log(form);
    console.log(form.value);
   }
    onclick(){
   // if (this.emailuser==this.user1[0].useremail   && this.passworduser==this.user1[0].userpassword){
     // this.isLogin=!this.isLogin;

    // }
    //else{
       //alert("Invalid credentials");
     //}
     this.isLogin=this._userservice.Validate(this.emailuser,this.passworduser);
   }
   onclicksignup(){
        this.issignup=!this.issignup;
   }

}
