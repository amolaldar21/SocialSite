import { Component, OnInit } from '@angular/core';
import { SingUp } from '../model/signInUp';
import{ NgForm} from '@angular/forms'
import{ServiceService} from '../services/service.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private service:ServiceService) { }

  ngOnInit() {
  }


SignUpData(data:SingUp,form: NgForm){
   this.service.Sentdata(data,form)
  //  this.signUpForm.resetForm();
  // console.log(data);
  
  

  

}
formreset(form:NgForm)
{
  form.reset()
}


}


