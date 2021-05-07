import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {NgForm} from '@angular/forms';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user = new User();
  msg=''; 
  _router: any;
  _service: any;


  constructor(private_service : RegistrationService,private_router : Router) { }

  ngOnInit(): void {
  }


  registerUser()
  {
   data=>{
     console.log(['/registered']);
   }
      
    }
    gotosuccess()
    {
      this._router.navigate(['/success']);
    }
   
  

  gotologin()
  {
    this._router.navigate(['/login']);
  }
}

