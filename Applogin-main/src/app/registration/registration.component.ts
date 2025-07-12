import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroupDirective } from '@angular/forms';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user = new User();
  msg = '';

  constructor(private registrationService: RegistrationService, private router: Router) { }


  ngOnInit() {
    
  }


  registerUser() {
    this.registrationService.registerFormRemote(this.user).
  subscribe(
    data => {
     
      this.msg = "Registration Succefull";
      this.router.navigate(['/login']);
    },
    error => {
      console.log("Exception occured");
      this.msg = error.error;
    });
    
    
  }



}
