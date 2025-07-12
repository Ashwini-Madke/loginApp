import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';
  loading = false;
  constructor(private serive: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.serive.loginUserFormRemote(this.user).subscribe(
      data => {
        console.log("Response recieved");
        this.router.navigate(['/home'])
      },
      error => {
        console.log("Exception occured");
       
        this.msg = "Bad credentials, Please enter correct credentials";
      })
  }

  gotoRegistration() {
    this.router.navigate(['/registration'])
  }

  gotoResetPassword() {
    this.router.navigate(['/resetpassword'])
  }

  gotoProfile() {
    this.router.navigate(['/profile'])
  }

}
