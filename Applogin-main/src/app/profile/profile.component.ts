import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

 
  loading: false;
  users: User[];
  msg: '';

  constructor(private http: HttpClient, private registrationService: RegistrationService, private router: Router) {
   
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.registrationService.getAllUsers()
      .subscribe((data: any) => {
        console.log(data);
        this.users = data;
      });
      
  }

  gotoLogin() {
    this.router.navigate(['/home']);
  }

}
