import { Component, OnInit } from '@angular/core';
import { SingUp } from '../model/signInUp';
import{ NgForm} from '@angular/forms'
import{ServiceService} from '../services/service.service'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  islogin:boolean=true;
  displayPawwordFeild:boolean=false;
  isdisabled:boolean=true
  passwordType:string="text"
  eyeshow:boolean=true
  
loginData={
  "username":"",
  "password":""

}

  constructor(private service:ServiceService,private router:Router ,private _http:HttpClient) { }

  ngOnInit() {
  }
loginInfo(data:any){
  this.loginData=data
  console.log(data);
  console.log(this.loginData);
  
  
 this._http.get<any[]>(this.service.url).subscribe(responce=>{
  const valid=responce.find((a:any)=>{
    // console.log(a.email,a.password);
    // console.log(this.loginData.username,this.loginData.username);
    
    
    return a.email==this.loginData.username && a.password==this.loginData.password
  })
  if(valid){
    alert("Login Successfully")
    this.router.navigate([""])
  }
  else{
    alert("invalid details")
    
    
  }
 })
  
  
  

 
 
 
}
  passwordToggle(){
    if(this.passwordType=="text"){
      this.passwordType="password";
      this.eyeshow=false;

    }
    else{
      this.passwordType="text";
      this.eyeshow=true;
    }
  }
SignUpData(data:SingUp,form:NgForm){
  console.log(data);
   this.service.Sentdata(data,form)
  //  alert("SingUp Successfully")
   this.router.navigate(['login'])
  //  this.signUpForm.resetForm();
   
  
  

  

}
navigation()
{
  this.router.navigate([''])
  // this.router.navigateByUrl('')
  // window.location.href='http://localhost:4200';
}

signOrSingUp(){
  this.islogin=!this.islogin
}
nextField(){

  this.displayPawwordFeild=! this.displayPawwordFeild
  this.isdisabled=!this.isdisabled
}
// returntoInput()
// {
//   this.displayPawwordFeild=false
// }

}


