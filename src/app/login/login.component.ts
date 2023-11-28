import { Component, OnInit } from '@angular/core';
import { SingUp } from '../model/signInUp';
import{ NgForm} from '@angular/forms'
import{ServiceService} from '../services/service.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit() {
  }


SignUpData(data:SingUp,form: NgForm){
   this.service.Sentdata(data,form)
  //  this.signUpForm.resetForm();
  // console.log(data);
  
  

  

}
navigation()
{
  this.router.navigate([''])
  // this.router.navigateByUrl('')
  // window.location.href='http://localhost:4200';
}



}


