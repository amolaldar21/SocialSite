import { Injectable } from '@angular/core';
import{HttpClient}  from '@angular/common/http'
import { SingUp } from '../model/signInUp';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url="http://localhost:3000/signUp"
  constructor(private _http:HttpClient) {


   }

  Sentdata(data: SingUp,form: NgForm){
    this._http.post<SingUp>(this.url,data).subscribe((response)=>{
form.reset()


    })
    
    
  }
}
